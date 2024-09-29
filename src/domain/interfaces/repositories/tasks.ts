import { Prisma, Task } from '@prisma/client';

export interface ITasksRepository {
  createTask(data: ITasksRepository.CreateTask): Promise<Task | null>;
  findTaskById(data: ITasksRepository.FindById): Promise<ITasksRepository.FindByIdResponse>;
  findAllActiveTasks(data: ITasksRepository.findAllActiveTasksProps): Promise<ITasksRepository.FindByIdResponse[] | null>;
}

export namespace ITasksRepository {
  export type CreateTask = {
    tagIds: string[];
    projectId: string;
  } & Prisma.TaskUncheckedCreateInput;

  export type FindById = {
    id: string;
    userId: string;
  };

  export type FindByIdResponse = {
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

  export type findAllActiveTasksProps = {
    userId: string;
    name?: string;
    startsWith?: string | Date;
    endsWith?: string | Date;
    projectId?: string;
    page?: number;
    limit?: number;
  };
}
