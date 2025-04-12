// recursos/data/expenseData.ts

export interface ExpenseRecord {
  id: number;
  date: string; // Formato ISO: "YYYY-MM-DD"
  total: number; // Precio total de la compra (tabaco, mechero, filtros, etc.)
}

// Datos simulados de gastos
export const expenseRecords: ExpenseRecord[] = [
  { id: 1, date: "2025-03-10", total: 8.0 },
  { id: 2, date: "2025-04-05", total: 5.5 },
  { id: 3, date: "2025-04-07", total: 7.25 },
  { id: 4, date: "2025-04-03", total: 6.0 },
  // Ejemplo de registro de gasto
  { id: 5, date: "2025-02-08", total: 10.0 },
  { id: 6, date: "2025-01-09", total: 12.5 },
  { id: 7, date: "2025-02-10", total: 9.75 },
  { id: 8, date: "2025-01-11", total: 11.0 },
  { id: 9, date: "2025-01-12", total: 8.5 },
  // Agrega más registros según necesites...
];

export type TimeFilter =
  | "historical"
  | "lastYear"
  | "currentYear"
  | "lastMonth"
  | "currentMonth"
  | "lastWeek"
  | "currentWeek"
  | "currentDay";

// Función para filtrar los registros de gastos según un rango temporal.
export function filterExpenseRecords(
  records: ExpenseRecord[],
  filter: TimeFilter
): ExpenseRecord[] {
  const now = new Date();
  switch (filter) {
    case "historical":
      return records;
    case "lastYear":
      return records.filter(
        (record) =>
          new Date(record.date).getFullYear() === now.getFullYear() - 1
      );
    case "currentYear":
      return records.filter(
        (record) => new Date(record.date).getFullYear() === now.getFullYear()
      );
    case "lastMonth": {
      let lastMonth = now.getMonth() - 1;
      let year = now.getFullYear();
      if (lastMonth < 0) {
        lastMonth = 11;
        year--;
      }
      return records.filter((record) => {
        const dt = new Date(record.date);
        return dt.getFullYear() === year && dt.getMonth() === lastMonth;
      });
    }
    case "currentMonth":
      return records.filter((record) => {
        const dt = new Date(record.date);
        return (
          dt.getFullYear() === now.getFullYear() &&
          dt.getMonth() === now.getMonth()
        );
      });
    case "lastWeek": {
      const sevenDaysAgo = new Date(now);
      sevenDaysAgo.setDate(now.getDate() - 7);
      return records.filter((record) => {
        const dt = new Date(record.date);
        return dt >= sevenDaysAgo && dt <= now;
      });
    }
    case "currentWeek": {
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      startOfWeek.setHours(0, 0, 0, 0);
      return records.filter((record) => {
        const dt = new Date(record.date);
        return dt >= startOfWeek && dt <= now;
      });
    }
    case "currentDay": {
      const startOfDay = new Date(now);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      return records.filter((record) => {
        const dt = new Date(record.date);
        return dt >= startOfDay && dt <= endOfDay;
      });
    }
    default:
      return records;
  }
}

// Función para agrupar los registros de gastos por mes.
export interface AggregatedExpenseData {
  month: string; // Formato "YYYY-MM"
  total: number;
}

export function aggregateExpensesByMonth(
  records: ExpenseRecord[]
): AggregatedExpenseData[] {
  const aggregation: { [month: string]: number } = {};

  records.forEach((record) => {
    const date = new Date(record.date);
    // Creamos el key en formato "YYYY-MM"
    const monthKey = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}`;
    aggregation[monthKey] = (aggregation[monthKey] || 0) + record.total;
  });

  return Object.keys(aggregation)
    .map((month) => ({ month, total: aggregation[month] }))
    .sort((a, b) => a.month.localeCompare(b.month));
}
