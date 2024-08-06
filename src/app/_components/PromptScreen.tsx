"use client";

type PromptScreenProps = { prompt: Promise<string> | null };

export default function PromptScreen({ prompt }: PromptScreenProps) {
  return (
    <div>
      <h3>Reponse du chat</h3>
      <div className="bg-gray-200 w-full h-auto min-h-28 flex-1 mb-4 p-4">
        {prompt ? prompt : ""}
      </div>
    </div>
  );
}
