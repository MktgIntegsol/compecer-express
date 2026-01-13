"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Shield,
    ChevronRight,
    ChevronLeft,
    Upload,
    FileText,
    CheckCircle2,
    AlertCircle,
    Loader2,
    MessageSquare,
    Sparkles,
    HelpCircle,
    Image as ImageIcon,
    Building2,
    Globe,
    Cpu,
    Mic,
    Send,
    ListCheck,
    Settings,
    Users,
    Zap,
    Wand2,
    Download,
    X,
    Menu
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { LayoutDashboard } from "lucide-react";

interface Question {
    id: string;
    title: string;
    simpleTitle: string;
    description: string;
    why: string;
    control: string;
    isVisual?: boolean;
    type: "form" | "upload";
}

const auditQuestions: Question[] = [
    { id: "context-form", type: "form", title: "Perfil Organizacional", simpleTitle: "Inicio", description: "Configuración inicial de la auditoría.", why: "Personalizamos la norma según tu sector.", control: "Configuración" },
    { id: "4.0", type: "upload", title: "Contexto", simpleTitle: "Alcance", description: "Define el alcance del SGSI.", why: "Es el cimiento de la ISO.", control: "Cláusula 4" },
    { id: "5.2", type: "upload", title: "Política", simpleTitle: "Seguridad", description: "Política firmada por dirección.", why: "Compromiso estratégico.", control: "Cláusula 5.2" },
    { id: "6.1", type: "upload", title: "Riesgos", simpleTitle: "Riesgos", description: "Matriz de identificación de riesgos.", why: "Base de la norma.", control: "Cláusula 6.1" },
    { id: "A.8", type: "upload", title: "Tecnología", simpleTitle: "IT", description: "Controles tecnológicos.", why: "Seguridad técnica.", control: "Anexo A.8", isVisual: true }
];

