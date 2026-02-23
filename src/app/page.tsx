"use client";

import { motion } from "framer-motion";
import { Shield, Zap, FileText, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-navy shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="logo-mark-white scale-[0.8] origin-left"></div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold tracking-tight text-white leading-none mt-1">COMPECER<sup className="text-[10px]">&reg;</sup> <span className="text-brand-orange italic font-medium text-lg ml-1">Express</span></span>
              <span className="text-[8px] text-gray-300 uppercase tracking-widest mt-0.5">Organismo de Certificación</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            <a href="#solucion" className="hover:text-brand-orange transition-colors">La Solución</a>
            <a href="#por-que-ia" className="hover:text-brand-orange transition-colors">¿Por qué IA?</a>
            <a href="#precios" className="hover:text-brand-orange transition-colors">Precios</a>
            <Link href="/login" className="px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/10 text-white transition-colors">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand-navy/10 dark:bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-brand-orange/10 text-brand-orange border border-brand-orange/30 rounded-full">
                LA REVOLUCIÓN DE LA ISO 27001
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-brand-darkgray dark:text-white">
                Consigue tu ISO 27001 en <span className="text-gradient underline decoration-4 underline-offset-8">6 semanas</span> <br />
                sin consultores tradicionales
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Implementa ISO 27001 tú mismo con IA. Compecer Express genera políticas,
                evidencias y documentación automáticamente. <strong>Ahorra más de $15,000 USD</strong> y elimina la burocracia.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/registro" className="w-full sm:w-auto px-8 py-4 bg-brand-orange text-white hover:bg-brand-orange/90 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-brand-orange/20">
                  Empezar ahora <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="#solucion" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 rounded-2xl font-bold text-brand-navy dark:text-white text-lg transition-all">
                  Ver Cómo Funciona
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section - The Normatron Logic */}
        <section id="solucion" className="py-24 px-6 bg-brand-navy">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">¿Por qué pagar $15,000+ a un consultor?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto italic">Tradicionalmente, la certificación era lenta, cara y manual. Compecer Express le da la vuelta.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl border border-white/10 bg-white relative shadow-xl">
              <div className="absolute -top-4 left-8 px-4 py-1 bg-red-100 text-red-600 border border-red-200 rounded-full text-xs font-bold">MODELO ANTIGUO</div>
              <h3 className="text-xl font-bold mb-6 text-red-500">Consultoría Tradicional</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-brand-darkgray">
                  <CheckCircle className="text-red-400 w-5 h-5 flex-shrink-0" /> Coste: +$15.000 USD iniciales
                </li>
                <li className="flex items-center gap-3 text-brand-darkgray">
                  <CheckCircle className="text-red-400 w-5 h-5 flex-shrink-0" /> Tiempo: 6-12 meses de reuniones
                </li>
                <li className="flex items-center gap-3 text-brand-darkgray">
                  <CheckCircle className="text-red-400 w-5 h-5 flex-shrink-0" /> Documentos: 100% manuales
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border-2 border-brand-orange bg-white shadow-2xl shadow-brand-orange/20 scale-105 relative">
              <div className="absolute -top-4 left-8 px-4 py-1 bg-brand-orange text-white rounded-full text-xs font-bold">MÉTODO COMPECER EXPRESS</div>
              <h3 className="text-xl font-bold mb-6 text-brand-orange">Automatización con IA</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-brand-darkgray font-medium">
                  <CheckCircle className="text-brand-orange w-5 h-5 flex-shrink-0" /> Coste: <span className="font-bold text-brand-navy">$240 USD / mes</span>
                </li>
                <li className="flex items-center gap-3 text-brand-darkgray font-medium">
                  <CheckCircle className="text-brand-orange w-5 h-5 flex-shrink-0" /> Tiempo: <span className="font-bold underline decoration-brand-orange text-brand-navy">6 semanas promedio</span>
                </li>
                <li className="flex items-center gap-3 text-brand-darkgray font-medium">
                  <CheckCircle className="text-brand-orange w-5 h-5 flex-shrink-0" /> Documentación: Generada por IA en segundos
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="por-que-ia" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="group space-y-4 p-8 rounded-3xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/5 text-center md:text-left">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                  <Zap className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold leading-tight">Implementación Instantánea</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Genera la Declaración de Aplicabilidad (SoA) y el Alcance en minutos. Sin redactar una sola palabra.
                </p>
              </div>
              <div className="group space-y-4 p-8 rounded-3xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/5 text-center md:text-left">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                  <FileText className="text-accent w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold leading-tight">Evidencia Inteligente</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sube tus capturas y nuestra IA las valida según el estándar ISO 27001:2022. Auditoría en tiempo real.
                </p>
              </div>
              <div className="group space-y-4 p-8 rounded-3xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/5 text-center md:text-left">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                  <CheckCircle className="text-green-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold leading-tight">Ready to Audit Score</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un panel visual que te indica exactamente qué día estás listo para que COMPECER emita tu certificado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precios" className="py-24 px-6 bg-brand-navy text-white">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-orange">Inversión Inteligente</h2>
            <p className="text-xl text-blue-100 opacity-90">Olvida los pagos de $15,000. Obtén una plataforma de clase mundial.</p>
          </div>

          <div className="max-w-md mx-auto p-12 rounded-[2.5rem] border-2 border-brand-orange bg-white text-brand-darkgray shadow-2xl shadow-brand-orange/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 bg-brand-orange text-white transform rotate-12 translate-x-12 -translate-y-2 font-bold px-12">BEST VALUE</div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest text-accent">Certificación Express</h3>
              <div className="flex items-center justify-center gap-1 mb-8">
                <span className="text-5xl font-extrabold">$240</span>
                <div className="text-left">
                  <span className="block text-xl font-bold text-accent">USD</span>
                  <span className="block text-sm text-muted-foreground">/mes</span>
                </div>
              </div>
              <ul className="text-left space-y-4 mb-10 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-brand-orange w-5 h-5" /> Acceso ilimitado a IA Auditora
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5" /> Generación automática de SGSI
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-brand-orange w-5 h-5" /> Chat de Soporte Especializado
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-brand-orange w-5 h-5" /> Ready Score en tiempo real
                </li>
              </ul>
              <Link href="/registro" className="block w-full py-4 bg-accent text-primary-foreground hover:bg-accent/90 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-accent/20">
                Seleccionar Plan
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-gray-50 dark:bg-background">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-brand-navy dark:text-white">Preguntas Frecuentes</h2>
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
                <div key={i} className="p-8 rounded-3xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:bg-gray-50 dark:hover:bg-white/[0.04] transition-colors shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-brand-orange">{faq.q}</h3>
                  <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-3 opacity-80">
            <div className="logo-mark scale-50 origin-left grayscale"></div>
            <span className="font-bold text-brand-darkgray dark:text-gray-400">COMPECER<sup className="text-[10px]">&reg;</sup> Express</span>
          </div>
          <p className="text-muted-foreground text-sm">© 2026 Compecer Audit. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
