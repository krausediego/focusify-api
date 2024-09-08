import { Session } from '@supabase/supabase-js';

export interface IAuthSignIn {
  run(params: IAuthSignIn.Params): Promise<IAuthSignIn.Response>;
}

export namespace IAuthSignIn {
  export type Params = {
    email: string;
    password: string;
  };

  export type ParamsService = {
    params: Params;
    locals: any;
  };

  export type Response = {
    session: Session;
  };
}
