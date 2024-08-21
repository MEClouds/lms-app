import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Sidebar } from "./sidebar"

type Props = {}
export const MobileSidebar = ({}: Props) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden ps-4 hover:opacity-70  transition">
        <Menu />
      </SheetTrigger>
      <SheetContent className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
