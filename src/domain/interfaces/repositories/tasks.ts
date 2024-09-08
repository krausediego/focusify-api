import { Prisma, Task } from '@prisma/client';

export interface ITasksRepository {
  createTask(data: ITasksRepository.CreateTask): Promise<Task | null>;
}

export namespace ITasksRepository {
  export type CreateTask = {
    tagIds: string[];
    projectId: string;
  } & Prisma.TaskUncheckedCreateInput;
}
