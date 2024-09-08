import { IPrisma, ITagsRepository } from '@/domain/interfaces';
import { Prisma, Tag } from '@prisma/client';

export class TagsRepository implements ITagsRepository {
  constructor(private readonly prisma: IPrisma) {}

  async createTag(data: Prisma.TagUncheckedCreateInput): Promise<Tag | null> {
    return this.prisma.getPrismaClient().tag.create({ data });
  }

  async getAllPaginatedTags({ userId, page, limit }: ITagsRepository.PaginatedTagsProps): Promise<Tag[] | null> {
    const paginated = (page - 1) * limit || 0;

    return this.prisma.getPrismaClient().tag.findMany({
      where: { userId },
      skip: paginated,
      take: Number(limit) || 10,
      orderBy: [{ name: 'asc' }],
    });
  }

  async getTagById({ id, userId }: ITagsRepository.GetByIdProps): Promise<Tag | null> {
    return this.prisma.getPrismaClient().tag.findFirst({ where: { AND: [{ id }, { userId }] } });
  }

  async updateTag({ id, ...props }: ITagsRepository.UpdateTagProps): Promise<Tag | null> {
    return this.prisma.getPrismaClient().tag.update({ data: props, where: { id } });
  }

  async deleteTag({ id }: ITagsRepository.DeleteProps): Promise<Tag | null> {
    return this.prisma.getPrismaClient().tag.delete({ where: { id } });
  }
}
