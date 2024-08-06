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
        <ul>
          <li>
            <button onClick={logout}>Deconnexion</button>
          </li>
          <li>
            <Link href="/">Chat</Link>
          </li>
          <li>
            <Link href="/enregistrer">Enregistrer</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link href="/connecter">Connecter</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
