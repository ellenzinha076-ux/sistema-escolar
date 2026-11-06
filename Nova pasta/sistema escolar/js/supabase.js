// Cole aqui os dados do seu projeto Supabase.
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://gnqyyvpzkvtqgbkxovkg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_3FFRG9W04gQYKIGFa1Bfkw_S61-KbYS";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
