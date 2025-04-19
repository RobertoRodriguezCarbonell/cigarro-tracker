"use client";
import React from "react";
import Link from "next/link";
import AdminLayout from "@/components/layout/admin-layout";

// Más detalles por reporte: descripción, fecha, estado y responsable
const pendingReports = [
  {
    id: "rpt-001",
    title: "Reporte de ventas del Q1",
    description: "Resumen detallado de las ventas realizadas en el primer trimestre,%20incluyendo comparativa con el año anterior.",
    createdAt: "2025-04-01",
    status: "Pendiente de aprobación",
    assignedTo: "María González",
  },
  {
    id: "rpt-002",
    title: "Incidencias de usuario – Marzo",
    description: "Listado de todas las incidencias reportadas por los usuarios durante el mes de marzo,%20con su nivel de gravedad.",
    createdAt: "2025-04-05",
    status: "En revisión",
    assignedTo: "Luis Pérez",
  },
  {
    id: "rpt-003",
    title: "Análisis de tráfico web",
    description: "Informe sobre las métricas de tráfico web: visitantes únicos, tasa de rebote y páginas más vistas.",
    createdAt: "2025-04-10",
    status: "Pendiente de datos finales",
    assignedTo: "Ana Ruiz",
  },
  {
    id: "rpt-004",
    title: "Reporte de satisfacción del cliente",
    description: "Resultados de la encuesta de satisfacción del cliente del último trimestre.",
    createdAt: "2025-04-15",
    status: "Pendiente de análisis",
    assignedTo: "Carlos López",
  },
  {
    id: "rpt-005",
    title: "Informe de rendimiento del sistema",
    description: "Análisis del rendimiento del sistema en el último mes, incluyendo tiempos de respuesta y caídas.",
    createdAt: "2025-04-20",
    status: "Pendiente de revisión técnica",
    assignedTo: "Laura Martínez",
  }
  // …otros reportes
];

export default function AdministracionReportesPendientesPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="font-bold text-2xl mb-4">Reportes Pendientes</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pendingReports.map(({ id, title, createdAt, status, assignedTo }) => (
            <div key={id} className="p-4 border rounded-md hover:shadow">
              <Link
                href={`/administracion/reportes/pendientes/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-medium text-blue-600 hover:underline"
              >
                {title}
              </Link>
              <p className="text-sm text-gray-500">Creado: {createdAt}</p>
              <p className="text-sm text-gray-500">Estado: {status}</p>
              <p className="text-sm text-gray-500">Responsable: {assignedTo}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}