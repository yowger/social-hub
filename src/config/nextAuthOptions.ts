import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prismaDb"
import bcrypt from "bcrypt"

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
                    throw new Error("Missing email or password")
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true,
                        password: true,
                        image: true,
                    },
                })

                const userPassword = user?.password

                if (!user || !userPassword) {
                    throw new Error("Account not found")
                }

                const isValidPassword = await bcrypt.compare(
                    password,
                    userPassword
                )

                if (!isValidPassword) {
                    throw new Error("Incorrect password")
                }

                const { password: _password, ...restOfUser } = user

                return restOfUser
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
    secret: process.env.NEXTAUTH_SECRET,
}
