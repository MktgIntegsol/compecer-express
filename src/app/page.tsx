"use client";

import { motion } from "framer-motion";
import { Shield, Zap, FileText, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Shield className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Compecer <span className="text-primary">Express</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#solucion" className="hover:text-white transition-colors">Solución</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a>
            <a href="#precios" className="hover:text-white transition-colors">Precios</a>
            <Link href="/login" className="px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
                La revolución de la ISO 27001
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                Consigue tu ISO 27001 en <span className="text-gradient">6 semanas</span> <br />
                sin consultores tradicionales
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Compecer Express reemplaza al implementador tradicional: procesos automáticos, 
                evidencias guiadas por IA y certificación directa. Ahorra tiempo y miles de euros.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/registro" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-primary/20">
                  Activa tu cuenta <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="#demo" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 rounded-2xl font-bold text-lg transition-all">
                  Ver Demostración
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="solucion" className="py-24 px-6 bg-slate-950/50">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">El cambio que representa Compecer</h2>
            <p className="text-muted-foreground">Comparamos el modelo tradicional frente al futuro automatizado.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-xl font-bold mb-6 text-red-400">Consultoría Tradicional</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-muted-foreground italic">
                  <CheckCircle className="text-red-400/50 w-5 h-5" /> Coste: +15.000€ iniciales
                </li>
                <li className="flex items-center gap-3 text-muted-foreground italic">
                  <CheckCircle className="text-red-400/50 w-5 h-5" /> Tiempo: 6-12 meses
                </li>
                <li className="flex items-center gap-3 text-muted-foreground italic">
                  <CheckCircle className="text-red-400/50 w-5 h-5" /> Documentación manual y tediosa
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5 shadow-2xl shadow-primary/10 scale-105">
              <h3 className="text-xl font-bold mb-6 text-primary">Compecer Express (IA)</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" /> Coste: 247€ / mes
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" /> Tiempo: 6 semanas promedio
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" /> Automatización total con IA
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="como-funciona" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="text-accent w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">IA Auditora</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Basada en la norma ISO 27001, nuestra IA valida tus documentos y 
                  te guía en cada paso del proceso de auditoría.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Generación Automática</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Crea políticas y procedimientos personalizados para tu empresa en 
                  segundos, no en semanas de reuniones.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle className="text-green-500 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Ready Score</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Visualiza en tiempo real qué tan cerca estás de la certificación 
                  con nuestro panel de cumplimiento dinámico.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <Shield className="w-5 h-5" />
            <span className="font-bold">Compecer Express</span>
          </div>
          <p className="text-muted-foreground text-sm">© 2026 Compecer Audit. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
