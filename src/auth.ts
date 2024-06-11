import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { NextAuthConfig } from "next-auth";

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [Google],
  basePath: "/api/auth",
  callbacks: {
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl;
        if (pathname === "/main") return !!auth; //ログインしているユーザーだけ見れるページだよ。
        return true; //ログインしてなくても取りあえず全ページ見れるよ。
      } catch (err) {
        console.log(err);
      }
    },
    jwt({ token, trigger, session }) {
      // console.log(token);
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);