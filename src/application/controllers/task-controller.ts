import { ITask, ICreateTask } from '@/domain/interfaces';

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
}
