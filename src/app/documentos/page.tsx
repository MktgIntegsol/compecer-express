"use client";

import { motion } from "framer-motion";
import {
    Shield,
    FileText,
    LayoutDashboard,
    Settings,
    Users,
    Download,
    Search,
    Filter,
    CheckCircle2,
    AlertCircle,
    Clock,
    ExternalLink,
    ChevronRight,
    Plus,
    ArrowLeft,
    Zap
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function DocumentsPage() {
    const documents = [
        { title: "Definición del Alcance del SGSI", clause: "Cláusula 4.3", format: "PDF", status: "completed", date: "Hace 2 días" },
        { title: "Política de Seguridad de la Información", clause: "Cláusula 5.2", format: "IA Draft", status: "ai-generated", date: "Recién generado" },
        { title: "Metodología de Evaluación de Riesgos", clause: "Cláusula 6.1.2", format: "DOCX", status: "completed", date: "Hace 1 semana" },
        { title: "Inventario de Activos de Información", clause: "Cláusula 7.1.3", format: "Excel", status: "pending", date: "Pendiente" },
        { title: "Plan de Continuidad de Negocio", clause: "Anexo A.5.30", format: "Draft", status: "pending", date: "Pendiente" },
        { title: "Procedimiento de Copias de Seguridad", clause: "Anexo A.8.13", format: "IA Draft", status: "ai-generated", date: "Ayer" },
    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'completed':
                return <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-black uppercase rounded-full border border-green-500/20"><CheckCircle2 className="w-3 h-3" /> Auditado</span>;
            case 'ai-generated':
                return <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase rounded-full border border-primary/20"><FileText className="w-3 h-3" /> IA Borrador</span>;
            default:
                return <span className="flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-black uppercase rounded-full border border-yellow-500/20"><Clock className="w-3 h-3" /> Pendiente</span>;
        }
    };

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
                    <Link href="/documentos" className="flex items-center gap-3 p-3 bg-primary/10 text-primary rounded-xl font-bold transition-all">
                        <FileText className="w-5 h-5" /> Documentos
                    </Link>
                    <Link href="/equipo" className="flex items-center gap-3 p-3 hover:bg-muted text-muted-foreground rounded-xl font-medium transition-all">
                        <Users className="w-5 h-5" /> Equipo
                    </Link>
                    <Link href="/ajustes" className="flex items-center gap-3 p-3 hover:bg-muted text-muted-foreground rounded-xl font-medium transition-all">
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
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-1">
                        <Link href="/dashboard" className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest mb-4">
                            <ArrowLeft className="w-3 h-3" /> Volver al Panel
                        </Link>
                        <h1 className="text-4xl font-black tracking-tighter">Centro Documental ISO</h1>
                        <p className="text-muted-foreground font-medium">Gestiona tu mochila de evidencias para la certificación.</p>
                    </div>
                    <Link href="/auditoria" className="bg-primary text-white font-bold py-4 px-8 rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 text-sm">
                        <Plus className="w-5 h-5" /> Subir Nueva Evidencia
                    </Link>
                </header>

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Buscar documento o cláusula..."
                            className="w-full bg-muted/30 border border-card-border rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                        />
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 p-3 bg-muted border border-card-border rounded-xl text-xs font-bold hover:bg-card-border transition-all">
                            <Filter className="w-4 h-4" /> Filtrar
                        </button>
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 p-3 bg-muted border border-card-border rounded-xl text-xs font-bold hover:bg-card-border transition-all text-primary">
                            Descargar Todo (.ZIP)
                        </button>
                    </div>
                </div>

                {/* Documents Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {documents.map((doc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group bg-card border border-card-border rounded-3xl p-6 hover:shadow-2xl hover:shadow-black/5 transition-all space-y-6 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/10 transition-colors" />

                            <div className="flex items-center justify-between relative">
                                <div className={`p-3 rounded-2xl bg-muted/50 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all`}>
                                    <FileText className="w-6 h-6" />
                                </div>
                                <button className="p-2 hover:bg-muted rounded-xl transition-colors">
                                    <Download className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                                </button>
                            </div>

                            <div className="space-y-2 relative">
                                <span className="text-[10px] font-black text-primary uppercase tracking-widest">{doc.clause}</span>
                                <h3 className="text-xl font-black leading-tight group-hover:text-primary transition-colors">{doc.title}</h3>
                                <p className="text-xs text-muted-foreground font-medium flex items-center gap-2">
                                    {doc.format} • Actualizado {doc.date}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-card-border flex items-center justify-between relative">
                                {getStatusBadge(doc.status)}
                                <button className="text-[10px] font-black uppercase text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group/btn">
                                    Ver más <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Info Card */}
                <section className="bg-primary/5 border border-primary/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="w-20 h-20 bg-primary/20 rounded-[2rem] flex items-center justify-center shrink-0">
                        <Zap className="w-10 h-10 text-primary" />
                    </div>
                    <div className="space-y-3 text-center md:text-left">
                        <h3 className="text-2xl font-black tracking-tight">¿Te falta algún documento clave?</h3>
                        <p className="text-muted-foreground font-medium max-w-2xl leading-relaxed">
                            Nuestro motor de IA puede ayudarte a redactar borradores de cumplimiento para cualquier cláusula de la ISO 27001:2022 en segundos.
                        </p>
                    </div>
                    <Link href="/auditoria" className="bg-background text-foreground border border-card-border font-black py-4 px-10 rounded-2xl hover:bg-muted transition-all whitespace-nowrap shadow-xl">
                        Ir a Generar con IA
                    </Link>
                </section>

            </main>

        </div>
    );
}
