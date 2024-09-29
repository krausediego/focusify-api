import { isBefore, format } from 'date-fns';

import { BadRequestError } from '@/application/errors';
import { ICreateTask, IProjectsRepository, ITagsRepository, ITasksRepository } from '@/domain/interfaces';

export class CreateTaskService implements ICreateTask {
  constructor(
    private readonly tasksRepository: ITasksRepository,
    private readonly projectsRepository: IProjectsRepository,
    private readonly tagsRepository: ITagsRepository,
  ) {}

  async run({ date, ...props }: ICreateTask.Params): Promise<ICreateTask.Response> {
    const { projectId, tagIds, userId } = props;

    const dateConverted = format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss'Z'");

    if (isBefore(date, new Date().toISOString())) {
      throw new BadRequestError('This date is before today.');
    }

    const project = await this.projectsRepository.getProjectById({ id: projectId, userId });

    if (!project) {
      throw new BadRequestError('Project not found, or not authorized.');
    }

    const tags = tagIds.map(async tagId => {
      const tag = await this.tagsRepository.getTagById({ id: tagId, userId });

      if (!tag) {
        throw new BadRequestError('Tag not found, or not authorized.');
      }
    });

    await Promise.all(tags);

    const task = await this.tasksRepository.createTask({
      date: dateConverted,
      ...props,
    });

    if (!task) {
      throw new BadRequestError('Error in create task, try again.');
    }

    return { task };
  }
}
