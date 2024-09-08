import { IFindAllPaginatedTags, ITagsRepository } from '@/domain/interfaces';

export class FindAllPaginatedTagsService implements IFindAllPaginatedTags {
  constructor(private readonly tagsRepository: ITagsRepository) {}

  async run({ userId, page, limit }: IFindAllPaginatedTags.Params): Promise<IFindAllPaginatedTags.Response> {
    const tags = await this.tagsRepository.getAllPaginatedTags({
      userId,
      page,
      limit,
    });

    return { tags };
  }
}
