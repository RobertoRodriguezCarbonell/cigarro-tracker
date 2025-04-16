import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import {
  Bell,
  ChartNoAxesColumn,
  MessageCircle,
  Settings2,
  User,
  User2Icon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!hasEnvVars) {
    return (
      <>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <Button
              asChild
              size="sm"
              variant={"outline"}
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/sign-in">Inicia Sesión</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant={"default"}
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/sign-up">Regístrate</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }
  return user ? (
    <div className="flex items-center gap-4">
      {/* Hey, {user.email}! */}
      <DropdownMenu>
        <DropdownMenuTrigger className="border border-foreground p-1 rounded-full">
          <User2Icon className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Perfil
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <ChartNoAxesColumn className="mr-2 h-4 w-4" />
            Estadísticas
          </DropdownMenuItem>
          <Link href="/grupo">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Mi Grupo
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <Settings2 className="mr-2 h-4 w-4" />
            Configuración
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="border border-foreground p-1 rounded-full">
        <Bell className="h-4 w-4" />
      </div>
      <form action={signOutAction}>
        <Button type="submit" variant={"destructive"}>
          Cerrar Sesión
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/sign-in">Inicia Sesión</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/sign-up">Regístrate</Link>
      </Button>
    </div>
  );
}
