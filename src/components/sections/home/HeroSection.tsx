"use client";

import { motion } from "framer-motion";
import { World } from "./Globe";

const globeData = [
  { order: 1, startLat: 40.7128, startLng: -74.006, endLat: -33.4489, endLng: -70.6693, arcAlt: 0.3, color: "#E8442E" },
  { order: 2, startLat: 40.7128, startLng: -74.006, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.4, color: "#F97316" },
  { order: 3, startLat: -0.2295, startLng: -78.5243, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.45, color: "#DC2626" },
  { order: 4, startLat: -0.2295, startLng: -78.5243, endLat: 19.4326, endLng: -99.1332, arcAlt: 0.35, color: "#FB923C" },
  { order: 5, startLat: 52.52, startLng: 13.405, endLat: -12.0464, endLng: -77.0428, arcAlt: 0.55, color: "#F87171" },
  { order: 6, startLat: 22.3193, startLng: 114.1694, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.5, color: "#FCA5A5" },
];

const globeConfig = {
  pointSize: 4,
  globeColor: "#050505",
  showAtmosphere: true,
  atmosphereColor: "#fef2f2",
  atmosphereAltitude: 0.08,
  emissive: "#050505",
  emissiveIntensity: 0.12,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.35)",
  ambientLight: "#e8442e",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#fef2f2",
  pointLight: "#ff7a5e",
  arcTime: 1200,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 0.6,
} as const;

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#050505] pb-20 pt-32"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(232,68,46,0.25) 0%, transparent 55%)",
              "radial-gradient(circle at 65% 40%, rgba(232,68,46,0.18) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 80%, rgba(232,68,46,0.2) 0%, transparent 55%)",
            ],
          }}
          transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="container-custom relative z-10 flex flex-col-reverse items-center gap-16 lg:flex-row">
        <div className="w-full max-w-2xl space-y-8">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero text-white"
          >
            Soluciones a medida que <span className="text-gradient-brand">impulsan tu negocio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70"
          >
            Combinamos estrategia, diseño y tecnología para crear experiencias digitales de alto impacto. Acompañamos a empresas ambiciosas en cada etapa de su transformación.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a href="#contacto" className="btn-primary">
              Agenda una Consultoría
            </a>
            <a href="#servicios" className="btn-secondary">
              Conoce Nuestros Servicios
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-8 text-white/80"
          >
            {[
              { label: "Clientes satisfechos", value: "60+" },
              { label: "Proyectos lanzados", value: "120+" },
              { label: "Años de experiencia", value: "5" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-brand-500">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex w-full max-w-xl items-center justify-center"
        >
          <div className="absolute -inset-20 rounded-full bg-gradient-to-br from-brand-500/20 via-transparent to-brand-500/10 blur-3xl" />
          <div className="glass-panel relative aspect-square w-full max-w-[520px] border-white/10 bg-white/5 p-6">
            <div className="relative h-full w-full">
              <World globeConfig={globeConfig} data={globeData} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
