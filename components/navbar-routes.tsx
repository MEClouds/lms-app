"use client"

import { UserButton } from "@clerk/nextjs"

type Props = {}
export const NavbarRoutes = ({}: Props) => {
  return (
    <div className=" flex gap-x-2 ms-auto">
      <UserButton />
    </div>
  )
}
