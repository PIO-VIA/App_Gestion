"use client"
import {Notebook,Settings,CreditCard} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function DashboardNav() {
    const pathname=usePathname();
    const menuDashboard=[
        {name:"Notes",icon:Notebook,path:"/dashboard/notes"},
        {name:"Paiement",icon:CreditCard,path:"/dashboard/payment"},
        {name:"Settings",icon:Settings,path:"/dashboard/settings"},
    ]
  return (
    <nav className="flex md:flex-col md:h-full md:w-16 w-full lg:w-40 gap-2">
        {menuDashboard.map((link,index)=>{
            {const isActive=pathname.startsWith(link.path)}
            return (
                <Link href={link.path} >
                    <div className={`flex items-center justify-center lg:justify-start gap-2 cursor-pointer lg:p-3 p-2 hover:bg-orange-500 hover:bg-opacity-50 
                        hover:text-white text-sm font-blod rounded-md $ {isActive?"bg-orange-500 text-white"}`}>
                        <link.icon className="w-6 h-6"/>
                        <span className="hidden lg:block">{link.name}</span>
                    </div>  
                </Link>
            )
    })}
    </nav>
  )
}
