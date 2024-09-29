import { Task } from '@prisma/client';

export interface IGetAllActiveTasks {
  run(params: IGetAllActiveTasks.Params): Promise<IGetAllActiveTasks.Response[] | null>;
}

export namespace IGetAllActiveTasks {
  export type Params = {
    userId: string;
    name?: string;
    startsWith?: string;
    endsWith?: string;
    projectId?: string;
    page?: number;
    limit?: number;
  };

  export type ParamsService = {
    params: Params;
    locals: any;
  };

  export type Response = {
    task: Task;
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
  };
}
