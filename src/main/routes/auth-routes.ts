import { Router } from 'express';

import { authSignInSchema, authSignUpSchema } from '@/domain/schemas';
import { adaptRoute } from '@/main/adapters';
import { makeAuthController } from '@/main/factories/application/controllers';
import { validateRequest } from '@/main/middlewares';

export default (router: Router): void => {
  router.post(
    '/sign-up',
    validateRequest(authSignUpSchema),
    adaptRoute(makeAuthController('authSignUp')),
  );

  router.post(
    '/sign-in',
    validateRequest(authSignInSchema),
    adaptRoute(makeAuthController('authSignIn')),
  );
};