export default function QuestionnairePage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [inputMode, setInputMode] = useState<"upload" | "text" | "generate">("upload");
    const [evidence, setEvidence] = useState<File | null>(null);
    const [writtenText, setWrittenText] = useState("");
    const [validating, setValidating] = useState(false);
    const [generating, setGenerating] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [status, setStatus] = useState<"pending" | "success" | "warning">("pending");
    const [formData, setFormData] = useState({ companyName: "", sector: "", culture: "", techStack: "" });
    const [showSidebar, setShowSidebar] = useState(false);

    // Dynamic Form State
    const [dynamicQuestions, setDynamicQuestions] = useState<string[]>([]);
    const [dynamicResponses, setDynamicResponses] = useState<Record<string, string>>({});
    const [generatedDraft, setGeneratedDraft] = useState<string | null>(null);

    const question = auditQuestions[currentStep];

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setEvidence(e.target.files[0]);
            setFeedback(null);
        }
    };

    const startGenerationFlow = async () => {
        setGenerating(true);
        setInputMode("generate");
        try {
            const response = await fetch('/api/preguntas-dinamicas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ questionId: question.id, questionTitle: question.title, questionDesc: question.description, companyInfo: formData }),
            });
            const data = await response.json();
            setDynamicQuestions(Object.values(data));
        } catch (err) {
            console.error(err);
        } finally {
            setGenerating(false);
        }
    };

    const generateDocument = async () => {
        setGenerating(true);
        try {
            const response = await fetch('/api/generar-documento', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ questionId: question.id, questionTitle: question.title, companyInfo: formData, userResponses: dynamicResponses }),
            });
            const data = await response.json();
            setGeneratedDraft(data.draft);
        } catch (err) {
            console.error(err);
        } finally {
            setGenerating(false);
        }
    };

    const validateWithAI = async () => {
        setValidating(true);
        setFeedback(null);
        try {
            const body = new FormData();
            if (evidence) body.append('file', evidence);
            body.append('text', writtenText);
            body.append('questionId', question.id);
            body.append('questionTitle', question.title);
            body.append('questionDesc', question.description);
            body.append('companyInfo', JSON.stringify(formData));

            const response = await fetch('/api/validar-ia', { method: 'POST', body: body });
            const result = await response.json();
            setFeedback(result.feedback);
            setStatus(result.valid ? "success" : "warning");
        } catch (err) {
            setFeedback("Error de conexión.");
            setStatus("warning");
        } finally {
            setValidating(false);
        }
    };

    return (
        <div className="flex h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20">

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-card-border p-4 flex items-center justify-between">
                <button onClick={() => setShowSidebar(!showSidebar)} className="p-2 bg-muted rounded-lg">
                    <Menu className="w-6 h-6" />
                </button>
                <span className="font-bold text-sm">Audit Studio</span>
                <ModeToggle />
            </div>

            {/* Sidebar Overlay for Mobile */}
            <AnimatePresence>
                {showSidebar && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowSidebar(false)}
                        className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Navigation */}
            <aside className={`fixed lg:relative z-50 h-full w-[280px] border-r border-card-border bg-muted/5 p-6 flex flex-col transition-transform duration-300 lg:translate-x-0 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                <Link href="/dashboard" className="mb-8 flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Shield className="text-white w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">Compecer <span className="text-primary italic">Ex</span></span>
                </Link>

                <nav className="flex-1 space-y-1 overflow-y-auto">
                    <Link href="/dashboard" className="w-full flex items-center gap-3 p-3 mb-2 hover:bg-muted text-muted-foreground rounded-xl font-bold transition-all border border-card-border/50">
                        <LayoutDashboard className="w-5 h-5 text-primary" /> Dashboard
                    </Link>
                    <Link href="/documentos" className="w-full flex items-center gap-3 p-3 mb-4 hover:bg-muted text-muted-foreground rounded-xl font-bold transition-all border border-card-border/50">
                        <FileText className="w-5 h-5 text-primary" /> Documentos
                    </Link>
                    <Link href="/equipo" className="w-full flex items-center gap-3 p-3 mb-4 hover:bg-muted text-muted-foreground rounded-xl font-bold transition-all border border-card-border/50">
                        <Users className="w-5 h-5 text-primary" /> Equipo
                    </Link>
                    <div className="h-px bg-card-border mb-4 opacity-50" />
                    {auditQuestions.map((q, idx) => (
                        <button
                            key={q.id}
                            onClick={() => { setCurrentStep(idx); setShowSidebar(false); setFeedback(null); setEvidence(null); setGeneratedDraft(null); setInputMode("upload"); }}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${idx === currentStep ? 'bg-primary text-white shadow-md' : 'hover:bg-muted text-muted-foreground'}`}
                        >
                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold border ${idx === currentStep ? 'bg-white/20 border-white/20' : idx < currentStep ? 'bg-green-500 text-white border-green-500' : 'bg-muted border-card-border'}`}>
                                {idx < currentStep ? <CheckCircle2 className="w-3.5 h-3.5" /> : idx + 1}
                            </div>
                            <span className="text-sm font-semibold truncate">{q.simpleTitle}</span>
                        </button>
                    ))}
                </nav>

                <div className="mt-8 p-4 rounded-2xl bg-muted/30 border border-card-border">
                    <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
                        <span>Progreso</span>
                        <span>{Math.round((currentStep / auditQuestions.length) * 100)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div animate={{ width: `${(currentStep / auditQuestions.length) * 100}%` }} className="h-full bg-primary" />
                    </div>
                </div>

                <div className="mt-auto space-y-4">
                    <Link href="/ajustes" className="w-full flex items-center gap-3 p-3 hover:bg-muted text-muted-foreground rounded-xl font-bold transition-all border border-card-border/50">
                        <Settings className="w-5 h-5 text-primary" /> Ajustes
                    </Link>
                    <div className="mt-4">
                        <ModeToggle />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto w-full pt-20 lg:pt-0">
                <div className="max-w-4xl mx-auto p-6 md:p-12 lg:p-16 space-y-8">

                    <AnimatePresence mode="wait">
                        <motion.div key={question.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">

                            {/* Header */}
                            <div className="space-y-2">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{question.control}</span>
                                <h1 className="text-3xl md:text-5xl font-black tracking-tight">{question.title}</h1>
                                <p className="text-lg text-muted-foreground font-medium">{question.description}</p>
                            </div>

                            {/* Interaction Area */}
                            <div className="bg-card border border-card-border rounded-3xl overflow-hidden shadow-sm">

                                {question.type === "form" ? (
                                    <div className="p-6 md:p-10 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-muted-foreground flex items-center gap-2"><Building2 className="w-3.5 h-3.5" /> Empresa</label>
                                                <input value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} className="w-full bg-muted/30 border border-card-border rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Nombre Fiscal" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-muted-foreground flex items-center gap-2"><Globe className="w-3.5 h-3.5" /> Sector</label>
                                                <input value={formData.sector} onChange={(e) => setFormData({ ...formData, sector: e.target.value })} className="w-full bg-muted/30 border border-card-border rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Sector" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-muted-foreground flex items-center gap-2"><Cpu className="w-3.5 h-3.5" /> Tecnología</label>
                                            <input value={formData.techStack} onChange={(e) => setFormData({ ...formData, techStack: e.target.value })} className="w-full bg-muted/30 border border-card-border rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Ej. AWS, SAP..." />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-6 md:p-10 min-h-[300px] flex flex-col items-center justify-center">

                                        {inputMode === "upload" ? (
                                            evidence ? (
                                                <div className="text-center w-full max-w-sm space-y-6">
                                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                                                        {question.isVisual ? <ImageIcon className="text-primary w-8 h-8" /> : <FileText className="text-primary w-8 h-8" />}
                                                    </div>
                                                    <h3 className="font-bold">{evidence.name}</h3>
                                                    {!feedback && (
                                                        <button onClick={validateWithAI} disabled={validating} className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
                                                            {validating ? <Loader2 className="w-4 h-4 animate-spin" /> : "Validar Evidencia"}
                                                        </button>
                                                    )}
                                                    <button onClick={() => setEvidence(null)} className="text-xs text-muted-foreground hover:text-primary transition-colors">Elegir otro archivo</button>
                                                </div>
                                            ) : (
                                                <div className="w-full max-w-sm flex flex-col gap-6">
                                                    <label className="w-full p-8 border-2 border-dashed border-card-border hover:border-primary/50 rounded-2xl flex flex-col items-center gap-4 cursor-pointer transition-all bg-muted/5">
                                                        <Upload className="w-8 h-8 text-muted-foreground" />
                                                        <span className="font-bold text-sm">Subir Documentación</span>
                                                        <input type="file" className="hidden" onChange={handleFileUpload} />
                                                    </label>
                                                    <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground px-4">
                                                        <div className="h-px bg-card-border flex-1" /> O <div className="h-px bg-card-border flex-1" />
                                                    </div>
                                                    <button onClick={startGenerationFlow} className="w-full bg-muted hover:bg-card-border border border-card-border font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                                                        <Wand2 className="w-4 h-4 text-primary" /> No lo tengo, ayúdame
                                                    </button>
                                                </div>
                                            )
                                        ) : inputMode === "generate" ? (
                                            <div className="w-full max-w-lg space-y-6">
                                                {generating ? (
                                                    <div className="text-center py-10 space-y-4">
                                                        <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
                                                        <p className="font-bold animate-pulse">Diseñando tu política...</p>
                                                    </div>
                                                ) : generatedDraft ? (
                                                    <div className="space-y-6">
                                                        <div className="flex items-center justify-between">
                                                            <h3 className="font-bold">Borrador de Política</h3>
                                                            <button onClick={() => setGeneratedDraft(null)} className="p-2 hover:bg-muted rounded-lg"><X className="w-4 h-4" /></button>
                                                        </div>
                                                        <div className="bg-muted/30 border border-card-border p-6 rounded-2xl h-64 overflow-y-auto text-sm font-mono leading-relaxed whitespace-pre-wrap">
                                                            {generatedDraft}
                                                        </div>
                                                        <div className="flex gap-4">
                                                            <button className="flex-1 bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"><Download className="w-4 h-4" /> Bajar PDF</button>
                                                            <button onClick={() => setInputMode("upload")} className="flex-1 bg-muted font-bold py-4 rounded-xl border border-card-border">Volver</button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="space-y-6">
                                                        <div className="text-center space-y-2">
                                                            <p className="text-sm text-muted-foreground">Responde estas preguntas rápidas para generar el documento:</p>
                                                        </div>
                                                        {dynamicQuestions.map((q, idx) => (
                                                            <div key={idx} className="space-y-2">
                                                                <label className="text-[10px] font-bold text-muted-foreground uppercase">{q}</label>
                                                                <input onChange={(e) => setDynamicResponses({ ...dynamicResponses, [idx]: e.target.value })} className="w-full bg-muted/30 border border-card-border rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none" />
                                                            </div>
                                                        ))}
                                                        <button onClick={generateDocument} className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20">Generar Documento Propio</button>
                                                    </div>
                                                )}
                                            </div>
                                        ) : null}
                                    </div>
                                )}
                            </div>

                            {/* Feedback Area */}
                            {feedback && (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={`p-6 rounded-3xl border ${status === 'success' ? 'bg-green-500/5 border-green-500/20 text-green-700 dark:text-green-400' : 'bg-yellow-500/5 border-yellow-500/20 text-yellow-700 dark:text-yellow-400'}`}>
                                    <div className="flex gap-4 items-start">
                                        <div className={`p-3 rounded-xl mt-1 ${status === 'success' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>
                                            {status === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{status === 'success' ? 'Completado' : 'Aviso del Auditor'}</h4>
                                            <p className="text-sm font-medium leading-relaxed">{feedback}</p>
                                            {status === 'success' && (
                                                <button onClick={() => (currentStep < auditQuestions.length - 1) && setCurrentStep(currentStep + 1)} className="mt-4 flex items-center gap-2 text-sm font-bold text-primary group">
                                                    Siguiente Paso <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Why Help Section */}
                            <div className="p-8 rounded-3xl bg-muted/10 border border-card-border relative overflow-hidden group">
                                <Sparkles className="absolute -right-4 -top-4 w-24 h-24 text-primary/10 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold flex items-center gap-2 mb-2 text-primary">
                                    <HelpCircle className="w-4 h-4" /> Guía Didáctica
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed italic">
                                    "{question.why}"
                                </p>
                            </div>

                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom Nav for Mobile */}
                    <div className="flex gap-4 pt-8 border-t border-card-border lg:hidden">
                        <button onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)} disabled={currentStep === 0} className="flex-1 bg-muted font-bold py-4 rounded-xl disabled:opacity-30">Atrás</button>
                        <button onClick={() => currentStep < auditQuestions.length - 1 && setCurrentStep(currentStep + 1)} className="flex-[2] bg-primary text-white font-bold py-4 rounded-xl">Siguiente</button>
                    </div>

                </div>
            </main>

            {/* Desk Sidebar Help - Hidden on mobile */}
            <aside className="hidden xl:flex w-[320px] border-l border-card-border bg-muted/5 p-8 flex-col gap-8 sticky top-0 h-screen overflow-y-auto">
                <div className="p-6 rounded-3xl bg-primary text-white shadow-xl shadow-primary/20 space-y-4">
                    <Zap className="w-8 h-8 opacity-80" />
                    <h3 className="font-bold text-lg">Certificación Express</h3>
                    <p className="text-xs opacity-90 leading-relaxed font-medium">Nuestro motor IA ha sido entrenado con los documentos oficiales de tu Drive para guiarte paso a paso.</p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-3 text-primary">
                        <Users className="w-4 h-4" />
                        <h3 className="text-[10px] font-black uppercase tracking-widest">Consejo de Usuario</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">Si no tienes el documento, usa el generador. Basándonos en tu sector, te daremos una plantilla lista para adaptar.</p>
                </div>

                <button className="mt-auto w-full bg-muted border border-card-border p-4 rounded-xl text-xs font-bold hover:bg-card-border transition-all">Soporte por WhatsApp</button>
            </aside>

        </div>
    );
}
