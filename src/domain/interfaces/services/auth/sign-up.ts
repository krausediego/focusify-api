import { Session } from '@supabase/supabase-js';

export interface IAuthSignUp {
  run(params: IAuthSignUp.Params): Promise<IAuthSignUp.Response>;
}

export namespace IAuthSignUp {
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
