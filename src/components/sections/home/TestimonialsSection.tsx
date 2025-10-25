"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Testimonial = {
  quote: string;
  author: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Conocí a Elizabeth en una feria en Guangzhou y me ayudó a encontrar tres proveedores confiables. Me acompañó en todo el proceso y gracias a ella hoy importo termos personalizados para mi negocio. Muy profesional y honesta.",
    author: "Carlos M.",
    location: "Perú",
  },
  {
    quote:
      "Era mi primera vez en China y estaba nerviosa, pero desde el primer día Elizabeth fue como una guía y amiga. Me ayudó con traducciones, transporte y hasta con los detalles del envío. ¡Una experiencia increíble!",
    author: "María José R.",
    location: "Ecuador",
  },
  {
    quote:
      "Buscaba luces LED para mi tienda y ella encontró una fábrica excelente. Además, revisó la calidad por mí antes de enviar todo. Me ahorró tiempo y dolores de cabeza.",
    author: "Luis D.",
    location: "Colombia",
  },
  {
    quote:
      "La atención fue personalizada desde el primer mensaje. Me explicó todo con paciencia y se adaptó a mi presupuesto. Ya llevo dos compras con Vista Trading Network y seguiré confiando en ellos.",
    author: "Carla T.",
    location: "México",
  },
];

const collageImages = [
  { src: "/social.webp", className: "top-0 left-6 w-40" },
  { src: "/meet.webp", className: "top-24 right-0 w-48" },
  { src: "/meet-2.webp", className: "bottom-0 left-0 w-44" },
  { src: "/feria-1.webp", className: "bottom-10 right-8 w-52" },
  { src: "/fabry.webp", className: "top-1/2 left-1/2 w-40 -translate-x-1/2 -translate-y-1/2" },
];

export function TestimonialsSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const collageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    const animateCards = ({
      cardStart,
      baseDelay,
    }: {
      cardStart: string;
      baseDelay: number;
    }) => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 80, scale: 0.94, rotateX: -6 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: index * baseDelay,
            scrollTrigger: {
              trigger: card,
              start: cardStart,
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    };

    mm.add("(max-width: 767px)", () => {
      animateCards({ cardStart: "top 96%", baseDelay: 0.07 });
    });

    mm.add("(min-width: 768px)", () => {
      animateCards({ cardStart: "top 88%", baseDelay: 0.1 });
    });

    const collageImages = collageRef.current?.querySelectorAll("[data-collage]") ?? [];
    collageImages.forEach((image, index) => {
      const floatTimeline = gsap.timeline({ repeat: -1, yoyo: true });
      floatTimeline.to(image, {
        y: index % 2 === 0 ? 14 : -14,
        x: index % 2 === 0 ? -10 : 10,
        duration: 4 + index,
        ease: "sine.inOut",
      });
    });

    return () => mm.revert();
  }, []);

  const testimonialCards = useMemo(() => {
    cardsRef.current = [];
    return testimonials.map((item, index) => (
      <div
        key={item.author}
        ref={(el) => {
          if (el) cardsRef.current[index] = el;
        }}
        className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090a0d]/90 p-8 shadow-[0_20px_60px_rgba(232,68,46,0.25)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-brand-500/40"
      >
        <div className="absolute -top-12 left-6 text-6xl text-brand-500/25">
          “
        </div>
        <p className="relative z-10 text-base leading-relaxed text-white/80">
          {item.quote}
        </p>
        <div className="relative z-10 mt-6 flex items-center justify-between text-sm uppercase tracking-[0.35em] text-white/40">
          <span>{item.author}</span>
          <span>{item.location}</span>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>
    ));
  }, []);

  return (
    <section id="testimonios" className="section-padding bg-[#050505]">
      <div className="container-custom relative space-y-16">
        <div className="absolute inset-x-0 -top-20 -z-10 h-[480px] w-full rounded-[160px] bg-gradient-to-b from-white/6 via-transparent to-transparent blur-[160px]" />

        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-500"
          >
            Testimonios
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-section-title text-white"
          >
            Lo que nuestros clientes dicen sobre nosotros
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-section-subtitle text-white/70"
          >
            Voces reales de importadores y emprendedores que hoy construyen empresas sólidas junto a nosotros desde Shenzhen.
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="grid gap-8 lg:grid-cols-2">
            {testimonialCards}
          </div>

          <div ref={collageRef} className="relative mx-auto flex h-full w-full max-w-[520px] items-center justify-center">
            <div className="absolute inset-0 -z-10 rounded-[44px] bg-gradient-to-br from-brand-500/20 via-transparent to-brand-500/5 blur-3xl" />
            <div className="relative aspect-square w-full max-w-[460px]">
              {collageImages.map((image) => (
                <div
                  key={image.src}
                  data-collage
                  className={`absolute overflow-hidden rounded-[26px] border border-white/10 bg-[#0b0c10]/90 shadow-[0_20px_50px_rgba(232,68,46,0.25)] backdrop-blur-xl ${image.className}`}
                >
                  <img
                    src={image.src}
                    alt="Experiencia VTN"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
              <div className="absolute inset-0 rounded-[34px] border border-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
