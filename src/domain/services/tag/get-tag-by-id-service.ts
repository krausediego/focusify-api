import { ForbiddenError } from '@/application/errors';
import { IGetTagById, ITagsRepository } from '@/domain/interfaces';

export class GetTagByIdService implements IGetTagById {
  constructor(private readonly tagsRepository: ITagsRepository) {}

  async run({ id, userId }: IGetTagById.Params): Promise<IGetTagById.Response> {
    const tag = await this.tagsRepository.getTagById({ id, userId });

    if (!tag) {
      throw new ForbiddenError('Tag not found');
    }

    return { tag };
  }
}
