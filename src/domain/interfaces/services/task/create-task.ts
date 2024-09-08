import { Priorities, Task } from '@prisma/client';

export interface ICreateTask {
  run(params: ICreateTask.Params): Promise<ICreateTask.Response>;
}

export namespace ICreateTask {
  export type Params = {
    name: string;
    estimatedPomodoros: number;
    date: string;
    priority: Priorities;
    status: boolean;
    active: boolean;
    userId: string;
    tagIds: string[];
    projectId: string;
  };

  export type ParamsService = {
    params: Params;
    locals: any;
  };

  export type Response = {
    task: Task;
  };
}
