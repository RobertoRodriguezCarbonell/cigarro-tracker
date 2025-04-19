"use client";
import React, { useState } from "react";
import Sidebar from "../ui/sidebar";
import clsx from "clsx";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false); // Estado para pantallas pequeñas

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(prev => !prev)}
        isMobileOpen={isMobileSidebarOpen}
        onToggleMobile={() => setMobileSidebarOpen(prev => !prev)}
      />

      {/* Contenido principal */}
      <div className="flex-1">
        <main
          className={clsx(
            "pt-16 p-6 transition-all duration-300",
            isSidebarCollapsed && !isMobileSidebarOpen ? "ml-16" : "ml-64", // Ajusta el margen en pantallas grandes
            "md:ml-16", // En pantallas pequeñas, no aplica margen adicional
            isMobileSidebarOpen && "ml-0" // Si el sidebar móvil está abierto, no aplica margen
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;