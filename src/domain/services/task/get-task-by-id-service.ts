import { IGetTaskById, ITasksRepository } from '@/domain/interfaces';

export class GetTaskByIdService implements IGetTaskById {
  constructor(private readonly tasksRepository: ITasksRepository) {}

  async run({ id, userId }: IGetTaskById.Params): Promise<IGetTaskById.Response> {
    const { task, tags, project } = await this.tasksRepository.findTaskById({ id, userId });

    return {
      task: {
        ...task,
        tags,
        project,
      },
    };
  }
}
