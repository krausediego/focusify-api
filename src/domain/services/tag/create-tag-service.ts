import { BadRequestError } from '@/application/errors';
import { ICreateTag, ITagsRepository } from '@/domain/interfaces';

export class CreateTagService implements ICreateTag {
  constructor(private readonly tagsRepository: ITagsRepository) {}

  async run({ name, color, userId }: ICreateTag.Params): Promise<ICreateTag.Response> {
    const tag = await this.tagsRepository.createTag({
      name,
      color,
      userId,
    });

    if (!tag) {
      throw new BadRequestError('Error in create tag, try again.');
    }

    return { tag };
  }
}
