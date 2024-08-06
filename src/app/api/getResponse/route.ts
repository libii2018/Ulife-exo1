import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const chatCompletion = await client.chat.completions.create({
    messages: [
      { role: "system", content: "Answer like Elon Musk" },
      { role: "user", content: prompt },
    ],
    model: "gpt-3.5-turbo",
  });
  if (!prompt) {
    return NextResponse.json({ error: "L'invite est requise" });
  }
  // Simulez une réponse d'un LLM
  const mockResponse = {
    response: chatCompletion.choices[0].message.content,
  };
  return NextResponse.json(mockResponse);
}
