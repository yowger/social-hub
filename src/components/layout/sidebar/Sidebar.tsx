"use client"

import { Bell, Home, User2, Settings } from "lucide-react"
import SidebarItem from "./SidebarItem"

export default function Sidebar() {
    return (
        <div className="flex flex-col pt-5 space-y-2">
            <SidebarItem label="Home" Icon={Home} href="/" />
            <SidebarItem label="Profile" Icon={User2} href="/profile" />
            <SidebarItem label="Notifications" Icon={Bell} />
            <SidebarItem label="Settings" Icon={Settings} />
        </div>
    )
}
