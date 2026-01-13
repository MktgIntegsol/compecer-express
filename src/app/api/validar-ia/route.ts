import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const getOpenAI = () => new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Mapeo de la base de conocimientos extraída de la NUEVA estructura del Drive
 * Alineado exactamente con la organización de carpetas del usuario.
 */
const ISO_2022_KNOWLEDGE_BASE: Record<string, any> = {
    "4.0": {
        "title": "Contexto de la organización",
        "requirements": "Identificación de factores internos/externos, alcance del SGSI (Alcance del SGSI.pdf), partes interesadas (Matriz de partes interesadas.pdf) y Declaración de Aplicabilidad (SoA 1.0.xlsx)."
    },
    "5.0": {
        "title": "Liderazgo",
        "requirements": "Compromiso de la dirección, Política de Seguridad (Política de seguridad de la información.pdf), roles y responsabilidades (Descripción de puesto.xlsx, Organigrama.pdf)."
    },
    "6.0": {
        "title": "Planificación",
        "requirements": "Gestión de riesgos y oportunidades (Matriz de identificación de riesgos y oportunidades.xlsx), objetivos de seguridad (Objetivos de la seguridad de la información.pdf)."
    },
    "7.0": {
        "title": "Apoyo",
        "requirements": "Recursos, competencia (Matriz de competencias.xlsx) y concienciación. Inventario de activos (Inventario de activos.xlsx)."
    },
    "8.0": {
        "title": "Operación",
        "requirements": "Planificación operativa y control de riesgos (Procedimiento de evaluación de riesgos.pdf, Plan de tratamiento de riesgos.pdf)."
    },
    "9.0": {
        "title": "Evaluación del desempeño",
        "requirements": "Seguimiento, auditoría interna (Lista de verificación de auditoría.pdf) y revisión por dirección (Formato de revisión por la dirección.pdf)."
    },
    "10.0": {
        "title": "Mejora",
        "requirements": "No conformidades y acciones correctivas (Manual de acciones correctivas.pdf, Registro de no conformidades.xlsx)."
    },
    "A.5": {
        "title": "Controles Organizacionales",
        "requirements": "Políticas de seguridad, relaciones con proveedores, gestión de incidentes."
    },
    "A.6": {
        "title": "Controles de Personal",
        "requirements": "Seguridad en RRHH, teletrabajo, dispositivos móviles."
    },
    "A.7": {
        "title": "Controles Físicos",
        "requirements": "Seguridad perimetral, áreas de trabajo, seguridad de equipos."
    },
    "A.8": {
        "title": "Controles Tecnológicos",
        "requirements": "Copiase de seguridad (A.8.13), protección contra malware (A.8.7), gestión de vulnerabilidades (A.8.8)."
    }
};

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const text = formData.get('text') as string;
        const questionId = formData.get('questionId') as string;
        const questionTitle = formData.get('questionTitle') as string;
        const questionDesc = formData.get('questionDesc') as string;
        const companyInfo = JSON.parse(formData.get('companyInfo') as string || '{}');

        if (!file && !text) {
            return NextResponse.json({ error: 'No se ha proporcionado evidencia' }, { status: 400 });
        }

        // Buscar contexto normativo en la base de datos de la nueva estructura
        const categoryKey = questionId.split('.')[0]; // Simplificación para demo
        const normContext = ISO_2022_KNOWLEDGE_BASE[questionId] || ISO_2022_KNOWLEDGE_BASE[categoryKey] || {};

        const systemPrompt = `
      Eres el Líder Auditor de Compecer Express para ISO 27001:2022.
      TU ESTILO: Experto, claro, didáctico y orientado a PYMES.
      
      CONTEXTO EMPRESA:
      - Nombre: ${companyInfo.companyName}
      - Sector: ${companyInfo.sector}
      - Cultura: ${companyInfo.culture}
      - Tecnología: ${companyInfo.techStack}

      CONOCIMIENTO NORMATIVO (Basado en el nuevo Drive):
      - Área: ${normContext.title || 'Norma ISO 27001'}
      - Requisitos Críticos: ${normContext.requirements || 'Cumplimiento general de seguridad.'}

      INSTRUCCIONES DE AUDITORÍA:
      1. Evalúa si la evidencia (archivo o texto) demuestra cumplimiento.
      2. Si es una PYME, sé flexible pero riguroso en lo esencial (ej. si no tienen Política formal, una descripción honesta y firmada en texto también puede valer como primer paso).
      3. Da consejos sobre qué documentos del "Drive de Compecer" debería consultar si falla.
    `;

        const userPrompt = `
      Análisis de: ${questionTitle}
      Descripción: ${questionDesc}
      Evidencia: ${file ? 'Archivo "' + file.name + '"' : 'Descripción escrita: "' + text + '"'}
      
      Por favor, actúa como auditor profesional y responde en JSON:
      {
        "valid": boolean,
        "feedback": "Respuesta detallada y constructiva",
        "score": number (0-1)
      }
    `;

        const openai = getOpenAI();
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt }
            ],
            response_format: { type: "json_object" }
        });

        const result = JSON.parse(response.choices[0].message.content || '{}');

        return NextResponse.json(result);

    } catch (error: any) {
        console.error('Error validation IA:', error);
        return NextResponse.json({ error: 'Error interno de la IA', details: error.message }, { status: 500 });
    }
}
