import { Project } from '@prisma/client';

export interface IGetProjectById {
  run(params: IGetProjectById.Params): Promise<IGetProjectById.Response>;
}

export namespace IGetProjectById {
  export type Params = {
    id: string;
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
