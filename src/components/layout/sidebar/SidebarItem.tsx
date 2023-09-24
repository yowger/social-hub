"use client"

import { LucideIcon } from "lucide-react"
import { useRouter } from "next/navigation"

type Props = {
    label: string
    Icon: LucideIcon
    href?: string
}

export default function SidebarItem({ label, Icon, href }: Props) {
    const router = useRouter()

    const handleClick = () => {
        if (href) {
            router.push(href)
        }
    }

    return (
        <div onClick={handleClick} className="flex flex-row items-center">
            <div className="relative rounded-full h-14 w-14 flex items-center justify-center py-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer md:hidden">
                <Icon />
            </div>

            <div className="relative hidden md:flex items-row gap-4 py-2 cursor-pointer items-center">
                <Icon />
                <p className="hidden md:block text-xl">{label}</p>
            </div>
        </div>
    )
}
