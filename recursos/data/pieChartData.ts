// data/pieChartData.ts

export type ConsumptionReason =
  | "Estrés"
  | "Nerviosismo"
  | "Costumbre"
  | "Social"
  | "Otro";

export interface CigaretteRecord {
  id: number;
  reason: ConsumptionReason;
  timestamp: string; // Fecha y hora en formato ISO
}

// Ejemplo de registros individuales. Cada objeto representa un cigarro consumido.
export const cigaretteRecords: CigaretteRecord[] = [
  { id: 1, reason: "Estrés", timestamp: "2025-04-03T08:30:00Z" },
  { id: 2, reason: "Costumbre", timestamp: "2025-04-03T10:15:00Z" },
  { id: 3, reason: "Social", timestamp: "2025-04-04T12:00:00Z" },
  { id: 4, reason: "Nerviosismo", timestamp: "2025-04-04T14:30:00Z" },
  { id: 5, reason: "Estrés", timestamp: "2025-04-05T09:45:00Z" },
  { id: 6, reason: "Social", timestamp: "2025-04-05T16:20:00Z" },
  { id: 7, reason: "Otro", timestamp: "2025-04-06T11:10:00Z" },
  { id: 8, reason: "Costumbre", timestamp: "2025-04-06T07:50:00Z" },
  { id: 9, reason: "Estrés", timestamp: "2025-04-07T20:05:00Z" },
  { id: 10, reason: "Social", timestamp: "2025-04-07T13:00:00Z" },
  { id: 11, reason: "Nerviosismo", timestamp: "2025-04-12T09:30:00Z" },
];

/* 
  Definimos los rangos temporales disponibles. Las opciones son:
    - "historical": Todos los registros.
    - "lastYear": Registros del año anterior.
    - "currentYear": Registros del año actual.
    - "lastMonth": Registros del mes anterior.
    - "currentMonth": Registros del mes actual.
    - "lastWeek": Registros de los últimos 7 días (por defecto se muestran los últimos 7 días).
    - "currentWeek": Desde el inicio de la semana actual hasta ahora.
    - "currentDay": Registros del día de hoy.
*/
export type TimeFilter =
  | "historical"
  | "lastYear"
  | "currentYear"
  | "lastMonth"
  | "currentMonth"
  | "lastWeek"
  | "currentWeek"
  | "currentDay";

// Función para filtrar los registros según el rango temporal seleccionado.
export function filterCigaretteRecords(
  records: CigaretteRecord[],
  filter: TimeFilter
): CigaretteRecord[] {
  const now = new Date();

  switch (filter) {
    case "historical":
      return records;
    case "lastYear":
      return records.filter((record) => {
        const recordDate = new Date(record.timestamp);
        return recordDate.getFullYear() === now.getFullYear() - 1;
      });
    case "currentYear":
      return records.filter((record) => {
        const recordDate = new Date(record.timestamp);
        return recordDate.getFullYear() === now.getFullYear();
      });
    case "lastMonth": {
      let lastMonth = now.getMonth() - 1;
      let year = now.getFullYear();
      if (lastMonth < 0) {
        lastMonth = 11;
        year--;
      }
      return records.filter((record) => {
        const recordDate = new Date(record.timestamp);
        return (
          recordDate.getFullYear() === year &&
          recordDate.getMonth() === lastMonth
        );
      });
    }
    case "currentMonth":
      return records.filter((record) => {
        const recordDate = new Date(record.timestamp);
        return (
          recordDate.getFullYear() === now.getFullYear() &&
          recordDate.getMonth() === now.getMonth()
        );
      });
    case "lastWeek": {
      // Filtra los registros de los últimos 7 días (excluyendo el momento actual si lo deseas)
      const sevenDaysAgo = new Date(now);
      sevenDaysAgo.setDate(now.getDate() - 7);
      return records.filter((record) => {
        const recordDate = new Date(record.timestamp);
        return recordDate >= sevenDaysAgo && recordDate <= now;
      });
    }
    case "currentWeek": {
      // Asumimos que la semana empieza el domingo.
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      startOfWeek.setHours(0, 0, 0, 0);
      return records.filter((record) => {
        const recordDate = new Date(record.timestamp);
        return recordDate >= startOfWeek && recordDate <= now;
      });
    }
    case "currentDay": {
      const startOfDay = new Date(now);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      return records.filter((record) => {
        const recordDate = new Date(record.timestamp);
        return recordDate >= startOfDay && recordDate <= endOfDay;
      });
    }
    default:
      return records;
  }
}

// Estructura del dato agregado para el gráfico.
export interface AggregatedData {
  reason: string;
  count: number;
  fill: string;
}

// Función para agrupar los registros filtrados por razón y sumar los eventos.
export function aggregateCigaretteRecords(
  records: CigaretteRecord[]
): AggregatedData[] {
  // Mapeo de colores para cada categoría.
  const colorMap: Record<ConsumptionReason, string> = {
    Estrés: "var(--color-estres)",
    Nerviosismo: "var(--color-nerviosismo)",
    Costumbre: "var(--color-costumbre)",
    Social: "var(--color-social)",
    Otro: "var(--color-otro)",
  };

  const aggregation: { [key: string]: AggregatedData } = {};

  records.forEach((record) => {
    if (!aggregation[record.reason]) {
      aggregation[record.reason] = {
        reason: record.reason,
        count: 0,
        fill: colorMap[record.reason],
      };
    }
    aggregation[record.reason].count += 1;
  });

  return Object.values(aggregation);
}
