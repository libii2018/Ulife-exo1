import { parse } from "cookie";
import * as jose from "jose";
import { NextResponse, type NextRequest } from "next/server";

let isLoggedIn: boolean = false;

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET),
};

export async function middleware(req: NextRequest, res: NextResponse) {
  // const token = req.cookies.get("token");
  const cookies = parse(req.headers.get("cookie") || "");

  let username = "";

  if (cookies) {
    try {
      const myCookie = cookies.token;

      console.log("=====>", myCookie);

      let { payload } = await jose.jwtVerify(myCookie, jwtConfig.secret);
      username = payload.username as string;
    } catch (e) {
      console.error(e.message);
    }
  }

  if (username === "admin") {
    isLoggedIn = true;
  }

  if (isLoggedIn) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/connecter", req.url));
}

export const config = {
  matcher: ["/", "/enregistrer"],
};
