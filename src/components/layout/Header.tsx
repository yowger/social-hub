"use client"

import Link from "next/link"
import { ModeToggle } from "../common/ModeToggle"
import { Menu } from "lucide-react"
import { useRef } from "react"

const navbarLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Blogs",
        href: "/blogs",
    },
    {
        label: "About",
        href: "/about",
    },
]

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null)

    const toggleNav = () => {
        // todo show nav
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b dark:border-b-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-0 py-4 md:p-4 relative">
                <a href="/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        CodeBlog
                    </span>
                </a>
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
                <ModeToggle />
                <div ref={navRef} className="hidden w-full md:block md:w-auto">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                href="/"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                            >
                                Home
                            </Link>
                        </li>
                        {navbarLinks.map((item, index) => (
                            <li key={"nav-id-" + index}>
                                <Link
                                    href={item.href}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
