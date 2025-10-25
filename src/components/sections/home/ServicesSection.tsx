"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Sitios y plataformas a medida con foco en rendimiento, escalabilidad y una experiencia impecable.",
    items: ["Next.js & React", "Integraciones empresariales", "Optimizaciones SEO y Core Web Vitals"],
  },
  {
    title: "Productos Digitales",
    description:
      "Diseñamos y lanzamos MVPs y aplicaciones completas listos para crecer junto a tu negocio.",
    items: ["Discovery & research", "Diseño UI/UX", "Roadmap y crecimiento"],
  },
  {
    title: "Transformación Tecnológica",
    description:
      "Aceleramos procesos internos mediante automatización, análisis de datos y soluciones cloud.",
    items: ["Automatización de flujos", "Integraciones cloud", "Dashboards y analítica en tiempo real"],
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="section-padding bg-[#050505]">
      <div className="container-custom space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
            Servicios
          </p>
          <h2 className="text-section-title text-white">
            Estrategia, diseño y tecnología alineados con tus objetivos
          </h2>
          <p className="text-section-subtitle">
            Construimos soluciones integrales que van desde la consultoría inicial hasta la implementación y evolución continua.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-brand-500/10 backdrop-blur-xl"
            >
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-white/70">
                {service.description}
              </p>
              <ul className="space-y-3 text-sm text-white/80">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
