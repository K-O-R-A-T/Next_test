// @ts-ignore
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jbvwlhdowybjnothvdyb.supabase.co";
const supabaseAnonKey = "sb_publishable_-1sdElbpV1KOaga-gZXmAw_AvxMn1ZU"; 

export const supabaseServer = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
});