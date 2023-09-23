import Link from "next/link"

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex w-10 h-10 bg-blue-500 text-white rounded-full items-center justify-center">
                <span className="text-2xl font-bold">H</span>
            </div>
        </Link>
    )
}
