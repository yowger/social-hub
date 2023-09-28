import "./globals.css"
import clsx from "clsx"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NextAuthProvider from "@/components/providers/NextauthProvider"
import { TanstackProvider } from "@/components/providers/TanstackProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"

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
                <NextAuthProvider>
                    <TanstackProvider>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                            disableTransitionOnChange
                        >
                            {children}
                        </ThemeProvider>
                    </TanstackProvider>
                </NextAuthProvider>
            </body>
        </html>
    )
}
