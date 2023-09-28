"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession, signOut } from "next-auth/react"

export default function UserProfileDown() {
    const { data } = useSession()
    const { user } = data ?? {}

    console.log("user ", user)
    
    // const renderProfileAvatar = (user.) => {

    // }
    
    return (
        <>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </>
    )
}
