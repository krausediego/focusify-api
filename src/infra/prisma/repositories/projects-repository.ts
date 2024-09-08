import { IPrisma, IProjectsRepository } from '@/domain/interfaces';
import { Prisma, Project } from '@prisma/client';

export class ProjectsRepository implements IProjectsRepository {
  constructor(private readonly prisma: IPrisma) {}

  async createProject(data: Prisma.ProjectUncheckedCreateInput): Promise<Project | null> {
    return this.prisma.getPrismaClient().project.create({ data });
  }

  async getAllPaginatedProjects({ userId, page, limit }: IProjectsRepository.PaginatedProjectsProps): Promise<Project[] | null> {
    const paginated = (page - 1) * limit || 0;

    return this.prisma.getPrismaClient().project.findMany({
      where: { userId },
      skip: paginated,
      take: Number(limit) || 10,
      orderBy: [{ name: 'asc' }],
    });
  }

  async getProjectById({ id, userId }: IProjectsRepository.GetByIdProps): Promise<Project | null> {
    return this.prisma.getPrismaClient().project.findFirst({ where: { AND: [{ id }, { userId }] } });
  }

  async updateProject({ id, ...props }: IProjectsRepository.UpdateProjectProps): Promise<Project | null> {
    return this.prisma.getPrismaClient().project.update({ data: props, where: { id } });
  }

  async deleteProject({ id }: IProjectsRepository.DeleteProps): Promise<Project | null> {
    return this.prisma.getPrismaClient().project.delete({ where: { id } });
  }
}
