import { ITag, ICreateTag, IFindAllPaginatedTags, IGetTagById, IUpdateTag, IDeleteTag } from '@/domain/interfaces';
import { CreateTagService, FindAllPaginatedTagsService, GetTagByIdService, UpdateTagService, DeleteTagService } from '@/domain/services';
import { makeTagsRepository } from '@/main/factories/domain/repositories';

const createTag = (): ICreateTag => {
  return new CreateTagService(makeTagsRepository());
};

const findAllPaginatedTags = (): IFindAllPaginatedTags => {
  return new FindAllPaginatedTagsService(makeTagsRepository());
};

const getTagById = (): IGetTagById => {
  return new GetTagByIdService(makeTagsRepository());
};

const updateTag = (): IUpdateTag => {
  return new UpdateTagService(makeTagsRepository());
};

const deleteTag = (): IDeleteTag => {
  return new DeleteTagService(makeTagsRepository());
};

const services = {
  createTag,
  findAllPaginatedTags,
  getTagById,
  updateTag,
  deleteTag,
};

export const makeTagService = (serviceName: ITag.TagServicesName): ITag.TagServices => {
  return services[serviceName];
};
