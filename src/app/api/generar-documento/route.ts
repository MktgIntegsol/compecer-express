import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const getOpenAI = () => new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { questionId, questionTitle, companyInfo, userResponses } = await req.json();

        const systemPrompt = `
      Eres el Consultor Senior de Compecer Express. Tu trabajo es redactar un documento normativo profesional para ISO 27001:2022 basado en los datos de una PYME.
      
      DATOS EMPRESA:
      - Nombre: ${companyInfo.companyName}
      - Sector: ${companyInfo.sector}
      - Tecnología: ${companyInfo.techStack}

      DOCUMENTO A GENERAR:
      - Cláusula/Control: ${questionId}
      - Título: ${questionTitle}

      ESTILO: Profesional, legalmente sólido pero fácil de entender. Debe parecer una política lista para firmar.
      USA FORMATO MARKDOWN para la respuesta.
    `;

        const userPrompt = `
      Por favor, redacta el borrador del documento basándote en estas respuestas del cliente:
      ${JSON.stringify(userResponses)}

      El documento debe incluir:
      1. Título y Versión (V1.0)
      2. Objetivo y Alcance
      3. Política detallada (basada en sus respuestas)
      4. Responsabilidades
      5. Fecha de aprobación y pie de firma para Dirección.
    `;

        const openai = getOpenAI();
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt }
            ],
            temperature: 0.7
        });

        const content = response.choices[0].message.content;

        return NextResponse.json({ draft: content });

    } catch (error: any) {
        console.error('Error generating document:', error);
        return NextResponse.json({ error: 'Error al generar el borrador' }, { status: 500 });
    }
}
