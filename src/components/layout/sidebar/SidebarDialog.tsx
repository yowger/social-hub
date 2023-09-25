"use client"

import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SidebarNavigation from "./SidebarNavigation"

export default function SidebarDialog() {
    return (
        <Sheet>
            <SheetTrigger>
                <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-all">
                    <Menu className="w-6 h-6" />
                </div>
            </SheetTrigger>

            <SheetContent side="left" className="max-w-[330px]">
                <SidebarNavigation />
            </SheetContent>
        </Sheet>
    )
}
