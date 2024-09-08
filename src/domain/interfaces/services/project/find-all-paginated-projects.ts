import { Project } from '@prisma/client';

export interface IFindAllPaginatedProjects {
  run(
    params: IFindAllPaginatedProjects.Params,
  ): Promise<IFindAllPaginatedProjects.Response>;
}

export namespace IFindAllPaginatedProjects {
  export type Params = {
    userId: string;
    page: number;
    limit: number;
  };

  export type ParamsService = {
    params: Params;
    locals: any;
  };

  export type Response = {
    projects: Project[] | null;
  };
}
