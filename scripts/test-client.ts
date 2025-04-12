import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
  const { error, data } = await supabase.auth.signUp({
    email: "test@example.com",
    password: "12345678",
  });

  if (error) {
    console.error("❌ Error:", error.message);
  } else {
    console.log("✅ Usuario creado:", data);
  }
}

main();
