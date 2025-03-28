import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SUPABASE_URL='https://dsulrpdehcvnnmtlthob.supabase.co';
const SUPABASE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzdWxycGRlaGN2bm5tdGx0aG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2OTkwNTAsImV4cCI6MjA1ODI3NTA1MH0.NWoy4816Yl5TueEtEZeShDxvJcQGnvl2oO6mf4O-00Q';

const supabase = createClient(
  // process.env.SUPABASE_URL || "",
  // process.env.SUPABASE_ANON_KEY || "",
  SUPABASE_URL,
  SUPABASE_KEY,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

export { supabase };
