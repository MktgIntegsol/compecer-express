import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { questionId, questionTitle, questionDesc, companyInfo } = await req.json();

        const systemPrompt = `
      Eres el Consultor Didáctico de Compecer Express. El cliente NO tiene el documento para la clausula ${questionId} (${questionTitle}).
      Tu objetivo es plantearle 3 preguntas muy sencillas, cortas y directas para que aprenda cómo lo hace su empresa y tú puedas generarle el documento después.
      
      CONTEXTO EMPRESA: ${companyInfo.companyName} (${companyInfo.sector})

      REGLAS:
      - Máximo 3 preguntas.
      - Lenguaje NO técnico. En lugar de "Criptografía asimétrica", di "¿Cómo protegéis las contraseñas?".
      - Responde en formato JSON.
    `;

        const userPrompt = `
      Genera 3 preguntas para ayudar al cliente a cumplir con: ${questionDesc}.
    `;

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
        return NextResponse.json({ error: 'Error al generar preguntas' }, { status: 500 });
    }
}
