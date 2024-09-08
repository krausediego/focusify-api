import { Middleware } from '@/application/interfaces';
import { AuthClientMiddleware } from '@/application/middlewares';
import { makeSupabase } from '@/main/factories/infra';

export const makeAuthClientMiddleware = (): Middleware => {
  return new AuthClientMiddleware(makeSupabase());
};
