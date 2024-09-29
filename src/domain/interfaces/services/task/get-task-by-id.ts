import { Task } from '@prisma/client';

export interface IGetTaskById {
  run(params: IGetTaskById.Params): Promise<IGetTaskById.Response>;
}

export namespace IGetTaskById {
  export type Params = {
    id: string;
    userId: string;
  };

  export type ParamsService = {
    params: Params;
    locals: any;
  };

  export type Response = {
    task: {
      tags: {
        name: string;
        id: string;
        color: string;
      }[];
      project: {
        name: string;
        id: string;
        color: string;
      };
    } & Task;
  };
}
