import { ForbiddenError, UnauthorizedError } from '@/application/errors';
import { getHttpError, ok } from '@/application/helpers';
import { Http, Middleware } from '@/application/interfaces';
import { ISupabase } from '@/domain/interfaces';

type Params = {
  authorization: string;
};

export class AuthClientMiddleware implements Middleware {
  constructor(private readonly supabase: ISupabase) {}

  async handle(params: Http.Request<Params>): Promise<Http.Response> {
    const { authorization } = params.data;

    try {
      if (!authorization) {
        throw new ForbiddenError('Authorization header was not provided.');
      }

      const [authPrefix, authToken] = authorization.split(' ');

      if (!authPrefix || !authToken) {
        throw new ForbiddenError('Authorization header is invalid.');
      }

      if (authPrefix.trim().toLowerCase() !== 'basic') {
        throw new ForbiddenError('Basic authorization was not provided.');
      }

      const { data, error } = await this.supabase
        .getClient()
        .auth.getUser(authToken);

      if (error) {
        throw new UnauthorizedError('Token invalid or expired.');
      }

      return ok({ userId: data.user.id });
    } catch (e: any) {
      return getHttpError(e);
    }
  }
}
