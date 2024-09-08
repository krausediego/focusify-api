import { IAuth, IAuthSignIn, IAuthSignUp } from '@/domain/interfaces';

import { getHttpError, ok } from '../helpers';
import { Controller, Http } from '../interfaces';

export class AuthController implements Controller {
  constructor(
    private readonly serviceName: IAuth.AuthServicesName,
    private readonly service: IAuth.AuthServices,
  ) {}

  async handle({ data: params, locals }: Http.Request): Promise<Http.Response> {
    return this?.[this.serviceName]({ params, locals }).catch((e: any) => {
      return getHttpError(e);
    });
  }

  private async authSignUp({
    params,
  }: IAuthSignUp.ParamsService): Promise<Http.Response> {
    const { email, password } = params;

    const content = await (this.service() as IAuthSignUp).run({
      email,
      password,
    });

    return ok({ ...content });
  }

  private async authSignIn({
    params,
  }: IAuthSignIn.ParamsService): Promise<Http.Response> {
    const { email, password } = params;

    const content = await (this.service() as IAuthSignIn).run({
      email,
      password,
    });

    return ok({ ...content });
  }
}
