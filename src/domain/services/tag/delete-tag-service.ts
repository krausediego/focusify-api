import { BadRequestError, ForbiddenError } from '@/application/errors';
import { IDeleteTag, ITagsRepository } from '@/domain/interfaces';

export class DeleteTagService implements IDeleteTag {
  constructor(private readonly tagsRepository: ITagsRepository) {}

  async run({ id, userId }: IDeleteTag.Params): Promise<IDeleteTag.Response> {
    const tag = await this.tagsRepository.getTagById({ id, userId });

    if (!tag) {
      throw new ForbiddenError('Tag not found or not authorized.');
    }

    const tagDeleted = await this.tagsRepository.deleteTag({ id });

    if (!tagDeleted) {
      throw new BadRequestError('Error in delete tag.');
    }

    return { tagId: id };
  }
}
