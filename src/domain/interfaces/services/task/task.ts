import { ICreateTask, IGetAllActiveTasks, IGetTaskById } from '.';

export namespace ITask {
  export type TaskServicesName = 'createTask' | 'getTaskById' | 'getAllActiveTasks';

  export type TaskServices = () => ICreateTask | IGetTaskById | IGetAllActiveTasks;
}
