import Sidebar from "@/components/layout/sidebar/Sidebar"
import Header from "@/components/layout/Header/Header"

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <div className="flex w-full max-w-screen-xl mx-auto px-4">
                <div className="hidden md:flex md:w-[250px] h-screen sticky top-0">
                    <Sidebar />
                </div>
                <div className="flex justify-center w-full md:px-5 py-4 mt-12 md:max-w-2xl">
                    <div className="max-w-[56ch] w-full">{children}</div>
                </div>
            </div>
        </>
    )
}
