import { IPrisma, IProfilesRepository } from '@/domain/interfaces';
import { Prisma, Profile } from '@prisma/client';

export class ProfilesRepository implements IProfilesRepository {
  constructor(private readonly prisma: IPrisma) {}

  async createProfile(
    data: Prisma.ProfileCreateInput,
  ): Promise<Profile | null> {
    return this.prisma.getPrismaClient().profile.create({ data });
  }

  async getProfileByEmail({
    email,
  }: IProfilesRepository.getProfileByEmailProps): Promise<Profile | null> {
    return this.prisma
      .getPrismaClient()
      .profile.findUnique({ where: { email } });
  }
}
