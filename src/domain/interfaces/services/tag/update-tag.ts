import { Tag } from '@prisma/client';

export interface IUpdateTag {
  run(params: IUpdateTag.Params): Promise<IUpdateTag.Response>;
}

export namespace IUpdateTag {
  export type Params = {
    id: string;
    name?: string;
    color?: string;
    status?: boolean;
    userId: string;
  };

  export type ParamsService = {
    params: Params;
    locals: any;
  };

  export type Response = {
    tag: Tag;
  };
}
