import Link from "next/link";
import { DemoCharts } from "./demo-charts";

export default function Header() {
  return (
    <div className="flex flex-col items-center">

      {/* RECURSOS */}
      <div className="my-4">
        <Link className="text-primary underline" href="/blogs">
          Artículos y recursos para dejar de fumar
        </Link>
      </div>

      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Controla lo que <b>fumas</b> y <b>deja de hacerlo</b>.
      </p>
      <div>
        <DemoCharts />
        {/* <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" /> */}
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      {/* Content */}
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center mb-8">
        <b>Bienvenido</b>.
      </p>
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Bienvenido a <span className="font-semibold text-gray-900 dark:text-gray-100">Cigarro Tracker</span>, la herramienta diseñada para ayudarte a tomar el control de tus hábitos de consumo. Nuestra plataforma te permite llevar un <span className="font-semibold text-gray-900 dark:text-gray-100">registro diario</span> de los cigarros y porros que consumes, ofreciéndote estadísticas y métricas visuales que te muestran tu progreso a lo largo del tiempo.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg mt-6 mb-4">
          Con <span className="font-semibold text-gray-900 dark:text-gray-100">Cigarro Tracker</span> podrás:
        </p>

        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 text-lg space-y-2">
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Monitorizar tu consumo:</span> Anota cada cigarro o porro para entender mejor tus patrones de consumo.
          </li>
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Evaluar el impacto económico:</span> Calcula el dinero que gastas y descubre cuánto podrías ahorrar al reducir tu consumo.
          </li>
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Visualizar tu progreso:</span> Usa gráficos y estadísticas para motivarte y ver tus mejoras semana a semana.
          </li>
          <li>
            <span className="font-semibold text-gray-900 dark:text-gray-100">Planificar tus objetivos:</span> Establece metas personalizadas para reducir o dejar de fumar de manera gradual y sostenible.
          </li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300 text-lg mt-6">
          Nuestro objetivo es brindarte el <span className="font-semibold text-gray-900 dark:text-gray-100">apoyo y las herramientas</span> necesarias para que puedas dar el paso hacia una vida más saludable. Cada registro, cada métrica y cada objetivo son parte de un plan diseñado para ayudarte a <span className="font-semibold text-gray-900 dark:text-gray-100">dejar de fumar</span>, mejorando tu bienestar físico y mental, y generando ahorros económicos significativos.
        </p>
      </div>

      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        ¡Empieza <b>hoy</b> tu camino hacia un futuro <b>sin humo</b>!
      </p>
    </div>
  );
}
