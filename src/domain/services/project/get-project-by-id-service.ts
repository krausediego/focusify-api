import { ForbiddenError } from '@/application/errors';
import { IGetProjectById, IProjectsRepository } from '@/domain/interfaces';

export class GetProjectByIdService implements IGetProjectById {
  constructor(private readonly projectsRepository: IProjectsRepository) {}

  async run({ id, userId }: IGetProjectById.Params): Promise<IGetProjectById.Response> {
    const project = await this.projectsRepository.getProjectById({ id, userId });

    if (!project) {
      throw new ForbiddenError('Project not found');
    }

    return { project };
  }
}
