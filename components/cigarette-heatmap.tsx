'use client';

import React, { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { subDays, format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { es } from 'date-fns/locale';
import Papa from 'papaparse';

type HeatmapValue = {
  date: string;
  count: number;
};

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export default function CigaretteHeatmap({
  onDataSummary,
}: {
  onDataSummary: (data: {
    total: number;
    today: number;
    thisWeek: number;
  }) => void;
}) {
  const today = new Date();
  const [values, setValues] = useState<HeatmapValue[]>([]);
  const [hoveredDay, setHoveredDay] = useState<HeatmapValue | null>(null);
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    fetch('/data/consumption.csv')
      .then((res) => res.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        const data: HeatmapValue[] = (parsed.data as any[]).map((row) => ({
          date: row.date,
          count: parseInt(row.cigars || '0', 10),
        }));

        setValues(data);

        const todayStr = format(new Date(), 'yyyy-MM-dd');
        const sevenDaysAgo = subDays(new Date(), 6);

        const total = data.reduce((acc, d) => acc + d.count, 0);
        const todayCount = data.find((d) => d.date === todayStr)?.count || 0;
        const thisWeek = data.reduce((acc, d) => {
          const date = new Date(d.date);
          return date >= sevenDaysAgo && date <= new Date()
            ? acc + d.count
            : acc;
        }, 0);

        onDataSummary({
          total,
          today: todayCount,
          thisWeek,
        });
      });
  }, [onDataSummary]);

  return (
    <div>
      <CalendarHeatmap
        startDate={subDays(today, 365)}
        endDate={today}
        gutterSize={4}
        values={values}
        showWeekdayLabels={false}
        showMonthLabels={true}
        classForValue={(value) => {
          if (!value) return 'color-empty';
          if (value.count === 0) return 'color-scale-1';
          if (value.count < 2) return 'color-scale-2';
          if (value.count < 5) return 'color-scale-3';
          if (value.count < 10) return 'color-scale-4';
          return 'color-scale-5';
        }}
        transformDayElement={(element, value, index) => {
          return React.cloneElement(element as React.ReactElement<any>, {
            key: index,
            rx: 2,
            ry: 2,
            onMouseEnter: (e: React.MouseEvent) => {
              setHoveredDate(value?.date ?? null);
              setHoveredDay(value ? { date: value.date, count: value.count || 0 } : null);
              setPosition({ x: e.pageX, y: e.pageY });
            },
            onMouseLeave: () => {
              setHoveredDate(null);
              setHoveredDay(null);
              setPosition(null);
            },
          });
        }}
      />

      {(hoveredDay || hoveredDate) && position && (
        <div
          className="fixed z-50 bg-popover text-popover-foreground rounded-md shadow-md p-4 w-60"
          style={{
            left: position.x + 12,
            top: position.y + 12,
            pointerEvents: 'none',
          }}
        >
          <div className="flex items-start gap-3">
            <CalendarIcon className="w-5 h-5 mt-1 text-muted-foreground" />
            <div className="space-y-1">
              <p className="text-sm font-medium">{hoveredDate}</p>
              <p className="text-sm text-muted-foreground">
                {!hoveredDay
                  ? 'No hay datos registrados.'
                  : hoveredDay.count === 0
                  ? `No fumaste el ${capitalize(
                      format(new Date(hoveredDay.date), 'EEEE', { locale: es })
                    )}.`
                  : `Fumaste ${hoveredDay.count} cigarro${
                      hoveredDay.count > 1 ? 's' : ''
                    } el ${capitalize(
                      format(new Date(hoveredDay.date), 'EEEE', { locale: es })
                    )}.`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
