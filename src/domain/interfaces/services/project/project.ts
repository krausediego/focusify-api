import { ICreateProject, IDeleteProject, IFindAllPaginatedProjects, IGetProjectById, IUpdateProject } from '.';

export namespace IProject {
  export type ProjectServicesName = 'createProject' | 'findAllPaginatedProjects' | 'getProjectById' | 'updateProject' | 'deleteProject';

  export type ProjectServices = () => ICreateProject | IFindAllPaginatedProjects | IGetProjectById | IUpdateProject | IDeleteProject;
}
