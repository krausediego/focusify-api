import { Router } from 'express';

import { createTaskSchema } from '@/domain/schemas';
import { adaptRoute } from '@/main/adapters';
import { makeTaskController } from '@/main/factories/application/controllers';
import { authClient, validateRequest } from '@/main/middlewares';

export default (router: Router): void => {
  router.post('/create-task', authClient, validateRequest(createTaskSchema), adaptRoute(makeTaskController('createTask')));
};
