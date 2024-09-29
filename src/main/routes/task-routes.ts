import { Router } from 'express';

import { createTaskSchema, getTaskByIdSchema } from '@/domain/schemas';
import { adaptRoute } from '@/main/adapters';
import { makeTaskController } from '@/main/factories/application/controllers';
import { authClient, validateRequest } from '@/main/middlewares';

export default (router: Router): void => {
  router.post('/create-task', authClient, validateRequest(createTaskSchema), adaptRoute(makeTaskController('createTask')));

  router.get('/get-task-by-id/:id', authClient, validateRequest(getTaskByIdSchema), adaptRoute(makeTaskController('getTaskById')));

  router.get('/get-all-active-tasks', authClient, adaptRoute(makeTaskController('getAllActiveTasks')));
};
