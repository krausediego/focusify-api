import { BadRequestError } from '@/application/errors';
import { ICreateProject, IProjectsRepository } from '@/domain/interfaces';

export class CreateProjectService implements ICreateProject {
  constructor(private readonly projectsRepository: IProjectsRepository) {}

  async run({
    name,
    color,
    userId,
  }: ICreateProject.Params): Promise<ICreateProject.Response> {
    const project = await this.projectsRepository.createProject({
      name,
      color,
      userId,
    });

    if (!project) {
      throw new BadRequestError('Error in create project, try again.');
    }

    return { project };
  }
}
