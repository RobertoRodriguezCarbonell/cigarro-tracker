"use client";
import React from "react";
import { Menu, X, Users, Settings, Home, ChartPie, Newspaper, Clock, AlertTriangle, MailIcon } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface NavItem {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/administracion', icon: Home, label: 'Inicio' },
  { href: '/administracion/usuarios', icon: Users, label: 'Usuarios' },
  { href: '/administracion/estadisticas', icon: ChartPie, label: 'Estadísticas' },
  { href: '/administracion/blogs', icon: Newspaper, label: 'Blogs' },
  { href: '/administracion/eventos', icon: Clock, label: 'Eventos' },
  { href: '/administracion/reportes', icon: AlertTriangle, label: 'Reportes' },
  { href: '/administracion/mail', icon: MailIcon, label: 'Mail' },
  { href: '/administracion/configuracion', icon: Settings, label: 'Configuración' }
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen: boolean; // Added property for mobile sidebar state
  onToggleMobile: () => void; // Added property for toggling mobile sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
  return (
    <aside
      className={clsx(
        'fixed top-16 left-0 h-[calc(100vh-4rem)] border-r shadow-lg z-40 flex flex-col transition-all duration-300 bg-background',
        isCollapsed ? 'w-16' : 'w-64'
      )}
      aria-label="Menú de administración"
    >
      <header className="flex items-center justify-center p-4">
        <button
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? 'Expandir menú' : 'Contraer menú'}
          className="focus:outline-none hover:bg-accent p-2 rounded"
        >
          {isCollapsed ? <Menu className="w-6 h-6" /> : <div className="flex items-center justify-between max-w-full gap-x-2 px-2">Cerrar<X className="w-6 h-6" /></div>}
        </button>
      </header>

      <nav className="flex-1 overflow-y-auto px-2 space-y-2">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'flex items-center gap-x-2 py-2 px-3 rounded hover:bg-accent focus:outline-none',
              isCollapsed ? 'justify-center' : ''
            )}
          >
            <Icon className="w-4 h-4" aria-hidden />
            {!isCollapsed && <span className="text-sm">{label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;