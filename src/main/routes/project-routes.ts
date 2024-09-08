import { Router } from 'express';

import { createProjectSchema, deleteProjectSchema, findAllPaginatedProjectsSchema, getProjectByIdSchema, updateProjectSchema } from '@/domain/schemas';
import { adaptRoute } from '@/main/adapters';
import { makeProjectController } from '@/main/factories/application/controllers';
import { authClient, validateRequest } from '@/main/middlewares';

export default (router: Router): void => {
  router.post('/create-project', authClient, validateRequest(createProjectSchema), adaptRoute(makeProjectController('createProject')));

  router.get(
    '/find-all-paginated-projects',
    authClient,
    validateRequest(findAllPaginatedProjectsSchema),
    adaptRoute(makeProjectController('findAllPaginatedProjects')),
  );

  router.get('/get-project-by-id/:id', authClient, validateRequest(getProjectByIdSchema), adaptRoute(makeProjectController('getProjectById')));

  router.put('/update-project/:id', authClient, validateRequest(updateProjectSchema), adaptRoute(makeProjectController('updateProject')));

  router.delete('/delete-project/:id', authClient, validateRequest(deleteProjectSchema), adaptRoute(makeProjectController('deleteProject')));
};
