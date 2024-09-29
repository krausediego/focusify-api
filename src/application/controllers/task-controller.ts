import { ITask, ICreateTask, IGetTaskById, IGetAllActiveTasks } from '@/domain/interfaces';

import { getHttpError, ok } from '../helpers';
import { Controller, Http } from '../interfaces';

export class TaskController implements Controller {
  constructor(
    private readonly serviceName: ITask.TaskServicesName,
    private readonly service: ITask.TaskServices,
  ) {}

  async handle({ data: params, locals }: Http.Request): Promise<Http.Response> {
    return this?.[this.serviceName]({ params, locals }).catch((e: any) => {
      return getHttpError(e);
    });
  }

  private async createTask({ params, locals }: ICreateTask.ParamsService): Promise<Http.Response> {
    const content = await (this.service() as ICreateTask).run({
      ...params,
      userId: locals?.userId,
    });

    return ok({ ...content });
  }

  private async getTaskById({ params, locals }: IGetTaskById.ParamsService): Promise<Http.Response> {
    const content = await (this.service() as IGetTaskById).run({
      ...params,
      userId: locals?.userId,
    });

    return ok({ ...content });
  }

  private async getAllActiveTasks({ params, locals }: IGetAllActiveTasks.ParamsService): Promise<Http.Response> {
    const tasks = await (this.service() as IGetAllActiveTasks).run({
      ...params,
      userId: locals?.userId,
    });

    return ok({ tasks });
  }
}
