import { Tag } from '@prisma/client';

export interface ICreateTag {
  run(params: ICreateTag.Params): Promise<ICreateTag.Response>;
}

export namespace ICreateTag {
  export type Params = {
    name: string;
    color: string;
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
