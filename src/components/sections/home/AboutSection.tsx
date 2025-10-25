"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const paragraphs = [
  "Vista Trading Network es una empresa con sede en Shenzhen, China, dedicada a brindar soluciones de comercio internacional para emprendedores y empresas de América Latina.",
  "Fundada y dirigida por Elizabeth Olivo, una ecuatoriana que llegó a China en 2017 con el sueño de crear puentes entre dos culturas.",
  "Tras ocho años de experiencia viviendo, estudiando y trabajando en Shenzhen, decidí lanzar mi propia empresa en 2024 para ofrecer un servicio más humano, transparente y efectivo.",
  "Conozco a fondo el mercado chino, hablo español, inglés y chino, y he trabajado con importadores de distintos países que hoy confían en mí para encontrar los productos correctos, negociar con proveedores y acompañarlos en ferias, visitas a fábricas o controles de calidad.",
  "En Vista Trading Network no solo gestionamos productos; construimos relaciones de confianza. Podemos ayudarte a encontrar cualquier producto que necesites, desde artículos promocionales hasta maquinaria, electrónica, moda o empaques personalizados. Nuestra misión es que importes con seguridad, claridad y sin complicaciones.",
];

const callouts = [
  { label: "Ciudades conectadas", value: "20+" },
  { label: "Idiomas", value: "ES · EN · 中文" },
  { label: "Año fundación", value: "2024" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textBlocksRef = useRef<HTMLParagraphElement[]>([]);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    const setupAnimations = ({
      textStart,
      imageStart,
      badgeStart,
      baseDelay,
    }: {
      textStart: string;
      imageStart: string;
      badgeStart: string;
      baseDelay: number;
    }) => {
      textBlocksRef.current.forEach((block, index) => {
        if (!block) return;
        gsap.fromTo(
          block,
          { opacity: 0, y: 60, skewY: 6 },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 0.85,
            ease: "power3.out",
            delay: index * baseDelay,
            scrollTrigger: {
              trigger: block,
              start: textStart,
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      const photoCards =
        imageRef.current?.querySelectorAll<HTMLElement>("[data-photo-card]") ?? [];

      photoCards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 90,
            rotate: idx % 2 === 0 ? -8 : 8,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 1.05,
            ease: "power3.out",
            delay: idx * 0.14,
            scrollTrigger: {
              trigger: card,
              start: imageStart,
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: badgeRef.current,
              start: badgeStart,
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    };

    mm.add("(max-width: 767px)", () =>
      setupAnimations({
        textStart: "top 97%",
        imageStart: "top 97%",
        badgeStart: "top 99%",
        baseDelay: 0.04,
      }),
    );

    mm.add("(min-width: 768px)", () =>
      setupAnimations({
        textStart: "top 84%",
        imageStart: "top 82%",
        badgeStart: "top 86%",
        baseDelay: 0.08,
      }),
    );

    return () => mm.revert();
  }, []);

  textBlocksRef.current = [];

  return (
    <section id="nosotros" ref={sectionRef} className="section-padding bg-[#050505]">
      <div className="container-custom">
        <div className="relative mb-16 flex flex-col gap-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-500"
          >
            Sobre Nosotros
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-section-title text-white"
          >
            Conectando Latinoamérica con el corazón del mercado chino
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=""
          >
            <p className="text-lg leading-relaxed">
              Somos una boutique de comercio internacional con visión humana. Nuestra fundadora lidera cada proyecto desde Shenzhen para que importes con precisión, acompañamiento y confianza.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
          <div className="space-y-6">
            {paragraphs.map((text, index) => (
              <p
                key={text.slice(0, 20)}
                ref={(el) => {
                  if (el) textBlocksRef.current[index] = el;
                }}
                className="rounded-[26px] border border-white/8 bg-white/[0.04] p-6 text-base leading-relaxed text-white/75 shadow-[0_12px_40px_-24px_rgba(232,68,46,0.35)] backdrop-blur-xl transition-all duration-500 hover:border-brand-500/40 hover:text-white"
              >
                {text}
              </p>
            ))}

            <div
              ref={badgeRef}
              className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-white/70 backdrop-blur-xl transition duration-500 hover:border-brand-500/40 hover:bg-white/[0.08] lg:grid-cols-3"
            >
              {callouts.map((item) => (
                <div key={item.label} className="flex flex-col items-start gap-1">
                  <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                    {item.label}
                  </span>
                  <span className="text-lg font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={imageRef}
            className="relative mx-auto flex h-full w-full max-w-[520px] flex-col gap-8"
          >
            <div className="absolute inset-0 -z-10 rounded-[44px] bg-gradient-to-br from-brand-500/25 via-transparent to-brand-500/5 blur-3xl" />

            <div
              data-photo-card
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[#08090c] p-6 shadow-[0_30px_80px_rgba(232,68,46,0.25)]"
            >
              <div className="overflow-hidden rounded-[24px] border border-white/10">
                <img
                  src="/cuadrado-people.webp"
                  alt="Elizabeth Olivo en visita comercial"
                  className="h-full w-full object-cover transition duration-[1500ms] group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 space-y-2 text-white/70">
                <p className="text-sm">
                  “Importar desde China es comprender la cultura, el ritmo y las expectativas de dos mundos. Mi trabajo es tender ese puente contigo.”
                </p>
                <span className="block text-xs font-semibold uppercase tracking-[0.35em] text-brand-300">
                  Elizabeth Olivo · Fundadora VTN
                </span>
              </div>
            </div>

            <div
              data-photo-card
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[#08090c] p-6 shadow-[0_30px_80px_rgba(232,68,46,0.2)]"
            >
              <div className="overflow-hidden rounded-[24px] border border-white/10">
                <img
                  src="/kinston.webp"
                  alt="Clientes recorriendo ferias en Shenzhen"
                  className="h-full w-full object-cover transition duration-[1500ms] group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 space-y-2 text-white/70">
                <p className="text-sm">
                  “Cada visita a fábrica o feria termina en decisiones seguras. Diseñamos experiencias que mezclan negocio, cultura y confianza.”
                </p>
                <span className="block text-xs font-semibold uppercase tracking-[0.35em] text-brand-300">
                  VTN · Shenzhen
                </span>
              </div>
            </div>

            <div className="absolute -left-6 -top-6 hidden h-20 w-20 rotate-12 rounded-2xl border border-brand-500/30 bg-brand-500/10 lg:block" />
            <div className="absolute -right-10 bottom-8 hidden h-28 w-28 -rotate-6 rounded-full border border-white/20 bg-white/5 blur-2xl lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
