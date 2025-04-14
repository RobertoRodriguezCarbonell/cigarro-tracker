"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ThumbsUpIcon } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Juan Pérez",
    opinion:
      "Este servicio ha transformado mi vida, ¡ahora puedo respirar mejor y me siento más saludable!",
    avatar: "https://via.placeholder.com/100",
    rating: 9.5,
  },
  {
    id: 2,
    name: "María Rodríguez",
    opinion:
      "Recomiendo este producto, realmente marcó la diferencia para dejar de fumar.",
    avatar: "https://via.placeholder.com/100",
    rating: 8.3,
  },
  {
    id: 3,
    name: "Carlos López",
    opinion:
      "He logrado dejar de fumar y mi salud mejoró notablemente. Gran apoyo durante el proceso.",
    avatar: "https://via.placeholder.com/100",
    rating: 9.2,
  },
  {
    id: 4,
    name: "Ana Gómez",
    opinion:
      "Un servicio excepcional, me ayudó a superar mis adicciones de forma definitiva.",
    avatar: "https://via.placeholder.com/100",
    rating: 9.4,
  },
  {
    id: 5,
    name: "Luis Martínez",
    opinion:
      "El cambio ha sido increíble, ahora me siento mucho mejor y más libre. ¡Totalmente recomendable!",
    avatar: "https://via.placeholder.com/100",
    rating: 8.5,
  },
]

const HeroTestimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  )

  return (
    <div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-8" />
      <h1 className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center mb-8">
        ¿Qué dicen nuestros usuarios?
      </h1>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="max-w-[400px] mx-auto">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <div className="p-4">
                <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl">
                  <CardContent className="flex flex-col px-6 py-8">
                    {/* Opinión del usuario */}
                    <p className="text-base text-gray-700 dark:text-gray-300 italic">
                      {testimonial.opinion}
                    </p>
                    {/* Separador y datos del usuario */}
                    <div className="mt-6 border-t pt-4 flex items-center gap-x-4">
                      <div className="">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {testimonial.name}
                        </p>
                        <div className="flex items-center mt-1">
                          <span className="text-sm text-gray-500 mr-2">
                            Puntuación:
                          </span>
                          <span className="flex items-center text-orange-500 text-sm font-semibold">
                            {testimonial.rating}
                            <ThumbsUpIcon className="inline-block w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}

export default HeroTestimonials
