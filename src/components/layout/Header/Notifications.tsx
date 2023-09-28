"use client"

import React from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Notifications() {
    return (
        <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
            <span className="sr-only">Notifications</span>
        </Button>
    )
}
