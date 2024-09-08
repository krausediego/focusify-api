import { ITagsRepository } from '@/domain/interfaces';
import { TagsRepository } from '@/infra/prisma';
import { makePrisma } from '@/main/factories/infra';

export const makeTagsRepository = (): ITagsRepository => {
  return new TagsRepository(makePrisma());
};
