"use client"

import { useRouter, usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import clsx from "clsx"

type Props = {
    label: string
    Icon: LucideIcon
    href?: string
}

export default function SidebarItem({ label, Icon, href }: Props) {
    const router = useRouter()
    const currentRoute = usePathname()
    const isCurrentRoute = currentRoute === href

    const handleClick = () => {
        if (href) {
            router.push(href)
        }
    }

    return (
        <div onClick={handleClick} className="flex flex-row items-center">
            <div className="relative flex items-row gap-3.5 py-1 cursor-pointer items-center">
                <Icon />
                <p
                    className={clsx(
                        isCurrentRoute && "font-semibold",
                        "block text-lg hover:font-semibold"
                    )}
                >
                    {label}
                </p>
            </div>
        </div>
    )
}
