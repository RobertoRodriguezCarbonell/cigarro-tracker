import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
      <><div>
      <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center lg:w-[800px] md:w-[500px]">
        <InfoIcon size="16" strokeWidth={2} />
        Esta página es la página principal cuando el usuario ha iniciado sesión.
      </div>
    </div>
    <div className="mt-4">
        <h2 className="font-bold text-2xl mb-4">Detalles del usuario</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-[250px] overflow-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div></>
  );
}
