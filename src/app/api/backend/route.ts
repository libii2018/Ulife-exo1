import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const KEY: string = "lfjeknckwenlfjwefnaldkjsaljasd";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const token = jwt.sign(
    { username: body.obj.username },
    process.env.ACCESS_TOKEN_SECRET
  );

  return NextResponse.json(
    { token: token },
    {
      status: 200,
      headers: { "Set-Cookie": "token=" + token + ";Max-Age=2592000; path=/" },
    }
  );
}
