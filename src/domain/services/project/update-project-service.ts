import { BadRequestError, ForbiddenError } from '@/application/errors';
import { IProjectsRepository, IUpdateProject } from '@/domain/interfaces';

export class UpdateProjectService implements IUpdateProject {
  constructor(private readonly projectsRepository: IProjectsRepository) {}

  async run({ id, userId, ...props }: IUpdateProject.Params): Promise<IUpdateProject.Response> {
    const project = await this.projectsRepository.getProjectById({ id, userId });

    if (!project) {
      throw new ForbiddenError('Project not found or not authorized.');
    }

    const projectUpdated = await this.projectsRepository.updateProject({ id, ...props });

    if (!projectUpdated) {
      throw new BadRequestError('Error in update project.');
    }

    return { project: projectUpdated };
  }
}
