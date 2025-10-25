"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export function ServicesSection() {
  const services = useMemo(
    () => [
      {
        title: "Agente de Compras",
        description:
          "Representamos sus intereses comerciales, negociamos con proveedores y cuidamos cada entrega hasta su destino.",
        bullets: [
          "Negociaciones estratégicas",
          "Optimización de costos",
          "Seguimiento completo",
        ],
      },
      {
        title: "Búsqueda de Proveedores",
        description:
          "Localizamos, auditamos y verificamos fabricantes confiables que cumplen con los estándares de su negocio.",
        bullets: [
          "Validación y auditoría",
          "Reportes comparativos",
          "Red de fábricas confiables",
        ],
      },
      {
        title: "Guía e Intérprete",
        description:
          "Facilitamos la comunicación con aliados internacionales eliminando barreras culturales e idiomáticas.",
        bullets: [
          "Acompañamiento en ferias",
          "Interpretación en tiempo real",
          "Contexto cultural clave",
        ],
      },
      {
        title: "Inspecciones",
        description:
          "Inspeccionamos calidad, cantidades y empaque antes del embarque para asegurar el cumplimiento de sus especificaciones.",
        bullets: [
          "Control de calidad in situ",
          "Documentación fotográfica",
          "Protocolos de liberación",
        ],
      },
      {
        title: "Planes de Ferias o Viajes",
        description:
          "Diseñamos agendas personalizadas, optimizando rutas y reuniones para alcanzar sus objetivos comerciales.",
        bullets: [
          "Agenda priorizada",
          "Logística integral",
          "Insights del mercado",
        ],
      },
      {
        title: "Curso / Asesoría Personalizada",
        description:
          "Capacitación y consultoría a medida para que su equipo domine procesos de importación y comercio internacional.",
        bullets: [
          "Programas a la medida",
          "Material especializado",
          "Mentoría continua",
        ],
      },
    ],
    [],
  );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 48, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="servicios" className="section-padding bg-[#050505]">
      <div className="container-custom relative space-y-16">
        <div className="absolute inset-x-0 -top-24 -z-10 mx-auto h-[520px] w-[92%] rounded-[160px] bg-gradient-to-b from-white/6 via-white/0 to-transparent blur-[180px]" />

        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-500"
          >
            Nuestros Servicios
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-section-title text-white"
          >
            Ofrecemos soluciones integrales para optimizar sus operaciones comerciales internacionales
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-section-subtitle text-white/70"
          >
            Desde la investigación, negociación hasta la inspección y la capacitación, cada servicio está diseñado para reducir riesgos, aumentar precisión y acelerar su expansión global.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-[1px]"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/12 via-transparent to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />
              <div className="relative flex h-full flex-col gap-6 rounded-[28px] bg-[#08090c]/95 p-8 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#0b0c10]/95">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-500/80">
                      Servicio {index + 1}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-brand-500 transition-transform duration-500 group-hover:scale-[1.12]">
                    <span className="text-lg font-semibold">{`0${index + 1}`}</span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-white/70">{service.description}</p>

                <div className="mt-auto space-y-3">
                  {service.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-3 text-sm text-white/80"
                    >
                      <span className="flex h-2.5 w-2.5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-brand-400 shadow-[0_0_16px_rgba(232,68,46,0.55)] transition-transform duration-300 group-hover:scale-[1.15]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 text-[10px] uppercase tracking-[0.4em] text-white/35">
                  <span>visión global</span>
                  <span>+ impacto</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
