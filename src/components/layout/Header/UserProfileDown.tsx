"use client"

import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import type { Session } from "next-auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, LogOut, User } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function UserProfileDown({ session }: { session: Session }) {
    const router = useRouter()
    const { user } = session

    const handleSignOut = async () => {
        await signOut()
    }

    const handleProfileClick = () => {
        router.push("/profile")
    }

    const handleNotificationsClick = () => {
        router.push("/notifications")
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
                className="cursor-pointer hover:brightness-125 active:brightness-150 duration-200"
            >
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44">
                <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={handleProfileClick}>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleNotificationsClick}>
                        <Bell className="mr-2 h-4 w-4" />
                        <span>Notifications</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

/*

*/
