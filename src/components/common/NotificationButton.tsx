import React from "react"
import { Button } from "../ui/button"
import { Bell } from "lucide-react"

export default function NotificationButton() {
    return (
        <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            <span className="sr-only">Notifications</span>
        </Button>
    )
}
