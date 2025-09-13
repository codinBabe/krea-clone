"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    label: "NEW IMAGE MODEL",
    title: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    button: "Try WAN 2.2",
    src: "/images/wan-2.2.webp",
  },
  {
    id: 2,

    label: "OPEN SOURCE MODEL",
    title: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    button: "Read Report",
    src: "/images/flux.webp",
  },
];

export function HeroCards() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  const nextSlide = () =>
    setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 70}%)` }}
      >
        {slides.map((slide) => (
          <Card
            key={slide.id}
            className="relative flex-shrink-0 w-[70%] md:w-[60%] h-[320px] md:h-[420px] mx-2 overflow-hidden border-0 text-white rounded-2xl"
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.src})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6">
              <span className="text-xs font-medium opacity-80">
                {slide.label}
              </span>
              <div className="flex flex-col md:flex-row items-center gap-2 justify-between">
                <div className="space-y-2 max-w-lg">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="text-sm opacity-80">{slide.description}</p>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white text-black rounded-full hover:bg-white/80"
                >
                  {slide.button}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Arrows container */}
      <div className="flex gap-2 justify-end mt-2">
        <Button
          onClick={prevSlide}
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 bg-accent shadow hover:bg-background"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          onClick={nextSlide}
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 bg-accent shadow hover:bg-background"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              i === current ? "bg-foreground" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
