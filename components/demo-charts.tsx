"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import {
    Label,
    Pie,
    PieChart,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Area,
    AreaChart,
} from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    cigaretteRecords,
    filterCigaretteRecords,
    aggregateCigaretteRecords,
    TimeFilter,
} from "@/recursos/data/pieChartData"
import {
    expenseRecords,
    filterExpenseRecords,
    aggregateExpensesByMonth,
} from "@/recursos/data/expenseData"
import { areaChartData } from "@/recursos/data/areaChartData"

// Configuración para el gráfico de pastel (Cigarros por motivo)
const pieChartConfig: ChartConfig = {
    estres: {
        label: "Estrés",
        color: "hsl(var(--chart-1))",
    },
    nerviosismo: {
        label: "Nerviosismo",
        color: "hsl(var(--chart-5))",
    },
    costumbre: {
        label: "Costumbre",
        color: "hsl(var(--chart-2))",
    },
    social: {
        label: "Social",
        color: "hsl(var(--chart-3))",
    },
    otro: {
        label: "Otro",
        color: "hsl(var(--chart-4))",
    },
} satisfies ChartConfig

// Configuración para el área chart (Cigarros consumidos vs. objetivos)
const areaChartConfig: ChartConfig = {
    smoked: {
        label: "Consumidos",
        // Usamos la variable CSS definida, asumiendo que está definida como cadena completa (ej: "hsl(210, 80%, 60%)" o "var(--chart-6)")
        color: "var(--chart-6)",
    },
    goal: {
        label: "Objetivo",
        color: "var(--chart-7)",
    },
} satisfies ChartConfig

export function DemoCharts() {
    // Estado para seleccionar el rango temporal (aplica a los gráficos de Cigarros y gastos)
    const [timeFilter, setTimeFilter] = React.useState<TimeFilter>("historical");

    // Datos para el gráfico de pastel (Cigarros)
    const filteredCigaretteRecords = React.useMemo(
        () => filterCigaretteRecords(cigaretteRecords, timeFilter),
        [timeFilter]
    );
    const aggregatedCigaretteData = React.useMemo(
        () => aggregateCigaretteRecords(filteredCigaretteRecords),
        [filteredCigaretteRecords]
    );
    const totalCigarettes = React.useMemo(
        () => aggregatedCigaretteData.reduce((acc, curr) => acc + curr.count, 0),
        [aggregatedCigaretteData]
    );

    // Datos para el gráfico de barras (gastos), agrupados por mes:
    const filteredExpenseRecords = React.useMemo(
        () => filterExpenseRecords(expenseRecords, timeFilter),
        [timeFilter]
    );
    const aggregatedExpenseData = React.useMemo(
        () => aggregateExpensesByMonth(filteredExpenseRecords),
        [filteredExpenseRecords]
    );
    const totalExpenses = React.useMemo(
        () => aggregatedExpenseData.reduce((acc, cur) => acc + cur.total, 0),
        [aggregatedExpenseData]
    );

    return (
        <div className="flex flex-col gap-8 p-4">
            {/* Select para elegir el rango temporal, que se aplica a Cigarros y gastos */}
            <div className="flex justify-center">
                <select
                    value={timeFilter}
                    onChange={(e) => setTimeFilter(e.target.value as TimeFilter)}
                    className="border rounded p-2 dark:bg-gray-700 dark:text-gray-200 w-full max-w-xs"
                >
                    <option value="historical">Histórico</option>
                    <option value="lastYear">Último año</option>
                    <option value="currentYear">Año actual</option>
                    <option value="lastMonth">Último mes</option>
                    <option value="currentMonth">Mes actual</option>
                    <option value="lastWeek">Última semana</option>
                    <option value="currentWeek">Semana actual</option>
                    <option value="currentDay">Día actual</option>
                </select>
            </div>

            {/* Grid responsive: en móviles, 1 columna; en "md" 2 columnas; 
          y para el tercer gráfico, se aplica md:col-span-2 para ocupar todo el ancho */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Primer gráfico: PieChart de Cigarros */}
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Cigarros consumidos</CardTitle>
                        <CardDescription>Distribución por motivo</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer config={pieChartConfig} className="mx-auto aspect-square max-h-[250px]">
                            <PieChart>
                                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                                <Pie
                                    data={aggregatedCigaretteData}
                                    dataKey="count"
                                    nameKey="reason"
                                    innerRadius={60}
                                    strokeWidth={5}
                                >
                                    <Label
                                        content={({ viewBox }) => {
                                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                return (
                                                    <text
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                    >
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            className="fill-foreground text-3xl font-bold"
                                                        >
                                                            {totalCigarettes.toLocaleString()}
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 24}
                                                            className="fill-muted-foreground"
                                                        >
                                                            Cigarros
                                                        </tspan>
                                                    </text>
                                                );
                                            }
                                        }}
                                    />
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            En el periodo seleccionado <TrendingUp className="h-4 w-4" />
                        </div>
                    </CardFooter>
                </Card>

                {/* Segundo gráfico: BarChart de gastos por mes */}
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Gastos en tabaco</CardTitle>
                        <CardDescription>€ por mes</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <div className="mx-auto">
                            <BarChart
                                width={350}
                                height={250}
                                data={aggregatedExpenseData}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                                <YAxis tick={{ fontSize: 12 }} />
                                <Tooltip formatter={(value: number) =>
                                    value.toLocaleString("es-ES", {
                                        style: "currency",
                                        currency: "EUR",
                                    })
                                } />
                                <Legend />
                                <Bar dataKey="total" fill="#8884d8" name="Gasto (€)" />
                            </BarChart>
                            <p className="mt-2 text-center text-xl font-bold">
                                {totalExpenses.toLocaleString("es-ES", {
                                    style: "currency",
                                    currency: "EUR",
                                })}
                            </p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Durante el periodo seleccionado <TrendingUp className="h-4 w-4" />
                        </div>
                    </CardFooter>
                </Card>

                {/* Tercer gráfico: Área (Cigarros vs Objetivos) ocupando todo el ancho */}
                <Card className="flex flex-col md:col-span-2">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Cigarros vs Objetivos</CardTitle>
                        <CardDescription>Comparación de consumo real y metas</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        {/* Definimos un contenedor con ancho completo y altura fija */}
                        <div className="w-full h-[300px]">
                            <ChartContainer config={areaChartConfig} className="w-full h-full">
                                <AreaChart data={areaChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="period"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <Tooltip />
                                    <Area
                                        dataKey="smoked"
                                        type="monotone"
                                        stroke="var(--chart-6)"
                                        fill="var(--chart-6)"
                                        fillOpacity={0.4}
                                    />
                                    <Area
                                        dataKey="goal"
                                        type="monotone"
                                        stroke="var(--chart-7)"
                                        fill="var(--chart-7)"
                                        fillOpacity={0.4}
                                    />
                                </AreaChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground">
                            January - June 2024
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
