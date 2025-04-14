import { redirect } from "next/navigation";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createClient } from "@/utils/supabase/server";

// import SignOutButton from "@/components/SignOutButton";

export default async function ProfilePage() {
  // Datos ficticios de usuario (simulación)
  const user = {
    id: "123",
    email: "ficticio@example.com"
  };

  // Descomenta el bloque siguiente para forzar la redirección si no hay usuario autenticado:
  // const supabase = await createClient();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  // if (!user) {
  //   return redirect("/sign-in");
  // }

  // Datos ficticios del perfil
  const profile = {
    avatar_url: "https://via.placeholder.com/150",
    full_name: "Juan Ficticio",
    bio: "Esta es una biografía de prueba para un usuario ficticio. Aquí se pueden mostrar detalles relevantes sobre el usuario.",
  };

  // Datos ficticios de estadísticas
  const stats = {
    cigarsToday: 7,
    cigarsWeek: 42,
  };

  // Datos ficticios de historial de consumo
  const consumptionHistory = [
    { date: '2023-04-10', cigars: 5 },
    { date: '2023-04-11', cigars: 8 },
    { date: '2023-04-12', cigars: 3 },
    // Puedes agregar más registros...
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Sección principal de perfil */}
      <h1 className="text-3xl font-bold mb-6">Perfil de Usuario</h1>
      <div className="flex flex-col md:flex-row border border-accent rounded-md">
        <div className="p-6 flex-1">
          <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12">
              {profile.avatar_url ? (
                <AvatarImage src={profile.avatar_url} />
              ) : (
                <AvatarFallback>
                  {profile.full_name ? profile.full_name[0].toUpperCase() : user.email[0].toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {profile.full_name || user.email}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">Email: {user.email}</p>
            </div>
          </div>
          {profile.bio && (
            <p className="mt-4 text-gray-700 dark:text-gray-300">{profile.bio}</p>
          )}
          <div className="mt-6 flex gap-x-4 justify-end">
            <Button variant="outline" className="w-full sm:w-auto">
              Editar Perfil
            </Button>
            <Button variant="destructive">
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>

      {/* Sección de estadísticas */}
      <div className="mt-8 p-6 border border-accent rounded-md">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Estadísticas
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border border-accent rounded-md">
            <p className="text-gray-500 dark:text-gray-300 text-sm">Cigarros fumados hoy</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {stats.cigarsToday}
            </p>
          </div>
          <div className="p-4 border border-accent rounded-md">
            <p className="text-gray-500 dark:text-gray-300 text-sm">Cigarros fumados esta semana</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {stats.cigarsWeek}
            </p>
          </div>
        </div>
      </div>

      {/* Sección de historial de consumo */}
      <div className="mt-8 p-6 border border-accent rounded-md">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Historial de Consumo
        </h3>
        <div className="space-y-2">
          {consumptionHistory.map((record) => (
            <div key={record.date} className="flex justify-between border-b pb-2">
              <span className="text-gray-600 dark:text-gray-300">{record.date}</span>
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                {record.cigars} cigarrillos
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de logros y metas */}
      <div className="mt-8 p-6 border border-accent rounded-md">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Logros y Metas
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          ¡Felicidades! Has reducido tu consumo en un 20% este mes.
        </p>
        {/* Barra de progreso simulada */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: '80%' }}></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Progreso: 80% hacia tu meta mensual
          </p>
        </div>
      </div>

      {/* Sección de configuración y preferencias */}
      <div className="mt-8 p-6 border border-accent rounded-md">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Configuración y Preferencias
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Ajusta tus notificaciones, privacidad y preferencias de visualización.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <Button variant="outline">Preferencias de Notificaciones</Button>
          <Button variant="outline">Ajustes de Privacidad</Button>
        </div>
      </div>
    </div>
  );
}
