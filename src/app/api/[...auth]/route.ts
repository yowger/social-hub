import prisma from "@/lib/prismaDb"
import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "text",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials ?? {}

                if (!email || !password) {
                    return null
                }

                const userExist = prisma.user.findUnique({
                    where: {
                        email,
                    },
                })

                // if(!userExist)

                return null
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks: {
        async jwt({ user, token }) {
            return { ...user, ...token }
        },
        async session({ session, token }) {
            const { iat, exp, jti, sub, ...userWithoutClaims } = token as any
            session.user = userWithoutClaims

            return session
        },
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
