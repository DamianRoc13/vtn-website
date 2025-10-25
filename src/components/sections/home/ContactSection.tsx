"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 2500);
  };

  return (
    <section id="contacto" className="section-padding bg-[#040404]">
      <div className="container-custom grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-500">
              Contacto
            </p>
            <h2 className="text-section-title text-left text-white">
              Construyamos la próxima gran historia de tu empresa
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg leading-relaxed text-white/70"
          >
            Cuéntanos sobre tus retos actuales y te responderemos en menos de 48 horas con una propuesta clara, tiempos estimados y próximos pasos concretos.
          </motion.p>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { heading: "Consultoría inicial", text: "Sesión estratégica gratuita para entender tus metas." },
              { heading: "Implementación ágil", text: "Roadmap de entregables priorizados según impacto." },
              { heading: "Equipo senior", text: "Líderes de producto, diseño y tecnología a tu alcance." },
              { heading: "Colaboración continua", text: "Medimos resultados y optimizamos cada sprint." },
            ].map((item) => (
              <div key={item.heading} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-brand-500">{item.heading}</div>
                <p className="mt-2 text-sm text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel relative overflow-hidden border border-white/10 bg-white/5 p-8"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />

          <form onSubmit={handleSubmit} className="relative space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/70"
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/70"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40"
                placeholder="nombre@empresa.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/70"
              >
                Cuéntanos sobre tu proyecto
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40"
                placeholder="Necesitamos lanzar una plataforma e-commerce en 8 semanas..."
              />
            </div>

            <button
              type="submit"
              className={cn(
                "w-full rounded-xl px-6 py-3 text-sm font-semibold transition duration-300",
                status === "sent"
                  ? "bg-emerald-500 text-white"
                  : "bg-brand-500 text-white hover:bg-brand-700",
              )}
              disabled={status === "sent"}
            >
              {status === "sent" ? "¡Mensaje enviado!" : "Enviar mensaje"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
