import AdminLayout from "@/components/layout/admin-layout";
import React from "react";
import { Terminal, AlertTriangle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

const AdministracionReportesPage = () => {
  return (
    <AdminLayout>
      <div className="">
        <h1 className="font-bold text-2xl mb-4">Reportes</h1>
      </div>
      <div>
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Reportes Pendientes</AlertTitle>
          <AlertDescription>
            Todavía tienes <span className="text-red-500 font-bold">26</span> reportes por gestionar. Deberías responder lo antes posible. Puedes ver todos los reportes pendientes <Link href="/administracion/reportes/pendientes"><span className="text-blue-500 underline cursor-pointer font-bold">aquí</span></Link>.
          </AlertDescription>
        </Alert>
      </div>
    </AdminLayout>
  );
};

export default AdministracionReportesPage;
