"use client"

import { Bell, Home, User2, Settings } from "lucide-react"
import SidebarItem from "./SidebarItem"

export default function SidebarNavigation() {
    return (
        <div className="space-y-2">
            <SidebarItem label="Home" Icon={Home} href="/" />
            <SidebarItem label="Profile" Icon={User2} href="/profile" />
            <SidebarItem label="Notifications" Icon={Bell} />
            <SidebarItem label="Settings" Icon={Settings} />
        </div>
    )
}
