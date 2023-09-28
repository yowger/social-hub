"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Session } from "next-auth"

export default function UserProfileDown({ session }: { session: Session }) {
    return (
        <>
            {session?.user ? (
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            ) : (
                <div className="space-x-2">
                    <Button variant="outline" asChild>
                        <Link href={"/login"}>Login</Link>
                    </Button>
                    <Button asChild>
                        <Link href={"/register"}>Sign Up</Link>
                    </Button>
                </div>
            )}
        </>
    )
}

/*

*/
