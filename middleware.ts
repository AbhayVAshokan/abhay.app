import { NextResponse } from "next/server";
import { SignJWT } from "jose";

export const middleware = async () => {
  const response = NextResponse.next();
  const x_token = await new SignJWT({ token: process.env.X_TOKEN })
    .setProtectedHeader({ alg: "HS256" })
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));

  response.cookies.set({
    name: "__x_token",
    value: x_token,
    httpOnly: true,
    path: "/resume",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
};

export const config = {
  matcher: ["/resume/:path*"],
};
