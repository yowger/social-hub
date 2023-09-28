"use client"

import { useSession } from "next-auth/react"
import ToggleTheme from "../../common/ToggleTheme"
import Notifications from "./Notifications"
import UserProfileDown from "./UserProfileDown"

export default function HeaderActions() {
    const { data: session } = useSession()

    return (
        <div className="block w-auto">
            <ul className="items-center font-medium flex rounded-lg flex-row space-x-2 mt-0">
                <li>
                    <ToggleTheme />
                </li>

                <>
                    {session?.user && (
                        <li>
                            <Notifications />
                        </li>
                    )}
                    <li>
                        <UserProfileDown session={session} />
                    </li>
                </>
            </ul>
        </div>
    )
}
