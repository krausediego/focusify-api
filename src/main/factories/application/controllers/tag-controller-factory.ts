import { TagController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { ITag } from '@/domain/interfaces';
import { makeTagService } from '@/main/factories/domain/services';

export const makeTagController = (serviceName: ITag.TagServicesName): Controller => {
  return new TagController(serviceName, makeTagService(serviceName));
};
