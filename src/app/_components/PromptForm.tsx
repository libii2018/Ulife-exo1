"use client";

import { postData } from "../model";

type PromptFormProps = {
  onPrompt: (string) => Promise<string>;
};

export default function PromptForm({ onPrompt }: PromptFormProps) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const result = postData(
      formData.get("prompt") as string,
      "/api/getResponse"
    );
    onPrompt(result);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-end w-full">
        <input
          className="w-full flex-1 rounded-lg border-2 p-2 border-black mb-2"
          name="prompt"
          type="text"
          placeholder="Saisir"
        />
        <button
          type="submit"
          className="bg-slate-900 text-white rounded-lg p-2 cursor-pointer"
        >
          Envoyer
        </button>
      </form>
    </>
  );
}
