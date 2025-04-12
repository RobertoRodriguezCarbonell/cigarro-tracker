process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const fetch = require("cross-fetch");
globalThis.fetch = fetch;

console.log("NEXT_PUBLIC_SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

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
