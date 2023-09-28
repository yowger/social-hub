import LoginForm from "@/components/forms/LoginForm"

export default function Login() {
    return (
        <div className="flex justify-center max-w-lg  flex-col mx-auto my-auto h-screen">
            <div className="p-5">
                <LoginForm />
            </div>
        </div>
    )
}
