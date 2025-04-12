// recursos/data/areaChartData.ts

export interface AreaChartRecord {
  period: string; // Ejemplo: "January", "February", …
  smoked: number; // Número de cigarros consumidos en ese período
  goal: number; // Objetivo establecido para ese período
}

export const areaChartData: AreaChartRecord[] = [
  { period: "Enero", goal: 100, smoked: 120 },
  { period: "Febrero", goal: 80, smoked: 60 },
  { period: "Marzo", goal: 60, smoked: 70 },
  { period: "Abril", goal: 40, smoked: 80 },
  { period: "Mayo", goal: 20, smoked: 24 },
  { period: "Junio", goal: 0, smoked: 17 },
];
