import { BadRequestError } from '@/application/errors';
import {
  IAuthSignUp,
  IProfilesRepository,
  ISupabase,
} from '@/domain/interfaces';

export class AuthSignUpService implements IAuthSignUp {
  constructor(
    private readonly profilesRepository: IProfilesRepository,
    private readonly supabase: ISupabase,
  ) {}

  async run({
    email,
    password,
  }: IAuthSignUp.Params): Promise<IAuthSignUp.Response> {
    const profile = await this.profilesRepository.getProfileByEmail({ email });

    if (profile) {
      throw new BadRequestError('User already exists.');
    }

    const { data, error } = await this.supabase
      .getClient()
      .auth.signUp({ email, password });

    if (error || !data || !data.session) {
      throw new BadRequestError(error?.message ?? 'Error in sign up.');
    }

    await this.profilesRepository.createProfile({
      userId: data.user!.id,
      email,
    });

    return { session: data.session };
  }
}
