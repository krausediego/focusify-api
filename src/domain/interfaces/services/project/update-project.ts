import { Project } from '@prisma/client';

export interface IUpdateProject {
  run(params: IUpdateProject.Params): Promise<IUpdateProject.Response>;
}

export namespace IUpdateProject {
  export type Params = {
    id: string;
    name?: string;
    color?: string;
    status?: boolean;
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
