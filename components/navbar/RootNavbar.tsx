"use client"

import { usePathname, useRouter } from "next/navigation"
import { DashboardNavbar } from "./DashboardNavbar"
import { MainNavbar } from "./MainNavbar"

export const RootNavbar = () => {

  const pathname = usePathname()

  return (
    <div>
      {
        pathname.startsWith('/dashboard') 
          ? <DashboardNavbar/>
          : <MainNavbar/>
      }

      {/* {
        pathname === '/dashboard' 
          ? <DashboardNavbar/>
          : pathname === '/dashboard/gallery' ? 
          <></> : <MainNavbar/>
      } */}
    </div>
  )
}
