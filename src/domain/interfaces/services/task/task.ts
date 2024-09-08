import { ICreateTask } from '.';

export namespace ITask {
  export type TaskServicesName = 'createTask';

  export type TaskServices = () => ICreateTask;
}
