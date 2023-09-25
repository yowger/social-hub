import Header from "@/components/layout/Header"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import Sidebar from "@/components/layout/sidebar/Sidebar"
import clsx from "clsx"

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
                    <Header />
                    <div className="flex w-full max-w-screen-xl mx-auto px-4">
                        <div className="hidden md:flex md:w-[250px] h-screen sticky top-0">
                            <Sidebar />
                        </div>
                        <div className="flex justify-center w-full md:px-5 py-4 mt-12 md:max-w-2xl">
                            <div className="max-w-[56ch]">{children}</div>
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
