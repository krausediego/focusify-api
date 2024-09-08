import { SupabaseClient } from '@supabase/supabase-js';

export interface ISupabase {
  getClient(): SupabaseClient;
}
