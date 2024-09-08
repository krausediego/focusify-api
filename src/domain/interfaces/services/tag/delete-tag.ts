export interface IDeleteTag {
  run(params: IDeleteTag.Params): Promise<IDeleteTag.Response>;
}

export namespace IDeleteTag {
  export type Params = {
    id: string;
    userId: string;
  };

  export type ParamsService = {
    params: Params;
    locals: any;
  };

  export type Response = {
    tagId: string;
  };
}
