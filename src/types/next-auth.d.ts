import { DefaultSession } from "next-auth";
import { User } from "./user";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User & DefaultSession["user"];
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      info: User;
      token: string;
    };
  }
}
