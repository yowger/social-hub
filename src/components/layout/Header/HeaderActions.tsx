"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"
import ToggleTheme from "../../common/ToggleTheme"
import Notifications from "./Notifications"
import UserProfileDown from "./UserProfileDown"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function HeaderActions() {
    const { data: session, status } = useSession()

    const renderHeaderMenu = () => {
        if (status === "loading") {
            return (
                <div className="flex items-center space-x-2">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-10 w-10 rounded-full" />
                </div>
            )
        } else if (status === "authenticated") {
            return (
                <>
                    <Notifications />
                    <UserProfileDown session={session} />
                </>
            )
        } else {
            return (
                <div className="space-x-2">
                    <Button variant="outline" asChild>
                        <Link href={"/login"}>Login</Link>
                    </Button>
                    <Button asChild>
                        <Link href={"/register"}>Sign Up</Link>
                    </Button>
                </div>
            )
        }
    }
    return (
        <div className="block w-auto">
            <div className="flex flex-row items-center space-x-2">
                <ToggleTheme />

                {renderHeaderMenu()}
            </div>
        </div>
    )
}

/*

*/
