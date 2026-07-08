import { NextResponse } from "next/server";
import { SESSION_COOKIE } from "@/lib/server/auth";

export async function POST() {
  const isProduction = process.env.NODE_ENV === "production";
  const response = NextResponse.json({ ok: true });
  // Attributes must match the login cookie, otherwise the partitioned copy
  // set inside the WebCake iframe is not cleared.
  response.cookies.set(SESSION_COOKIE, "", {
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
    partitioned: isProduction,
    path: "/",
    maxAge: 0,
  });
  return response;
}
