import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://maqdacucuckkiwlavkwn.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hcWRhY3VjdWNra2l3bGF2a3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0Nzc4MTgsImV4cCI6MjA2MTA1MzgxOH0.SaPrxgALPibklLkJnyqxa10BeHj_o6Ad2yn3Ffm8-QM';
console.log(supabaseUrl);
export const supabase = createClient(supabaseUrl, supabaseKey);
