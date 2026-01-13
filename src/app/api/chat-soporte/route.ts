import OpenAI from 'openai';
import { NextResponse } from 'next/server';

// El cliente se inicializa dentro del handler para evitar errores de build
const getOpenAI = () => new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Base de conocimientos resumida del Drive (RAG)
 */
const DRIVE_KNOWLEDGE = `
Estructura ISO 27001:2022 Compecer:
- 4.0: Contexto, Alcance, SoA (Matriz de Aplicabilidad).
- 5.0: Liderazgo, Política de Seguridad, Organigrama.
- 6.0: Riesgos, Objetivos de Seguridad.
- 7.0: Recursos, Inventario de Activos, Competencias.
- 8.0: Operación, Plan de Tratamiento de Riesgos.
- 9.0: Auditoría Interna, Revisión por Dirección.
- 10.0: Mejora Continua, No Conformidades.
- Anexo A 5-8: Controles Organizacionales, Personal, Físicos y Tecnológicos (Backup A.8.13, Malware A.8.7).
`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const systemPrompt = `
      Eres el Asistente Experto de Compecer Express. Tu misión es resolver dudas de PYMES sobre la ISO 27001:2022.
      
      BASE DE CONOCIMIENTOS (Drive del Cliente):
      ${DRIVE_KNOWLEDGE}

      INSTRUCCIONES:
      1. Sé directo, amable y didáctico.
      2. Si preguntan por un documento, dile en qué carpeta de su Drive está (ej: "La política está en la 5.0").
      3. No uses lenguaje excesivamente técnico.
      4. Si no sabes algo, remítelos a un consultor real de Compecer.
    `;

        const openai = getOpenAI();
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                ...messages
            ],
            temperature: 0.7,
            max_tokens: 600
        });

        return NextResponse.json({ message: response.choices[0].message.content });

    } catch (error: any) {
        console.error('Chat error:', error);
        return NextResponse.json({ error: 'Error en el chat' }, { status: 500 });
    }
}
