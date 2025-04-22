"use-client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { ThemeToggle } from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className = " w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b border-gray-300">
      <div>
        <Link href ='/'>
          <Image width={30} height={30} src={logo} alt="logo de l'application"
          className="w-12 h-12" />
        </Link>
      </div>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </nav>
  )
}
