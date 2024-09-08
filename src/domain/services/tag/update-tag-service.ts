import { BadRequestError, ForbiddenError } from '@/application/errors';
import { ITagsRepository, IUpdateTag } from '@/domain/interfaces';

export class UpdateTagService implements IUpdateTag {
  constructor(private readonly tagsRepository: ITagsRepository) {}

  async run({ id, userId, ...props }: IUpdateTag.Params): Promise<IUpdateTag.Response> {
    const tag = await this.tagsRepository.getTagById({ id, userId });

    if (!tag) {
      throw new ForbiddenError('Tag not found or not authorized.');
    }

    const tagUpdated = await this.tagsRepository.updateTag({ id, ...props });

    if (!tagUpdated) {
      throw new BadRequestError('Error in update tag.');
    }

    return { tag: tagUpdated };
  }
}
