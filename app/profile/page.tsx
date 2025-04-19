"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CigaretteHeatmap from "@/components/cigarette-heatmap";
import { signOutAction } from "../actions";

export default function ProfilePage() {
  const [summary, setSummary] = useState({
    total: 0,
    today: 0,
    thisWeek: 0,
  });

  const user = {
    email: "usuario@ejemplo.com",
  };

  const profile = {
    avatar_url: "https://avatar.iran.liara.run/public/30",
    full_name: "Roberto Rodríguez",
    bio: "Esta es una biografía de prueba para un usuario ficticio. Aquí se pueden mostrar detalles relevantes sobre el usuario.",
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
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
                  {profile.full_name
                    ? profile.full_name[0].toUpperCase()
                    : (user.email?.[0]?.toUpperCase() ?? "U")}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {profile.full_name || user.email}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Email: {user.email}
              </p>
            </div>
          </div>
          {profile.bio && (
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {profile.bio}
            </p>
          )}
          <div className="mt-6 flex gap-x-4 justify-end">
            <Button variant="outline" className="">
              Editar Perfil
            </Button>
            <form action={signOutAction}>
              <Button type="submit" variant={"destructive"} size={"sm"}>
                Cerrar Sesión
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="border rounded-md mt-8 p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Historial Diario
          </h3>
          <h3>Cigarros Totales: {summary.total}</h3>
        </div>
        <CigaretteHeatmap onDataSummary={setSummary} />
      </div>

      {/* Sección de estadísticas */}
      <div className="mt-8 p-6 border border-accent rounded-md">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Estadísticas
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border border-accent rounded-md">
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Cigarros fumados hoy
            </p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {summary.today}
            </p>
          </div>
          <div className="p-4 border border-accent rounded-md">
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Últimos 7 días
            </p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {summary.thisWeek}
            </p>
          </div>
          <div className="p-4 border border-accent rounded-md">
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Cigarros totales registrados
            </p>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {summary.total}
            </p>
          </div>
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
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Progreso: 80% hacia tu meta mensual
          </p>
        </div>
      </div>
    </div>
  );
}
