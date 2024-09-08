import { IPrisma } from '@/domain/interfaces';
import { PrismaClient } from '@prisma/client';

export class Prisma implements IPrisma {
  public prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = new PrismaClient({ log: ['info'] });
  }

  getPrismaClient(): PrismaClient {
    return this.prismaClient;
  }
}
