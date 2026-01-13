"use client";

import { motion } from "framer-motion";
import {
    Shield,
    Users,
    LayoutDashboard,
    FileText,
    Settings,
    Plus,
    Mail,
    ShieldCheck,
    UserPlus,
    Search,
    MoreVertical,
    CheckCircle2,
    Clock,
    ArrowLeft,
    GraduationCap,
    Briefcase
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function TeamPage() {
    const team = [
        { name: "Juan José Manso", role: "CISO / Responsable Seguridad", status: "completed", email: "juanjo@example.com", training: "100%", avatar: "JJ" },
        { name: "Ana Martínez", role: "Dirección General", status: "completed", email: "ana@example.com", training: "80%", avatar: "AM" },
        { name: "Carlos Ruiz", role: "Responsable IT", status: "pending", email: "carlos@example.com", training: "45%", avatar: "CR" },
        { name: "Elena Gómez", role: "Recursos Humanos", status: "pending", email: "elena@example.com", training: "0%", avatar: "EG" },
    ];

    const roles = [
        { title: "CISO", desc: "Coordinación del SGSI", icon: ShieldCheck },
        { title: "IT Manager", desc: "Gestión de activos técnicos", icon: Briefcase },
        { title: "Formador", desc: "Concienciación del equipo", icon: GraduationCap },
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
                    <Link href="/equipo" className="flex items-center gap-3 p-3 bg-primary/10 text-primary rounded-xl font-bold transition-all">
                        <Users className="w-5 h-5" /> Equipo
                    </Link>
                    <Link href="/ajustes" className="flex items-center gap-3 p-3 hover:bg-muted text-muted-foreground rounded-xl font-medium transition-all">
                        <Settings className="w-5 h-5" /> Ajustes
                    </Link>
                </nav>

                <div className="mt-auto">
                    <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 space-y-3">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary">Estado Equipo</p>
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[8px] font-bold">U{i}</div>
                            ))}
                        </div>
                        <p className="text-[10px] text-muted-foreground font-medium">2/4 perfiles completados</p>
                    </div>
                    <div className="mt-6">
                        <ModeToggle />
                    </div>
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
                        <h1 className="text-4xl font-black tracking-tighter">Gestión de Equipo</h1>
                        <p className="text-muted-foreground font-medium">Asigna roles de seguridad y cumple con la Cláusula 5.3 y 7.2.</p>
                    </div>
                    <button className="bg-primary text-white font-bold py-4 px-8 rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 text-sm">
                        <UserPlus className="w-5 h-5" /> Invitar Miembro
                    </button>
                </header>

                {/* Roles Quick Access */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {roles.map((role, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card border border-card-border p-6 rounded-3xl flex items-center gap-6 hover:border-primary/30 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <role.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-black text-sm">{role.title}</h3>
                                <p className="text-xs text-muted-foreground font-medium">{role.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Team Table Header */}
                <div className="flex items-center justify-between">
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input type="text" placeholder="Buscar por nombre..." className="w-full bg-muted/30 border border-card-border rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none" />
                    </div>
                    <div className="hidden md:flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        <span>Nombre</span>
                        <span className="w-48 text-center">Rol ISO</span>
                        <span className="w-32 text-center">Formación</span>
                        <span className="w-32 text-right">Estado</span>
                    </div>
                </div>

                {/* Team Members List */}
                <section className="space-y-4">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group bg-card border border-card-border rounded-2xl p-4 md:px-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl hover:shadow-black/5 transition-all text-sm font-medium"
                        >
                            {/* Avatar & Info */}
                            <div className="flex items-center gap-4 flex-1 w-full">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center font-black text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    {member.avatar}
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="font-black">{member.name}</h4>
                                    <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> {member.email}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Role Component */}
                            <div className="w-full md:w-48 text-center">
                                <span className="px-3 py-1 bg-muted rounded-lg border border-card-border text-[10px] font-black uppercase tracking-widest">{member.role}</span>
                            </div>

                            {/* Training Progress */}
                            <div className="w-full md:w-32 space-y-2">
                                <div className="flex justify-between text-[10px] font-black uppercase">
                                    <span>{member.training}</span>
                                </div>
                                <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: member.training }} />
                                </div>
                            </div>

                            {/* Status Badge */}
                            <div className="w-full md:w-32 flex justify-end">
                                {member.status === 'completed' ? (
                                    <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-black uppercase rounded-full border border-green-500/20"><CheckCircle2 className="w-3 h-3" /> Al Día</span>
                                ) : (
                                    <span className="flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-black uppercase rounded-full border border-yellow-500/20"><Clock className="w-3 h-3" /> Faltan Datos</span>
                                )}
                            </div>

                            <button className="p-2 hover:bg-muted rounded-xl">
                                <MoreVertical className="w-4 h-4 text-muted-foreground" />
                            </button>
                        </motion.div>
                    ))}
                </section>

                {/* Education Info Card */}
                <section className="bg-gradient-to-br from-muted/50 to-background border border-card-border rounded-[2.5rem] p-10 flex flex-col lg:flex-row items-center gap-10">
                    <div className="space-y-4 flex-1">
                        <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight">Capacitación y Concienciación (ISO 7.3)</h3>
                        <p className="text-muted-foreground font-medium max-w-xl leading-relaxed">
                            Asegúrate de que todo el equipo ha pasado el curso de concienciación en ciberseguridad. Es un requisito obligatorio para superar la auditoría externa.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 w-full lg:w-auto">
                        <button className="bg-background text-foreground border border-card-border font-black py-4 px-10 rounded-2xl hover:bg-muted transition-all text-sm whitespace-nowrap">Ver Historial Formativo</button>
                        <button className="bg-primary text-white font-black py-4 px-10 rounded-2xl hover:shadow-lg hover:shadow-primary/20 transition-all text-sm whitespace-nowrap text-center">Lanzar Plan Formación</button>
                    </div>
                </section>

            </main>

        </div>
    );
}
