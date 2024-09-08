import { ITasksRepository } from '@/domain/interfaces';
import { TasksRepository } from '@/infra/prisma';
import { makePrisma } from '@/main/factories/infra';

export const makeTasksRepository = (): ITasksRepository => {
  return new TasksRepository(makePrisma());
};
