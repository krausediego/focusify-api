import { BadRequestError } from '@/application/errors';
import {
  IAuthSignIn,
  IProfilesRepository,
  ISupabase,
} from '@/domain/interfaces';

export class AuthSignInService implements IAuthSignIn {
  constructor(
    private readonly profilesRepository: IProfilesRepository,
    private readonly supabase: ISupabase,
  ) {}

  async run({
    email,
    password,
  }: IAuthSignIn.Params): Promise<IAuthSignIn.Response> {
    const profile = await this.profilesRepository.getProfileByEmail({ email });

    if (!profile) {
      throw new BadRequestError('User not found');
    }

    const { data, error } = await this.supabase
      .getClient()
      .auth.signInWithPassword({ email, password });

    if (error || !data || !data.session) {
      throw new BadRequestError(error?.message ?? 'Error in sign in.');
    }

    return { session: data.session };
  }
}
