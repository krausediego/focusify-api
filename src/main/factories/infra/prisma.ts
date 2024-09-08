import { IPrisma } from '@/domain/interfaces';
import { Prisma } from '@/infra/prisma';

export const makePrisma = (): IPrisma => {
  return new Prisma();
};
