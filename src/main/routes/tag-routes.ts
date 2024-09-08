import { Router } from 'express';

import { createTagSchema, deleteTagSchema, findAllPaginatedTagsSchema, getTagByIdSchema, updateTagSchema } from '@/domain/schemas';
import { adaptRoute } from '@/main/adapters';
import { makeTagController } from '@/main/factories/application/controllers';
import { authClient, validateRequest } from '@/main/middlewares';

export default (router: Router): void => {
  router.post('/create-tag', authClient, validateRequest(createTagSchema), adaptRoute(makeTagController('createTag')));

  router.get('/find-all-paginated-tags', authClient, validateRequest(findAllPaginatedTagsSchema), adaptRoute(makeTagController('findAllPaginatedTags')));

  router.get('/get-tag-by-id/:id', authClient, validateRequest(getTagByIdSchema), adaptRoute(makeTagController('getTagById')));

  router.put('/update-tag/:id', authClient, validateRequest(updateTagSchema), adaptRoute(makeTagController('updateTag')));

  router.delete('/delete-tag/:id', authClient, validateRequest(deleteTagSchema), adaptRoute(makeTagController('deleteTag')));
};
