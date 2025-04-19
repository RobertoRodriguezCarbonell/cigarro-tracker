import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import {
  Bell,
  ChartNoAxesColumn,
  MessageCircle,
  Search,
  Settings2,
  ShieldAlertIcon,
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
      <div className="border border-foreground p-1 rounded-full cursor-pointer">
        <Search className="h-4 w-4" />
      </div>
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
          <Link href="/administracion">
            <DropdownMenuItem>
              <ShieldAlertIcon className="mr-2 h-4 w-4" />
              Administración
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="border border-foreground p-1 rounded-full">
          <Bell className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72">
          <DropdownMenuLabel>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MessageCircle className="mr-2 h-4 w-4" />
                Notificaciones
              </div>
              <div className="text-xs text-muted-foreground cursor-pointer hover:text-destructive">
                Borrar todo
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="flex flex-col items-start space-y-1">
            {/* Cabecera del grupo + opción */}
            <div className="flex w-full items-center justify-between">
              <div className="font-medium text-sm">Grupo #897sdfyads</div>
              <div className="text-xs text-muted-foreground cursor-pointer hover:underline">
                Marcar como leído
              </div>
            </div>

            {/* Vista previa del mensaje */}
            <div className="w-full text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Juan Carlos:</span>{" "}
              Vamos bien, pero necesitamos más ideas.
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex flex-col items-start space-y-1">
            {/* Cabecera del grupo + opción */}
            <div className="flex w-full items-center justify-between">
              <div className="font-medium text-sm">Grupo #897sdfyads</div>
              <div className="text-xs text-muted-foreground cursor-pointer hover:underline">
                Marcar como leído
              </div>
            </div>

            {/* Vista previa del mensaje */}
            <div className="w-full text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Juan Carlos:</span>{" "}
              Vamos bien, pero necesitamos más ideas.
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex flex-col items-start space-y-1">
            <div className="text-sm text-muted-foreground cursor-pointer hover:underline">
              Ver todas las notificaciones
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <form action={signOutAction}>
        <Button type="submit" variant={"destructive"} size={"sm"}>
          Cerrar Sesión
        </Button>
      </form> */}
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
