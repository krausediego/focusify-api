import { ICreateTag, IDeleteTag, IFindAllPaginatedTags, IGetTagById, IUpdateTag } from '.';

export namespace ITag {
  export type TagServicesName = 'createTag' | 'findAllPaginatedTags' | 'getTagById' | 'updateTag' | 'deleteTag';

  export type TagServices = () => ICreateTag | IFindAllPaginatedTags | IGetTagById | IUpdateTag | IDeleteTag;
}
