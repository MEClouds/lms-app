"use client"
import { Compass, Layout } from "lucide-react"
import { SidebarItem } from "./siebar-item"
import { useTranslations } from "next-intl"

type Props = {}

export const SidebarRoutes = ({}: Props) => {
  const t = useTranslations()
  const guestRoutes = [
    {
      icon: Layout,
      label: t("Dashboard"),
      href: "/",
    },
    {
      icon: Compass,
      label: t("Browse"),
      href: "/search",
    },
    // {
    //     icon:Layout,
    //     label:"Dashboard",
    //     href:"/",
    // },
  ]
  const routes = guestRoutes
  return (
    <div className=" flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}
