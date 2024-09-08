import { Prisma, Tag } from '@prisma/client';

export interface ITagsRepository {
  createTag(data: Prisma.TagUncheckedCreateInput): Promise<Tag | null>;
  getAllPaginatedTags(data: ITagsRepository.PaginatedTagsProps): Promise<Tag[] | null>;
  updateTag(data: ITagsRepository.UpdateTagProps): Promise<Tag | null>;
  getTagById(data: ITagsRepository.GetByIdProps): Promise<Tag | null>;
  deleteTag(data: ITagsRepository.DeleteProps): Promise<Tag | null>;
}

export namespace ITagsRepository {
  export type PaginatedTagsProps = {
    userId: string;
    page: number;
    limit: number;
  };

  export type UpdateTagProps = {
    id: string;
    name?: string;
    color?: string;
    status?: boolean;
  };

  export type GetByIdProps = {
    id: string;
    userId: string;
  };

  export type DeleteProps = {
    id: string;
  };
}
