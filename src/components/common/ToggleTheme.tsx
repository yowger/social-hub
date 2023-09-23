"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ToggleTheme() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        console.log("theme ", theme)
        theme == "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="rounded-full"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
