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

export default function LoginForm() {
    const form = useForm<UserFormLogin>({
        resolver: zodResolver(userLoginSchema),
    })

    const {
        formState: { isSubmitting },
    } = form

    const onSubmit = async (data: UserFormLogin) => {
        const { email, password } = data

        await signIn("credentials", {
            email,
            password,
            redirect: false,
        }).then((callback) => {
            const { ok, error } = callback ?? {}

            if (error) {
                const message = error

                form.control.setError("password", {
                    type: "manual",
                    message,
                })
            }

            if (ok && !error) {
                console.log("im in")
            }
        })
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

                <Button disabled={isSubmitting} type="submit">
                    {isSubmitting && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Login
                </Button>
            </form>

            <p>
                {"Don't have an account?"}
                <Link href="/register" className="text-blue-800">
                    Sign up
                </Link>
            </p>
        </Form>
    )
}
