import { Tag } from '@prisma/client';

export interface IFindAllPaginatedTags {
  run(params: IFindAllPaginatedTags.Params): Promise<IFindAllPaginatedTags.Response>;
}

export namespace IFindAllPaginatedTags {
  export type Params = {
    userId: string;
    page: number;
    limit: number;
  };

  export type ParamsService = {
    params: Params;
    locals: any;
  };

  export type Response = {
    tags: Tag[] | null;
  };
}
