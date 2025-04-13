"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { InfoIcon, SquarePlusIcon } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Textarea } from "./ui/textarea"

export function RegistrarCigarro() {
    const [date, setDate] = React.useState<Date>()

    const [comment, setComment] = React.useState("");
    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const input = e.target.value;
        if (input.length <= 150) {
            setComment(input);
        } else {
            setComment(input.slice(0, 150));
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-x-2">
                    Registrar Cigarro
                    <SquarePlusIcon className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="mb-2">Añadir Cigarro</DialogTitle>
                    <DialogDescription className="border border-foreground/10 rounded-md p-2">
                        <InfoIcon className="h-4 w-4 mr-2 inline" />
                        <span className="text-xs">
                            Añade el último cigarro que has fumado. Esto te ayudará a llevar un control de tu consumo.
                            Es muy importante que lo hagas de forma diaria para que el sistema pueda ofrecerte estadísticas precisas.
                        </span>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    {/* Selección de Motivo */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="motivo" className="text-right">
                            Motivo
                        </Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Motivo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="estres">Estrés</SelectItem>
                                <SelectItem value="nerviosismo">Nerviosismo</SelectItem>
                                <SelectItem value="costumbre">Costumbre</SelectItem>
                                <SelectItem value="social">Social</SelectItem>
                                <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* Selección de Ganas */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="ganas" className="text-right">
                            Ganas
                        </Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Ganas" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="6">6</SelectItem>
                                <SelectItem value="7">7</SelectItem>
                                <SelectItem value="8">8</SelectItem>
                                <SelectItem value="9">9</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* Selección integrada de Fecha, Hora y Minutos */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="fecha" className="text-right">
                            Fecha
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "w-[240px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="w-4 h-4 mr-1" />
                                    {date ? format(date, "PPP HH:mm") : <span>Selecciona fecha y hora</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <div className="sm:flex">
                                    {/* Calendario para la fecha */}
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                    {/* Contenedor para los selectores de hora y minutos */}
                                    <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                                        {/* Selector de hora */}
                                        <ScrollArea className="w-20 h-[300px]">
                                            <div className="flex flex-col p-2 gap-2">
                                                {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                                                    <Button
                                                        key={hour}
                                                        size="icon"
                                                        variant={date && date.getHours() === hour ? "default" : "ghost"}
                                                        onClick={() => {
                                                            const newDate = date ? new Date(date) : new Date()
                                                            newDate.setHours(hour)
                                                            setDate(newDate)
                                                        }}
                                                        className="w-full"
                                                    >
                                                        {hour.toString().padStart(2, "0")}
                                                    </Button>
                                                ))}
                                            </div>
                                            <ScrollBar orientation="vertical" />
                                        </ScrollArea>
                                        {/* Selector de minutos */}
                                        <ScrollArea className="w-20 h-[300px]">
                                            <div className="flex flex-col p-2 gap-2">
                                                {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                                                    <Button
                                                        key={minute}
                                                        size="icon"
                                                        variant={date && date.getMinutes() === minute ? "default" : "ghost"}
                                                        onClick={() => {
                                                            const newDate = date ? new Date(date) : new Date()
                                                            newDate.setMinutes(minute)
                                                            setDate(newDate)
                                                        }}
                                                        className="w-full"
                                                    >
                                                        {minute.toString().padStart(2, "0")}
                                                    </Button>
                                                ))}
                                            </div>
                                            <ScrollBar orientation="vertical" />
                                        </ScrollArea>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-2" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="comentario" className="text-right">
                            Comentario
                        </Label>
                        <div className="col-span-3">
                            <Textarea
                                id="comentario"
                                className={cn(
                                    "block w-full resize-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0",
                                    comment.length >= 200
                                        ? "border-red-500/80"
                                        : comment.length >= 150
                                            ? "border-orange-500/80"
                                            : ""
                                )}
                                placeholder="Escribe algún comentario (opcional)."
                                value={comment}
                                onChange={handleCommentChange}
                                maxLength={200}
                            />
                            <div className="flex justify-end mt-1">
                                <span
                                    className={cn(
                                        "text-xs",
                                        comment.length >= 150
                                            ? "text-red-500/80"
                                            : comment.length >= 100
                                                ? "text-orange-500/80"
                                                : "text-muted-foreground"
                                    )}
                                >
                                    {comment.length}/150
                                </span>
                            </div>
                        </div>
                    </div>
                    <DialogDescription className="border border-orange-500/80 text-orange-500/80 bg-orange-500/10 rounded-md p-2">
                        <InfoIcon className="h-4 w-4 mr-2 inline" />
                        <span className="text-xs">
                            Es importante que sigas un registro riguroso y seas lo más preciso posible.
                        </span>
                    </DialogDescription>
                </div>
                <DialogFooter>
                    <Button type="submit">Añadir Cigarro</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
