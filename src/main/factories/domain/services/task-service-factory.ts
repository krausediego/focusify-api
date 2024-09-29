import { ITask, ICreateTask, IGetTaskById, IGetAllActiveTasks } from '@/domain/interfaces';
import { CreateTaskService, GetAllActiveTasksService, GetTaskByIdService } from '@/domain/services';
import { makeProjectsRepository, makeTagsRepository, makeTasksRepository } from '@/main/factories/domain/repositories';

const createTask = (): ICreateTask => {
  return new CreateTaskService(makeTasksRepository(), makeProjectsRepository(), makeTagsRepository());
};

const getTaskById = (): IGetTaskById => {
  return new GetTaskByIdService(makeTasksRepository());
};

const getAllActiveTasks = (): IGetAllActiveTasks => {
  return new GetAllActiveTasksService(makeTasksRepository());
};

const services = {
  createTask,
  getTaskById,
  getAllActiveTasks,
};

export const makeTaskService = (serviceName: ITask.TaskServicesName): ITask.TaskServices => {
  return services[serviceName];
};
