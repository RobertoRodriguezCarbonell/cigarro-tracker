# Cigarro Tracker

**Cigarro Tracker** es una aplicación web diseñada para ayudar a los usuarios a tomar el control de sus hábitos de consumo de tabaco. La aplicación permite registrar el número de cigarros que se consumen, visualizar estadísticas detalladas y calcular el impacto económico de ese consumo. Además, la aplicación facilita el seguimiento del progreso mediante gráficos interactivos y métricas avanzadas, con el objetivo de motivar y apoyar el proceso de dejar de fumar.

---

## Características

- **Registro Diario de Consumo:**  
  Permite a los usuarios anotar individualmente cada cigarro consumido, indicando el motivo (por ejemplo, estrés, nerviosismo, costumbre, social, otro) y la fecha y hora exactas.

- **Control Económico:**  
  Los usuarios pueden registrar el total gastado en cada compra en el estanco (incluyendo tabaco, mechero, filtros, etc.) y visualizar el impacto económico de su consumo.

- **Gráficos Interactivos:**  
  - **Gráfico de pastel:** Muestra la distribución de cigarros consumidos por motivo en un período seleccionado.
  - **Gráfico de barras:** Agrupa los gastos en tabaco por mes, mostrando el total gastado en cada mes.
  - **Gráfico de área:** Permite comparar el consumo real de cigarros contra los objetivos establecidos por el usuario para cada período (por ejemplo, por mes).

- **Filtro Temporal Dinámico:**  
  Un select que permite al usuario elegir entre varios rangos temporales:  
  - Histórico  
  - Último año  
  - Año actual  
  - Último mes  
  - Mes actual  
  - Última semana  
  - Semana actual  
  - Día actual  

- **Diseño Responsive y Temas Claro/Oscuro:**  
  La interfaz se adapta a diferentes tamaños de pantalla y respeta las preferencias de tema, ofreciendo una experiencia consistente tanto en dispositivos móviles como en escritorio.

- **Preparación para Autenticación y Datos en Tiempo Real:**  
  Actualmente se utilizan datos simulados, pero la aplicación está diseñada para integrarse con Supabase para autenticar usuarios y trabajar con datos reales en el futuro.

---

## Tecnologías Utilizadas

- **Next.js:** Framework para React que permite desarrollo de aplicaciones web escalables con Server-Side Rendering (SSR) y rutas API.
- **React:** Biblioteca para la construcción de interfaces de usuario.
- **Supabase:** (Planificado) Backend como servicio basado en PostgreSQL para autenticación, base de datos en tiempo real y almacenamiento.
- **TailwindCSS:** Framework de utilidades CSS para diseñar interfaces de manera rápida y personalizada.
- **Shadcn UI:** Conjunto de componentes pre-diseñados que facilitan la creación de interfaces modernas y consistentes.
- **Recharts:** Biblioteca de gráficos para React utilizada en la visualización de los datos (PieChart, BarChart, AreaChart).
- **Lucide Icons:** Conjunto de iconos utilizados en la interfaz (por ejemplo, para indicar tendencias).

---

## Instalación

### Requisitos Previos

- [Node.js v18+](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Pasos para instalar y ejecutar la aplicación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tuusuario/cigarro-tracker.git
   cd cigarro-tracker

---