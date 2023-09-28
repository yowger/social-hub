import Logo from "../../common/Logo"
import SidebarDialog from "../sidebar/SidebarDialog"
import HeaderActions from "./HeaderActions"

export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 inset-x-0 bg-white border-gray-200 dark:bg-gray-900 border-b dark:border-b-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <div className="flex items-center space-x-2">
                    <Logo />
                    <div className="flex md:hidden">
                        <SidebarDialog />
                    </div>
                </div>

                <HeaderActions />
            </div>
        </nav>
    )
}
