'use client'

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Happy Customer",
    content: "The service was absolutely amazing! I ordered items from overseas and everything arrived quickly and safely. The process was so smooth and hassle-free. Really impressed with the quality of service!",
    image: "/images/person.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Verified Buyer",
    content: "I couldn't be happier with my experience. The customer support was outstanding and my items arrived exactly as described. The whole process was seamless from start to finish. Highly recommended!",
    image: "/images/person.png",
  },
]

export default function TestimonialCarousel() {
  return (
    <div className="w-full py-16" style={{
      background: 'linear-gradient(to bottom, #FFD6D6 0%, #FFE4E4 30%, #FFF1F1 60%, #FFFFFF 100%)'
    }}>
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center text-[#F04B4B] mb-8">Testimoni</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/1 lg:basis-1/1">
                <Card className="relative bg-[#F04B4B] text-white p-8 rounded-3xl shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30">
                        <Image
                          src={testimonial.image}
                          alt={`${testimonial.name}'s profile picture`}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <blockquote className="bg-white/20 rounded-2xl p-4 mb-4 shadow-md">
                        <p className="text-white">{testimonial.content}</p>
                      </blockquote>
                      <div>
                        <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                        <p className="text-white/80">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 bg-white/20 hover:bg-white/30 border-none text-white" />
          <CarouselNext className="absolute right-4 bg-white/20 hover:bg-white/30 border-none text-white" />
        </Carousel>
      </div>
    </div>
  )
}

