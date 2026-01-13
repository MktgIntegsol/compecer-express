"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight, Mail, Lock, User, Building2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [role, setRole] = useState<"empresa" | "consultor">("empresa");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                    role: role,
                },
            },
        });

        if (signUpError) {
            setError(signUpError.message);
            setLoading(false);
        } else {
            router.push("/dashboard");
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center px-6 py-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <Link href="/" className="flex items-center gap-2 mb-12 relative z-10 group">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">Compecer <span className="text-primary">Express</span></span>
            </Link>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md glass p-8 rounded-3xl relative z-10"
            >
                <h1 className="text-3xl font-bold mb-2 text-center">Crea tu cuenta</h1>
                <p className="text-muted-foreground text-center mb-8">Comienza tu camino a la certificación ISO 27001</p>

                <div className="flex p-1 bg-white/[0.03] rounded-2xl mb-8">
                    <button
                        type="button"
                        onClick={() => setRole("empresa")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${role === "empresa" ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:text-white"}`}
                    >
                        <Building2 className="w-4 h-4" /> Soy Empresa
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole("consultor")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${role === "consultor" ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:text-white"}`}
                    >
                        <User className="w-4 h-4" /> Soy Consultor
                    </button>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    {error && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-2xl mb-4">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground ml-1">Nombre Completo</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                type="text"
                                required
                                placeholder="Juan Pérez"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground ml-1">Correo Electrónico</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                required
                                placeholder="juan@empresa.com"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground ml-1">Contraseña</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                required
                                placeholder="••••••••"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                        </div>
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl mt-4 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:transform-none"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Registrarme ahora <ArrowRight className="w-5 h-5" /></>}
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-muted-foreground">
                    ¿Ya tienes cuenta? <Link href="/login" className="text-primary hover:underline font-medium">Inicia sesión</Link>
                </p>
            </motion.div>

            <p className="mt-12 text-xs text-muted-foreground/50 max-w-xs text-center">
                Al registrarte, aceptas nuestros Términos de Servicio y la Política de Privacidad.
            </p>
        </div>
    );
}
