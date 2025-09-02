import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    // _id?: string;
    role?: string;
    userId?: string;
    number?: string;
    promoting?: Permission[];
    permission?: Permission[];
    servicesOffered?: Permission[];
  }
  interface Session {
    user: {
      id?: string;
      role?: Role;
      userId?: string;
      number?: string;
      access_token?: string;
      refresh_token?: string;
      promoting?: Permission[];
      permission?: Permission[];
      servicesOffered?: Permission[];
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    userId?: string;
    access_token?: string;
    refresh_token?: string;
  }
}
