"use client";

import { postDataBackend } from "../model";
import { navigate } from "../actions";
import { useRouter } from "next/navigation";

export default function Connecter() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    postDataBackend({ username, password }, "/api/backend");
    // router.push("/");
  };

  return (
    <>
      <div className="flex min-h-screen mx-auto w-full">
        <div className="w-1/2 flex flex-col items-center justify-center p-12 bg-[url('/img/Register-Background.png')] bg-cover bg-center">
          <h1 className="text-white text-3xl mb-3">Bienvenue</h1>
          <div>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              voluptatum voluptate eveniet similique sit, quibusdam magnam
              expedita, sunt officiis minus itaque aspernatur doloremque
              sapiente quisquam tenetur ab ipsum rerum in.
            </p>
          </div>
        </div>
        <div className="w-1/2 py-16 flex flex-col items-center justify-center px-12">
          <p className="text-3xl mb-4">Connexion</p>
          <p className="mb-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis aperiam, repellat unde impedit laboriosam qui aliquid
            adipisci
          </p>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mt-5">
              <input
                name="username"
                type="text"
                placeholder="username"
                className="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div className="mt-5">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div className="mt-5">
              <button className="w-full bg-purple-500 py-3 text-center text-white">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
