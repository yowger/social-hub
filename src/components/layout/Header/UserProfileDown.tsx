"use client"

import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Session } from "next-auth"
import { Bell, LogOut, User } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react"

export default function UserProfileDown({ session }: { session: Session }) {
    const handleSignOut = async () => {
        console.log("sign out")
        await signOut()
    }
    return (
        <>
            {session?.user ? (
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
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Bell className="mr-2 h-4 w-4" />
                                <span>Notifications</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleSignOut}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
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
