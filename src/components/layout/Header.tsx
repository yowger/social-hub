"use client"

import { useRef } from "react"
import Link from "next/link"
import { Bell, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ToggleTheme } from "../common/ToggleTheme"
import Logo from "../common/Logo"
import NotificationButton from "../common/NotificationButton"

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null)

    const toggleNav = () => {
        // todo show nav
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b dark:border-b-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <div className="flex items-center">
                    <Logo />
                    <div>
                        <button
                            onClick={toggleNav}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Menu />
                        </button>
                    </div>
                </div>

                <div ref={navRef} className="hidden w-full md:block md:w-auto">
                    <ul className="items-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
