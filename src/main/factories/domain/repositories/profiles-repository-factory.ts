import { IProfilesRepository } from '@/domain/interfaces';
import { ProfilesRepository } from '@/infra/prisma';
import { makePrisma } from '@/main/factories/infra';

export const makeProfilesRepository = (): IProfilesRepository => {
  return new ProfilesRepository(makePrisma());
};
