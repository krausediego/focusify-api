import { ITask, ICreateTask } from '@/domain/interfaces';
import { CreateTaskService } from '@/domain/services';
import { makeProjectsRepository, makeTagsRepository, makeTasksRepository } from '@/main/factories/domain/repositories';

const createTask = (): ICreateTask => {
  return new CreateTaskService(makeTasksRepository(), makeProjectsRepository(), makeTagsRepository());
};

const services = {
  createTask,
};

export const makeTaskService = (serviceName: ITask.TaskServicesName): ITask.TaskServices => {
  return services[serviceName];
};
