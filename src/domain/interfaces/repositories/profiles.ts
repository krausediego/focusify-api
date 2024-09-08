import { Prisma, Profile } from '@prisma/client';

export interface IProfilesRepository {
  createProfile(data: Prisma.ProfileCreateInput): Promise<Profile | null>;
  getProfileByEmail(
    props: IProfilesRepository.getProfileByEmailProps,
  ): Promise<Profile | null>;
}

export namespace IProfilesRepository {
  export type getProfileByEmailProps = {
    email: string;
  };
}
