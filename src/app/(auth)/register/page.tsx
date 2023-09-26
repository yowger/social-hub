import { RegisterForm } from "@/components/forms/registerForm"
import React from "react"

export default function Register() {
    return (
        <div className="flex justify-center max-w-lg  flex-col mx-auto my-auto h-screen">
            <div className="p-5">
                Register
                <RegisterForm />
            </div>
        </div>
    )
}
