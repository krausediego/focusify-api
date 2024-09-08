import { IAuthSignUp, IAuthSignIn } from '.';

export namespace IAuth {
  export type AuthServicesName = 'authSignUp' | 'authSignIn';

  export type AuthServices = () => IAuthSignUp | IAuthSignIn;
}
