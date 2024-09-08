import { IProject, ICreateProject, IFindAllPaginatedProjects, IGetProjectById, IUpdateProject, IDeleteProject } from '@/domain/interfaces';
import { CreateProjectService, DeleteProjectService, FindAllPaginatedProjectsService, GetProjectByIdService, UpdateProjectService } from '@/domain/services';
import { makeProjectsRepository } from '@/main/factories/domain/repositories';

const createProject = (): ICreateProject => {
  return new CreateProjectService(makeProjectsRepository());
};

const findAllPaginatedProjects = (): IFindAllPaginatedProjects => {
  return new FindAllPaginatedProjectsService(makeProjectsRepository());
};

const getProjectById = (): IGetProjectById => {
  return new GetProjectByIdService(makeProjectsRepository());
};

const updateProject = (): IUpdateProject => {
  return new UpdateProjectService(makeProjectsRepository());
};

const deleteProject = (): IDeleteProject => {
  return new DeleteProjectService(makeProjectsRepository());
};

const services = {
  createProject,
  findAllPaginatedProjects,
  getProjectById,
  updateProject,
  deleteProject,
};

export const makeProjectService = (serviceName: IProject.ProjectServicesName): IProject.ProjectServices => {
  return services[serviceName];
};
