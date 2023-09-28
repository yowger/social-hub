import NextAuth from "next-auth"
import { Role } from "@prisma/client"

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            name: string
            email: string
            role: Role
            image?: string
        }
    }
}
