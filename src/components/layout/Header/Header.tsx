import { ToggleTheme } from "../../common/ToggleTheme"
import Logo from "../../common/Logo"
import NotificationButton from "../../common/NotificationButton"
import SidebarDialog from "../sidebar/SidebarDialog"
import UserProfileDown from "./UserProfileDown"

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

                <div className="block w-auto">
                    <ul className="items-center font-medium flex rounded-lg bg-gray-50 flex-row space-x-2 mt-0 dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <ToggleTheme />
                        </li>
                        <li>
                            <NotificationButton />
                        </li>
                        <li>
                            <UserProfileDown />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
