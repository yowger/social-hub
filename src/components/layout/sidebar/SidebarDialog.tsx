import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SidebarNavigation from "./SidebarNavigation"

export default function SidebarDialog() {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Menu className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="max-w-[330px]">
                <SidebarNavigation />
            </SheetContent>
        </Sheet>
    )
}
