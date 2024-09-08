import { BadRequestError, ForbiddenError } from '@/application/errors';
import { IDeleteProject, IProjectsRepository } from '@/domain/interfaces';

export class DeleteProjectService implements IDeleteProject {
  constructor(private readonly projectsRepository: IProjectsRepository) {}

  async run({ id, userId }: IDeleteProject.Params): Promise<IDeleteProject.Response> {
    const project = await this.projectsRepository.getProjectById({ id, userId });

    if (!project) {
      throw new ForbiddenError('Project not found or not authorized.');
    }

    const projectDeleted = await this.projectsRepository.deleteProject({ id });

    if (!projectDeleted) {
      throw new BadRequestError('Error in delete project.');
    }

    return { projectId: id };
  }
}
