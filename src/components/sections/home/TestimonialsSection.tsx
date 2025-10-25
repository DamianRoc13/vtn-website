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

const galleryImages = [
  { src: "/social.webp", label: "Networking Global" },
  { src: "/meet.webp", label: "Reuniones Estratégicas" },
  { src: "/meet-2.webp", label: "Acompañamiento 360°" },
  { src: "/feria-1.webp", label: "Feria Internacional" },
  { src: "/fabry.webp", label: "Visitas a Fábrica" },
];

export function TestimonialsSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

        <div className="space-y-16">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonialCards}
          </div>

          <div className="space-y-8">
            <div className="testimonial-gallery">
              {galleryImages.map((image) => (
                <div key={image.src} className="testimonial-gallery__card">
                  <img src={image.src} alt={image.label} loading="lazy" />
                  <div className="testimonial-gallery__label">{image.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .testimonial-gallery {
          display: flex;
          gap: 1.5rem;
          margin: 0 auto;
          overflow: hidden;
          transform: skewY(-3deg) skewX(2deg);
          padding: 1.25rem;
          justify-content: center;
        }

        .testimonial-gallery__card {
          flex: 1;
          position: relative;
          height: clamp(340px, 30vw, 520px);
          border-radius: 32px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(8, 9, 12, 0.9);
          transition: flex 0.9s ease-in-out, transform 0.9s ease-in-out;
          display: flex;
        }

        .testimonial-gallery__card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          
          transition: filter 0.9s ease-in-out, transform 0.9s ease-in-out;
        }

        .testimonial-gallery__label {
          position: absolute;
          left: 0;
          bottom: 0;
          padding: 0.75rem 1rem;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transform-origin: 0% 0%;
          transform: rotate(-90deg) translate(-100%, 0);
          transition: transform 0.6s ease, background 0.6s ease, font-size 0.6s ease;
        }

        .testimonial-gallery__card:hover {
          flex: 3.75;
        }

        .testimonial-gallery__card:hover img {
          filter: grayscale(0%);
          transform: scale(1.08);
        }

        .testimonial-gallery__card:hover .testimonial-gallery__label {
          transform: rotate(0deg) translate(0, 0);
          background: rgba(232, 68, 46, 0.75);
          font-size: 1.05rem;
        }

        @media (max-width: 1024px) {
          .testimonial-gallery {
            flex-direction: column;
            transform: none;
          }

          .testimonial-gallery__card {
            height: clamp(260px, 65vw, 400px);
          }
          .testimonial-gallery__card:hover {
            flex: 1;
          }
        }
      `}</style>
    </section>
  );
}
