"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const supabaseUrl = 'https://maqdacucuckkiwlavkwn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hcWRhY3VjdWNra2l3bGF2a3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0Nzc4MTgsImV4cCI6MjA2MTA1MzgxOH0.SaPrxgALPibklLkJnyqxa10BeHj_o6Ad2yn3Ffm8-QM';
console.log(supabaseUrl);
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
//# sourceMappingURL=supabase.conn.js.map