import { IAuth, IAuthSignIn, IAuthSignUp } from '@/domain/interfaces';
import { AuthSignInService, AuthSignUpService } from '@/domain/services';
import { makeProfilesRepository } from '@/main/factories/domain/repositories';
import { makeSupabase } from '@/main/factories/infra';

const authSignUp = (): IAuthSignUp => {
  return new AuthSignUpService(makeProfilesRepository(), makeSupabase());
};

const authSignIn = (): IAuthSignIn => {
  return new AuthSignInService(makeProfilesRepository(), makeSupabase());
};

const services = {
  authSignUp,
  authSignIn,
};

export const makeAuthService = (
  serviceName: IAuth.AuthServicesName,
): IAuth.AuthServices => {
  return services[serviceName];
};
