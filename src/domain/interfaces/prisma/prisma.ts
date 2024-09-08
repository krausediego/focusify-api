import { PrismaClient } from '@prisma/client';

export interface IPrisma {
  getPrismaClient(): PrismaClient;
}
