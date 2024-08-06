"use client";
import Link from "next/link";
import { hasCookies } from "../cookies";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const logout = () => {
    Cookie.remove("token");
    router.push("/connecter");
  };

  return (
    <div>
      {hasCookies ? (
        <ul className="flex items-center p-2 gap-2 bg-gpt-gray text-white justify-between">
          <li>
            <Link href="/">Chat</Link>
          </li>
          <li>
            <button
              className="p-2 bg-red-500 hover:bg-red-500/75 rounded"
              onClick={logout}
            >
              Deconnexion
            </button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link href="/enregistrer">Enregistrer</Link>
          </li>
          <li>
            <Link href="/connecter">Connecter</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
