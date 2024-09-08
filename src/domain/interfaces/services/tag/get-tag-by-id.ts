import { Tag } from '@prisma/client';

export interface IGetTagById {
  run(params: IGetTagById.Params): Promise<IGetTagById.Response>;
}

export namespace IGetTagById {
  export type Params = {
    id: string;
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
