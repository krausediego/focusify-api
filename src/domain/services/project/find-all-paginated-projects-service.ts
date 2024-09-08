import { IFindAllPaginatedProjects, IProjectsRepository } from '@/domain/interfaces';

export class FindAllPaginatedProjectsService implements IFindAllPaginatedProjects {
  constructor(private readonly projectsRepository: IProjectsRepository) {}

  async run({ userId, page, limit }: IFindAllPaginatedProjects.Params): Promise<IFindAllPaginatedProjects.Response> {
    const projects = await this.projectsRepository.getAllPaginatedProjects({
      userId,
      page,
      limit,
    });

    return { projects };
  }
}
