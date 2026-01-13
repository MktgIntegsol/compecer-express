"use client";

import { motion } from "framer-motion";
import {
    Shield,
    Settings,
    LayoutDashboard,
    FileText,
    Users,
    Building2,
    CreditCard,
    Bell,
    Globe,
    Lock,
    ArrowLeft,
    ChevronRight,
    Save,
    Zap,
    Download,
    RefreshCw,
    ExternalLink
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile");

    const tabs = [
        { id: "profile", label: "Perfil Empresa", icon: Building2 },
        { id: "billing", label: "Suscripción", icon: CreditCard },
        { id: "notifications", label: "Notificaciones", icon: Bell },
        { id: "security", label: "Seguridad", icon: Lock },
        { id: "integrations", label: "Integraciones", icon: RefreshCw },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row overflow-hidden">

            {/* Sidebar Desktop */}
            <aside className="hidden lg:flex w-64 border-r border-card-border p-6 flex-col gap-8 bg-muted/5">
                <Link href="/dashboard" className="flex items-center gap-2 px-2 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Shield className="text-white w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">Compecer <span className="text-primary italic text-base">EX</span></span>
                </Link>

                <nav className="flex-1 space-y-1">
                    <Link href="/dashboard" className="flex items-center gap-3 p-3 hover:bg-muted text-muted-foreground rounded-xl font-medium transition-all">
                        <LayoutDashboard className="w-5 h-5" /> Dashboard
                    </Link>
                    <Link href="/auditoria" className="flex items-center gap-3 p-3 hover:bg-muted text-muted-foreground rounded-xl font-medium transition-all">
                        <Shield className="w-5 h-5" /> Auditoría IA
                    </Link>
                    <Link href="/documentos" className="flex items-center gap-3 p-3 hover:bg-muted text-muted-foreground rounded-xl font-medium transition-all">
                        <FileText className="w-5 h-5" /> Documentos
                    </Link>
                    <Link href="/equipo" className="flex items-center gap-3 p-3 hover:bg-muted text-muted-foreground rounded-xl font-medium transition-all">
                        <Users className="w-5 h-5" /> Equipo
                    </Link>
                    <Link href="/ajustes" className="flex items-center gap-3 p-3 bg-primary/10 text-primary rounded-xl font-bold transition-all">
                        <Settings className="w-5 h-5" /> Ajustes
                    </Link>
                </nav>

                <div className="mt-auto">
                    <ModeToggle />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12 space-y-10">

                {/* Header */}
                <header className="space-y-4">
                    <Link href="/dashboard" className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
                        <ArrowLeft className="w-3 h-3" /> Volver al Panel
                    </Link>
                    <h1 className="text-4xl font-black tracking-tighter">Ajustes del Sistema</h1>
                    <p className="text-muted-foreground font-medium">Configura tu perfil de cumplimiento y gestiona tu cuenta.</p>
                </header>

                {/* Settings Tabs */}
                <div className="flex border-b border-card-border overflow-x-auto no-scrollbar">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-all text-sm font-bold whitespace-nowrap ${activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="max-w-4xl space-y-10">
                    {activeTab === "profile" && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Nombre de la Empresa</label>
                                    <input type="text" defaultValue="Manso Tech Solutions" className="w-full bg-muted/30 border border-card-border rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all font-bold" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">CIF / NIF</label>
                                    <input type="text" defaultValue="B-12345678" className="w-full bg-muted/30 border border-card-border rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all font-bold" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Sector de Actividad</label>
                                    <select className="w-full bg-muted/30 border border-card-border rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all font-bold appearance-none">
                                        <option>Desarrollo de Software</option>
                                        <option>Servicios Financieros</option>
                                        <option>Suministros Industriales</option>
                                        <option>Consultoría</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Idioma del SGSI</label>
                                    <select className="w-full bg-muted/30 border border-card-border rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all font-bold appearance-none">
                                        <option>Español (España)</option>
                                        <option>Inglés (UK)</option>
                                    </select>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Descripción de la Actividad (Contexto 4.1)</label>
                                <textarea rows={4} className="w-full bg-muted/30 border border-card-border rounded-2xl p-6 focus:ring-2 focus:ring-primary outline-none transition-all font-medium leading-relaxed" defaultValue="Manso Tech se dedica al desarrollo de soluciones SaaS para la optimización de procesos logísticos en Europa..." />
                            </section>

                            <button className="bg-primary text-white font-black py-4 px-10 rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                                <Save className="w-5 h-5" /> Guardar Cambios
                            </button>
                        </motion.div>
                    )}

                    {activeTab === "billing" && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-accent text-white shadow-2xl relative overflow-hidden group">
                                <Zap className="absolute -right-4 -top-4 w-32 h-32 opacity-20 group-hover:scale-110 transition-transform" />
                                <div className="space-y-6 relative">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Plan Actual</span>
                                            <h3 className="text-3xl font-black">Certificación Express VIP</h3>
                                        </div>
                                        <span className="px-4 py-2 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md">Activo</span>
                                    </div>
                                    <div className="flex items-end gap-2">
                                        <span className="text-5xl font-black">990€</span>
                                        <span className="text-sm font-bold opacity-80 mb-2">/ pago único</span>
                                    </div>
                                    <p className="text-sm font-medium opacity-90 max-w-sm">Acceso ilimitado al auditor IA, generación de documentos y soporte para certificación 2022.</p>
                                </div>
                            </div>

                            <div className="bg-card border border-card-border rounded-3xl p-8 space-y-6">
                                <h3 className="font-bold text-lg flex items-center gap-3"><FileText className="w-5 h-5 text-primary" /> Historial de Facturación</h3>
                                <div className="space-y-4">
                                    {[1].map(i => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-muted rounded-2xl border border-card-border/50">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center font-bold text-xs"><Download className="w-4 h-4" /></div>
                                                <div>
                                                    <p className="font-bold text-sm">Factura #INV-2026-001</p>
                                                    <p className="text-[10px] text-muted-foreground font-medium uppercase">12 de Enero, 2026</p>
                                                </div>
                                            </div>
                                            <span className="font-black text-sm">990,00€</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "integrations" && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-[2rem] bg-muted/30 border border-card-border space-y-4">
                                    <div className="flex justify-between items-center text-red-500">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center font-bold text-lg">O</div>
                                            <h3 className="font-bold">OneSoft CRM</h3>
                                        </div>
                                        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                                    </div>
                                    <p className="text-xs text-muted-foreground font-medium">Sincronización automática de certificados y auditorías con Odoo/OneSoft.</p>
                                    <button className="w-full py-3 bg-red-500/10 text-red-500 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">Configurar Webhook</button>
                                </div>
                                <div className="p-6 rounded-[2rem] bg-muted/30 border border-card-border space-y-4 opacity-50 grayscale">
                                    <div className="flex justify-between items-center text-primary">
                                        <div className="flex items-center gap-3 text-blue-500">
                                            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center font-bold italic text-lg">M</div>
                                            <h3 className="font-bold">Make / Integromat</h3>
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground font-medium">Automatiza el flujo de subida de evidencias desde Slack o Drive.</p>
                                    <button disabled className="w-full py-3 bg-muted border border-card-border rounded-xl text-xs font-black uppercase tracking-widest cursor-not-allowed">Próximamente</button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

            </main>

        </div>
    );
}
