import { createServerClient } from "@supabase/ssr";

(async () => {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => [],
        setAll: () => {},
      },
    }
  );

  const { error, data } = await supabase.auth.signUp({
    email: "98robers@gmail.com",
    password: "imi3Sqyg????",
  });

  if (error) {
    console.error("❌ Error:", error.message);
  } else {
    console.log("✅ Registro correcto:", data);
  }
})();
