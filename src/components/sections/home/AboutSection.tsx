"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Equipo multidisciplinario",
    description:
      "Unimos talento en estrategia, diseño, desarrollo y data para entregar proyectos completos.",
  },
  {
    title: "Metodologías ágiles",
    description:
      "Iteramos rápido y con transparencia; verás avances continuos y medibles en cada sprint.",
  },
  {
    title: "Aliados a largo plazo",
    description:
      "Nos convertimos en tu equipo digital extendido, acompañando el crecimiento con métricas y resultados.",
  },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="section-padding bg-[#050505]">
      <div className="container-custom grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
              Nosotros
            </p>
            <h2 className="text-section-title text-left text-white">
              Potenciamos empresas mediante experiencias digitales memorables
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg leading-relaxed text-white/70"
          >
            Nuestro enfoque combina análisis profundo del negocio con decisiones creativas y tecnológicas. Trabajamos de forma cercana con cada cliente, transformando objetivos en productos digitales medibles y sostenibles.
          </motion.p>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-brand-500/10 backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold text-white">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/25 via-black to-brand-500/10 p-1 shadow-2xl backdrop-blur-2xl"
        >
          <div className="rounded-3xl bg-black/85 p-10">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { label: "Retorno promedio", value: "3.2x" },
                { label: "NPS acumulado", value: "92" },
                { label: "Entregas mensuales", value: "30+" },
                { label: "Certificaciones clave", value: "AWS, Azure, Scrum" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md shadow-brand-500/10">
                  <div className="text-3xl font-semibold text-brand-500">{item.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-white/50">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
