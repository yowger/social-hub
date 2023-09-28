"use client"

import { signIn } from "next-auth/react"
import Link from "next/link"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userLoginSchema } from "@/schemas/loginSchema"
import type { UserFormLogin } from "@/schemas/loginSchema"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useState } from "react"

export default function LoginForm() {
    const [isCredentialsLoading, setIsCredentialsLoading] = useState(false)
    const [isGuestLoading, setIsGuestLoading] = useState(false)

    const isLoading = isCredentialsLoading || isGuestLoading

    const form = useForm<UserFormLogin>({
        resolver: zodResolver(userLoginSchema),
    })

    const onSubmit = async (data: UserFormLogin) => {
        setIsCredentialsLoading(true)

        const { email, password } = data

        const callback = await signIn("credentials", {
            email,
            password,
            redirect: false,
        })

        const { ok, error } = callback ?? {}

        if (error) {
            const message = error
            form.control.setError("password", {
                type: "manual",
                message,
            })
        }

        if (ok && !error) {
            signIn("credentials", {
                email,
                password,
                redirect: true,
                callbackUrl: "/",
            })
        }

        setIsCredentialsLoading(false)
    }

    const handleGuestLogin = async () => {
        setIsGuestLoading(true)

        const email = process.env.NEXT_PUBLIC_GUEST_EMAIL
        const password = process.env.NEXT_PUBLIC_GUEST_PASSWORD

        await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/",
        })

        setIsGuestLoading(false)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button disabled={isLoading} type="submit">
                    {isCredentialsLoading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Login
                </Button>
            </form>

            <p>or</p>

            <Button disabled={isLoading} onClick={handleGuestLogin}>
                {isGuestLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Login as guest
            </Button>

            <br />

            <p>
                {"Don't have an account?"}
                <Link href="/register" className="text-blue-800">
                    Sign up
                </Link>
            </p>
        </Form>
    )
}
