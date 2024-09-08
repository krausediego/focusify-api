export interface IDeleteProject {
  run(params: IDeleteProject.Params): Promise<IDeleteProject.Response>;
}

export namespace IDeleteProject {
  export type Params = {
    id: string;
    userId: string;
  };

  export type ParamsService = {
    params: Params;
    locals: any;
  };

  export type Response = {
    projectId: string;
  };
}
