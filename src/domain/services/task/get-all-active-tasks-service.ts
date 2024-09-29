import { format } from 'date-fns';

import { IGetAllActiveTasks, ITasksRepository } from '@/domain/interfaces';

export class GetAllActiveTasksService implements IGetAllActiveTasks {
  private startDate?: string | Date;

  private endDate?: string | Date;

  constructor(private readonly tasksRepository: ITasksRepository) {}

  async run({ userId, name, startsWith, endsWith, projectId, page, limit }: IGetAllActiveTasks.Params): Promise<IGetAllActiveTasks.Response[] | null> {
    if (startsWith && endsWith) {
      this.convertToDate(startsWith, endsWith);
    }

    const tasks = await this.tasksRepository.findAllActiveTasks({
      userId,
      name,
      startsWith: this.startDate,
      endsWith: this.endDate,
      projectId,
      page,
      limit,
    });

    return tasks;
  }

  private convertToDate(startsWith: string, endsWith: string) {
    this.startDate = format(new Date(startsWith).toISOString(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
    this.endDate = format(new Date(endsWith).toISOString(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
  }
}
