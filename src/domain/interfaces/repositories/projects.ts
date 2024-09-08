import { Prisma, Project } from '@prisma/client';

export interface IProjectsRepository {
  createProject(data: Prisma.ProjectUncheckedCreateInput): Promise<Project | null>;
  getAllPaginatedProjects(data: IProjectsRepository.PaginatedProjectsProps): Promise<Project[] | null>;
  updateProject(data: IProjectsRepository.UpdateProjectProps): Promise<Project | null>;
  getProjectById(data: IProjectsRepository.GetByIdProps): Promise<Project | null>;
  deleteProject(data: IProjectsRepository.DeleteProps): Promise<Project | null>;
}

export namespace IProjectsRepository {
  export type PaginatedProjectsProps = {
    userId: string;
    page: number;
    limit: number;
  };

  export type UpdateProjectProps = {
    id: string;
    name?: string;
    color?: string;
    status?: boolean;
  };

  export type GetByIdProps = {
    id: string;
    userId: string;
  };

  export type DeleteProps = {
    id: string;
  };
}
