import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { Permission, Role } from "./app/types/types";

const secret = process.env.NEXTAUTH_SECRET;
const DOMAIN_BASE_URL = process.env.DOMAIN_BASE_URL;

export async function middleware(req: NextRequest) {
  const token = (await getToken({ req, secret })) as unknown as {
    role: Role;
    permission: Permission[];
  };

  if (!token) {
    const loginUrl = new URL(`${DOMAIN_BASE_URL}/auth/login`);
    loginUrl.searchParams.set("callbackUrl", encodeURIComponent(req.url));
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/room"],
};
