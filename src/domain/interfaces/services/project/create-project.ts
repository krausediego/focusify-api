import { Project } from '@prisma/client';

export interface ICreateProject {
  run(params: ICreateProject.Params): Promise<ICreateProject.Response>;
}

export namespace ICreateProject {
  export type Params = {
    name: string;
    color: string;
    userId: string;
  };

  export type ParamsService = {
    params: Params;
    locals: any;
  };

  export type Response = {
    project: Project;
  };
}
