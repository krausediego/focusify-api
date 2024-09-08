import { ISupabase } from '@/domain/interfaces';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export class Supabase implements ISupabase {
  public client: SupabaseClient;

  constructor() {
    this.client = createClient(
      'https://cooresneqnxrczupjebe.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvb3Jlc25lcW54cmN6dXBqZWJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1NDY1ODcsImV4cCI6MjA0MDEyMjU4N30._NIMb1sXtoPETW_cxhEZh1SVFeuDkz13siK28DETf0U',
    );
  }

  getClient(): SupabaseClient {
    return this.client;
  }
}
