"use client"

import SidebarNavigation from "./SidebarNavigation"

export default function Sidebar() {
    return (
        <nav className="flex flex-col pt-16 space-y-2 pr-6">
            <SidebarNavigation />
        </nav>
    )
}
