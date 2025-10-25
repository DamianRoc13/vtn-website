"use client";

import { motion } from "framer-motion";
import { World } from "./Globe";

const globeData = [
  // North America ↔ South America
  { order: 1, startLat: 40.7128, startLng: -74.006, endLat: -33.4489, endLng: -70.6693, arcAlt: 0.35, color: "#E8442E" },
  { order: 2, startLat: 34.0522, startLng: -118.2437, endLat: -12.0464, endLng: -77.0428, arcAlt: 0.32, color: "#F97316" },
  { order: 3, startLat: 25.7617, startLng: -80.1918, endLat: -0.2295, endLng: -78.5243, arcAlt: 0.28, color: "#FB923C" },

  // América ↔ Europa / África
  { order: 4, startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.42, color: "#FACC15" },
  { order: 5, startLat: -0.2295, startLng: -78.5243, endLat: 14.5995, endLng: -90.5167, arcAlt: 0.38, color: "#F87171" },
  { order: 6, startLat: -0.2295, startLng: -78.5243, endLat: 6.5244, endLng: 3.3792, arcAlt: 0.46, color: "#F97316" },

  // Europa ↔ Asia
  { order: 7, startLat: 48.8566, startLng: 2.3522, endLat: 22.5431, endLng: 114.0579, arcAlt: 0.52, color: "#F87171" },
  { order: 8, startLat: 55.7558, startLng: 37.6173, endLat: 28.6139, endLng: 77.209, arcAlt: 0.48, color: "#E11D48" },
  { order: 9, startLat: 41.9028, startLng: 12.4964, endLat: 31.2304, endLng: 121.4737, arcAlt: 0.54, color: "#FF7F6B" },

  // Asia ↔ Oceanía
  { order: 10, startLat: 22.5431, startLng: 114.0579, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.5, color: "#FB7185" },
  { order: 11, startLat: 35.6762, startLng: 139.6503, endLat: -37.8136, endLng: 144.9631, arcAlt: 0.48, color: "#F97316" },
  { order: 12, startLat: 1.3521, startLng: 103.8198, endLat: -36.8485, endLng: 174.7633, arcAlt: 0.44, color: "#FDBA74" },

  // Asia ↔ América / África
  { order: 13, startLat: 22.5431, startLng: 114.0579, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.6, color: "#F87171" },
  { order: 14, startLat: 22.5431, startLng: 114.0579, endLat: 12.8797, endLng: 121.774, arcAlt: 0.3, color: "#FF9F43" },
  { order: 15, startLat: 22.5431, startLng: 114.0579, endLat: -1.2864, endLng: 36.8172, arcAlt: 0.56, color: "#F97316" },

  // Global supply routes
  { order: 16, startLat: 52.52, startLng: 13.405, endLat: 34.6937, endLng: 135.5023, arcAlt: 0.58, color: "#F87171" },
  { order: 17, startLat: 31.2304, startLng: 121.4737, endLat: -34.6037, endLng: -58.3816, arcAlt: 0.6, color: "#FA5F55" },
  { order: 18, startLat: 22.5431, startLng: 114.0579, endLat: 24.7136, endLng: 46.6753, arcAlt: 0.52, color: "#FF7F6B" },
  { order: 19, startLat: 19.4326, startLng: -99.1332, endLat: 51.1657, endLng: 10.4515, arcAlt: 0.4, color: "#FACC15" },
  { order: 20, startLat: 14.5995, startLng: 120.9842, endLat: 55.7558, endLng: 37.6173, arcAlt: 0.5, color: "#FDA4AF" },
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
  polygonColor: "#f5f7ff",
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
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

      <div className="relative z-10 mx-auto flex w-4/5 max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-center">
        <div className="w-full space-y-8 lg:w-1/2">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero text-white"
          >
            VISTA TRADING <span className="text-gradient-brand">NETWORK</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70"
          >
            Conectamos tus ideas con fábricas confiables en China, negociamos términos justos, gestionamos calidad y te entregamos sin intermediarios. De la Feria al muelle, contigo en cada paso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a href="#contacto" className="btn-primary">
              Contáctanos
            </a>
            <a href="#servicios" className="btn-secondary">
              Nuestros Servicios
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex w-full items-center justify-center lg:w-1/2"
        >
          <div className="absolute -inset-28 rounded-full bg-gradient-to-br from-brand-500/25 via-transparent to-brand-500/10 blur-[180px]" />
          <div className="relative aspect-square w-full max-w-[1200px]">
            <div className="relative h-full w-full">
              <World globeConfig={globeConfig} data={globeData} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
