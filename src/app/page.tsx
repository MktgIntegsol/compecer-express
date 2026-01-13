"use client";

import { motion } from "framer-motion";
import { Shield, Zap, FileText, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Shield className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Compecer <span className="text-accent italic">Express</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#solucion" className="hover:text-accent transition-colors">La Solución</a>
            <a href="#por-que-ia" className="hover:text-accent transition-colors">¿Por qué IA?</a>
            <a href="#precios" className="hover:text-accent transition-colors">Precios</a>
            <Link href="/login" className="px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-accent/20 text-accent border border-accent/30 rounded-full">
                LA REVOLUCIÓN DE LA ISO 27001
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                Consigue tu ISO 27001 en <span className="text-accent underline decoration-4 underline-offset-8">6 semanas</span> <br />
                sin consultores tradicionales
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Implementa ISO 27001 tú mismo con IA. Compecer Express genera políticas,
                evidencias y documentación automáticamente. <strong>Ahorra más de $15,000 USD</strong> y elimina la burocracia.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/registro" className="w-full sm:w-auto px-8 py-4 bg-accent text-primary-foreground hover:bg-accent/90 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-accent/20">
                  Empezar ahora <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="#solucion" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 rounded-2xl font-bold text-lg transition-all">
                  Ver Cómo Funciona
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section - The Normatron Logic */}
        <section id="solucion" className="py-24 px-6 bg-slate-950/50">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Por qué pagar $15,000+ a un consultor?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">Tradicionalmente, la certificación era lenta, cara y manual. Compecer Express le da la vuelta.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] relative opacity-80">
              <div className="absolute -top-4 left-8 px-4 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-bold">MODELO ANTIGUO</div>
              <h3 className="text-xl font-bold mb-6 text-red-400">Consultoría Tradicional</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="text-red-400/50 w-5 h-5 flex-shrink-0" /> Coste: +$15.000 USD iniciales
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="text-red-400/50 w-5 h-5 flex-shrink-0" /> Tiempo: 6-12 meses de reuniones
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="text-red-400/50 w-5 h-5 flex-shrink-0" /> Documentos: 100% manuales
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-accent/20 bg-accent/5 shadow-2xl shadow-accent/10 scale-105 relative">
              <div className="absolute -top-4 left-8 px-4 py-1 bg-accent text-primary-foreground rounded-full text-xs font-bold">MÉTODO COMPECER EXPRESS</div>
              <h3 className="text-xl font-bold mb-6 text-accent">Automatización con IA</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5 flex-shrink-0" /> Coste: <span className="font-bold">$240 USD / mes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5 flex-shrink-0" /> Tiempo: <span className="font-bold underline decoration-accent">6 semanas promedio</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5 flex-shrink-0" /> Documentación: Generada por IA en segundos
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precios" className="py-24 px-6 bg-[#001f3f]/30">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Inversión Inteligente</h2>
            <p className="text-xl text-muted-foreground">Olvida los pagos de $15,000. Obtén una plataforma de clase mundial.</p>
          </div>

          <div className="max-w-md mx-auto p-12 rounded-[2.5rem] border-2 border-accent bg-accent/5 shadow-2xl shadow-accent/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 bg-accent text-primary-foreground transform rotate-12 translate-x-12 -translate-y-2 font-bold px-12">BEST VALUE</div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest text-accent">Certificación Express</h3>
              <div className="flex items-center justify-center gap-1 mb-8">
                <span className="text-5xl font-extrabold">$240</span>
                <div className="text-left">
                  <span className="block text-xl font-bold text-accent">USD</span>
                  <span className="block text-sm text-muted-foreground">/mes</span>
                </div>
              </div>
              <ul className="text-left space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5" /> Acceso ilimitado a IA Auditora
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5" /> Generación automática de SGSI
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5" /> Chat de Soporte Especializado
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5" /> Ready Score en tiempo real
                </li>
              </ul>
              <Link href="/registro" className="block w-full py-4 bg-accent text-primary-foreground hover:bg-accent/90 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-accent/20">
                Seleccionar Plan
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                {
                  q: "¿Es válido este certificado internacionalmente?",
                  a: "Sí. Compecer emite certificados acreditados. Nuestra IA asegura que tu SGSI cumple al 100% con el estándar internacional ISO/IEC 27001:2022."
                },
                {
                  q: "¿Qué pasa si ya tengo algunos documentos?",
                  a: "Puedes subirlos a nuestra plataforma. Nuestra IA los analizará y te dirá exactamente qué falta o qué debes corregir para pasar la auditoría."
                },
                {
                  q: "¿Necesito conocimientos técnicos previos?",
                  a: "Para nada. La herramienta está diseñada para que cualquier gerente o encargado pueda implementarlo siguiendo las guías paso a paso de nuestra IA."
                },
                {
                  q: "¿Cómo es el proceso de certificación final?",
                  a: "Una vez que tu 'Ready Score' marque el 100%, un auditor humano de Compecer revisará el expediente generado por la IA para la emisión oficial."
                }
              ].map((faq, i) => (
                <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-accent">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
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
