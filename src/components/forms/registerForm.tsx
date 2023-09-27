"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userFormRegisterSchema } from "@/schemas/registerSchema"
import type { UserFormRegister } from "@/schemas/registerSchema"
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

export function RegisterForm() {
    const form = useForm<UserFormRegister>({
        resolver: zodResolver(userFormRegisterSchema),
    })

    const {
        formState: { errors, isSubmitting },
    } = form

    console.log("errors: ", errors)
    console.log("is submitting: ", isSubmitting)

    const onSubmit = async (data: UserFormRegister) => {
        console.log("registered")
        const { name, email, password } = data

        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        console.log("response: ", response)
    }

    useEffect(() => {
        console.log("errors:", errors)
    }, [errors])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

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

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
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
                    Register
                </Button>
            </form>

            <p>
                Already have an account
                <Link href="/login" className="text-blue-800">
                    Sign in
                </Link>
            </p>
        </Form>
    )
}
