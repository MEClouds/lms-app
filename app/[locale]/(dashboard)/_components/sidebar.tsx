import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"

type Props = {}
export const Sidebar = ({}: Props) => {
  return (
    <div className="h-full border-e flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  )
}
