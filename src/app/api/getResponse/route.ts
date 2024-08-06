import { NextResponse } from "next/server";
import OpenAI from "openai";
import { CreateChatCompletionRequestMessage } from "openai/resources";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

export async function POST(req: Request) {
  const { prompts } = await req.json();

  if (prompts.length !== 0) {
    let messages: CreateChatCompletionRequestMessage[] = [];
    for (let i in prompts) {
      messages.push({
        role: prompts[i].author == "me" ? "user" : "assistant",
        content: prompts[i].body,
      });
    }

    const chatCompletion = await client.chat.completions.create({
      messages,
      model: "gpt-3.5-turbo",
      temperature: 0.6,
    });
    const mockResponse = {
      response: chatCompletion.choices[0]?.message?.content,
    };
    // Simulez une réponse d'un LLM
    console.log(mockResponse);
    return NextResponse.json(mockResponse);
  }
  return NextResponse.json({ error: "L'invite est requise" });
}
