"use client"

import { useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ToggleTheme } from "../common/ToggleTheme"
import Logo from "../common/Logo"
import NotificationButton from "../common/NotificationButton"

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null)

    // const toggleNav = () => {
    //     // todo show nav
    // }

    return (
        <nav className="sticky top-0 z-50 bg-white border-gray-200 dark:bg-gray-900 border-b dark:border-b-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <div className="flex items-center space-x-2">
                    <Logo />
                    {/* toggle sidebar */}
                    {/* <div>
                        <button
                            onClick={toggleNav}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Menu />
                        </button>
                    </div> */}
                </div>

                <div ref={navRef} className="block w-auto">
                    <ul className="items-center font-medium flex rounded-lg bg-gray-50 flex-row space-x-2 mt-0 dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <ToggleTheme />
                        </li>
                        <li>
                            <NotificationButton />
                        </li>
                        <li>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
