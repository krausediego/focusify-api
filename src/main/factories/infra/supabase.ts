import { ISupabase } from '@/domain/interfaces';
import { Supabase } from '@/infra/supabase';

export const makeSupabase = (): ISupabase => {
  return new Supabase();
};
