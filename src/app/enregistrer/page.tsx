export default function Enregistrer() {
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
          <p className="text-3xl mb-4">Enregistrement</p>
          <p className="mb-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis aperiam, repellat unde impedit laboriosam qui aliquid
            adipisci
          </p>
          <form className="w-full" action="">
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Nom"
                className="border border-gray-400 py-1 px-2"
              />
              <input
                type="text"
                placeholder="Prenom"
                className="border border-gray-400 py-1 px-2"
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Email"
                className="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Confirmer le mot de pass"
                className="border border-gray-400 py-1 px-2 w-full"
              />
            </div>
            <div className="mt-5">
              <input type="checkbox" className="border border-gray-400" />
              <span>
                Accept{" "}
                <a href="#" className="text-purple-500 font-semiblod">
                  les termes du contract
                </a>
                &{" "}
                <a href="#" className="text-purple-500 font-semiblod">
                  politique de confidentialité
                </a>
              </span>
            </div>
            <div className="mt-5">
              <button className="w-full bg-purple-500 py-3 text-center text-white">
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
