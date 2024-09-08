import { IProjectsRepository } from '@/domain/interfaces';
import { ProjectsRepository } from '@/infra/prisma';
import { makePrisma } from '@/main/factories/infra';

export const makeProjectsRepository = (): IProjectsRepository => {
  return new ProjectsRepository(makePrisma());
};
