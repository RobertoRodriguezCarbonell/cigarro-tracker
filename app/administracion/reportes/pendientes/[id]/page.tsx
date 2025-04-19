import React from "react";
import { notFound } from "next/navigation";
import AdminLayout from "@/components/layout/admin-layout";
import { Button } from "@/components/ui/button";

interface Report {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: string;
  assignedTo: string;
}

// Reutilizamos la misma fuente de datos
const pendingReports: Report[] = [
  {
    id: "rpt-001",
    title: "Reporte de ventas del Q1",
    description: "Resumen detallado de las ventas realizadas en el primer trimestre, incluyendo comparativa con el año anterior.",
    createdAt: "2025-04-01",
    status: "Pendiente de aprobación",
    assignedTo: "María González",
  },
  {
    id: "rpt-002",
    title: "Incidencias de usuario – Marzo",
    description: "Listado de todas las incidencias reportadas por los usuarios durante el mes de marzo, con su nivel de gravedad.",
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
];

interface PageProps {
  params: { id: string };
}

export default function ReportePendientePage({ params }: PageProps) {
  const report = pendingReports.find(r => r.id === params.id);
  if (!report) {
    notFound();
  }
  return (
    <AdminLayout>
      <article className="p-6 border rounded-md">
        <h1 className="text-2xl font-bold mb-2">{report.title}</h1>
        <p className="text-sm mb-4">ID: {report.id}</p>
        <dl className="space-y-3">
          <div>
            <dt className="font-semibold">Fecha de creación:</dt>
            <dd>{report.createdAt}</dd>
          </div>
          <div>
            <dt className="font-semibold">Estado:</dt>
            <dd>{report.status}</dd>
          </div>
          <div>
            <dt className="font-semibold">Responsable:</dt>
            <dd>{report.assignedTo}</dd>
          </div>
          <div>
            <dt className="font-semibold">Descripción:</dt>
            <dd>{report.description}</dd>
          </div>
        </dl>
      </article>
      <div className="flex justify-around mt-6 gap-x-4">
        <Button className="w-full">
          Responder
        </Button>
        <Button className="w-full">
          Archivar
        </Button>
        <Button className="w-full">
          Respuesta automática
        </Button>
      </div>
    </AdminLayout>
  );
}