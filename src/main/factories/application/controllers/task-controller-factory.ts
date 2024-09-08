import { TaskController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { ITask } from '@/domain/interfaces';
import { makeTaskService } from '@/main/factories/domain/services';

export const makeTaskController = (serviceName: ITask.TaskServicesName): Controller => {
  return new TaskController(serviceName, makeTaskService(serviceName));
};
