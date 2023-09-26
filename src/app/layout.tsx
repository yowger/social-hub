import "./globals.css"
import clsx from "clsx"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import Sidebar from "@/components/layout/sidebar/Sidebar"
import Header from "@/components/layout/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Social Hub | Home",
    description: "Social hub created by Roger Pantil",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    inter.className,
                    "dark:bg-background bg-gray-100"
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="">{children}</div>
                </ThemeProvider>
            </body>
        </html>
    )
}
