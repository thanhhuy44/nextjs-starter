/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthOptions, getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AuthService } from "./services/auth";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "email@gmail.com",
        },
        password: {
          label: "Password",
        },
      },
      authorize: async (body) => {
        if (!body?.email || !body.password) {
          throw new Error("400: Bad Request");
        }
        try {
          const response = await AuthService.login(body);
          return response.data as any;
        } catch (error) {
          console.error(error);
          throw new Error("Login failed!");
        }
      },
    }),
  ],
  jwt: {
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user as any;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user.info;
      session.accessToken = token.user.token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getServerAuthSession = () => getServerSession(authOptions);
