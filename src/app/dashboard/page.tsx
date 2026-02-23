"use client";

import { motion } from "framer-motion";
import {
    Shield,
    CheckCircle2,
    Clock,
    FileText,
    LayoutDashboard,
    Settings,
    Users,
    ChevronRight,
    Zap,
    ArrowUpRight,
    Activity,
    Plus,
    User,
    LogOut
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { AIChatBot } from "@/components/ai-chatbot";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
    };

    const stats = [
        { label: "Progreso Total", value: "35%", icon: Activity, color: "text-blue-500" },
        { label: "Documentos", value: "4/12", icon: FileText, color: "text-primary" },
        { label: "Días Restantes", value: "12", icon: Clock, color: "text-orange-500" },
    ];

    const steps = [
        { title: "Contexto y Alcance", status: "completed", date: "Completado" },
        { title: "Liderazgo y Política", status: "in-progress", date: "En curso" },
        { title: "Riesgos y Objetivos", status: "pending", date: "Pendiente" },
        { title: "Gestión de Activos", status: "pending", date: "Pendiente" },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row overflow-hidden">

            {/* Sidebar Desktop */}
            <aside className="hidden lg:flex w-64 border-r border-card-border p-6 flex-col gap-8 bg-muted/5">
                <div className="flex items-center gap-2 px-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Shield className="text-white w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">Compecer <span className="text-primary italic text-base">EX</span></span>
                </div>

                <nav className="flex-1 space-y-1">
                    <Link href="/dashboard" className="flex items-center gap-3 p-3 bg-primary/10 text-primary rounded-xl font-bold transition-all">
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
                    <Link href="/ajustes" className="flex items-center gap-3 p-3 hover:bg-muted text-muted-foreground rounded-xl font-medium transition-all">
                        <Settings className="w-5 h-5" /> Ajustes
                    </Link>
                    <Link href="/perfil" className="flex items-center gap-3 p-3 hover:bg-muted text-muted-foreground rounded-xl font-medium transition-all">
                        <User className="w-5 h-5" /> Perfil
                    </Link>
                </nav>

                <div className="mt-auto space-y-4">
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 p-3 hover:bg-red-500/10 text-red-500 rounded-xl font-medium transition-all">
                        <LogOut className="w-5 h-5" /> Cerrar Sesión
                    </button>
                    <ModeToggle />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12 space-y-10">

                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight">¡Hola de nuevo! ✨</h1>
                        <p className="text-muted-foreground font-medium">Aquí tienes un resumen de tu certificación ISO 27001.</p>
                    </div>
                    <Link href="/auditoria" className="bg-primary text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 text-sm">
                        <Plus className="w-4 h-4" /> Continuar Auditoría
                    </Link>
                </header>

                {/* Stats Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card border border-card-border p-6 rounded-3xl shadow-sm space-y-4"
                        >
                            <div className="flex items-center justify-between">
                                <div className={`p-3 rounded-2xl bg-muted/50 ${s.color}`}>
                                    <s.icon className="w-6 h-6" />
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
                                <h3 className="text-3xl font-black mt-1">{s.value}</h3>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Two Columns Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Progress Timeline */}
                    <section className="lg:col-span-8 bg-card border border-card-border rounded-3xl p-8 space-y-8">
                        <div className="flex items-center justify-between px-2">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <ListCheck className="w-5 h-5 text-primary" /> Hoja de Ruta Actual
                            </h3>
                            <Link href="/auditoria" className="text-xs font-bold text-primary hover:underline">Ver todo</Link>
                        </div>

                        <div className="space-y-4">
                            {steps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${step.status === 'completed' ? 'bg-green-500/5 border-green-500/10' :
                                        step.status === 'in-progress' ? 'bg-primary/5 border-primary/10 border-2' :
                                            'bg-muted/10 border-card-border opacity-60'
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${step.status === 'completed' ? 'bg-green-500 text-white' :
                                        step.status === 'in-progress' ? 'bg-primary text-white animate-pulse' :
                                            'bg-muted text-muted-foreground'
                                        }`}>
                                        {step.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm">{step.title}</h4>
                                        <p className="text-[10px] font-medium opacity-60 uppercase tracking-widest">{step.date}</p>
                                    </div>
                                    {step.status === 'in-progress' && (
                                        <ChevronRight className="w-5 h-5 text-primary" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Right Sidebar Info */}
                    <aside className="lg:col-span-4 space-y-6">
                        <div className="bg-primary text-white p-6 rounded-3xl shadow-xl shadow-primary/20 space-y-4 relative overflow-hidden group">
                            <Zap className="w-10 h-10 opacity-30 absolute -right-2 -top-2 group-hover:scale-125 transition-transform" />
                            <h3 className="font-bold text-lg">Próximo Hito</h3>
                            <p className="text-sm opacity-90 leading-relaxed font-medium">Completa la **Política de Seguridad** para desbloquear la fase de controles técnicos.</p>
                            <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden mt-4">
                                <div className="h-full bg-white w-1/2" />
                            </div>
                        </div>

                        <div className="bg-muted/30 border border-card-border p-6 rounded-3xl space-y-4">
                            <h3 className="font-bold text-sm tracking-widest uppercase opacity-40">Ayuda Rápida</h3>
                            <div className="space-y-4">
                                <p className="text-xs text-muted-foreground leading-relaxed font-medium">¿Dudas con la nueva estructura? Usa nuestro chat flotante abajo a la derecha.</p>
                            </div>
                        </div>
                    </aside>

                </div>

            </main>

            <AIChatBot />
        </div>
    );
}

// Simple Icon fallback since I used ListCheck
function ListCheck({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 17 2 2 4-4" /><path d="m3 7 2 2 4-4" /><path d="M13 6h8" /><path d="M13 12h8" /><path d="M13 18h8" /></svg>
    )
}
