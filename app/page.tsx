'use client';
import Image from "next/image";
import logo from "@/public/logo.svg"
import {Typewriter, Cursor} from "react-simple-typewriter"
import ButtonProvider from "./components/ButtonProvider"
import { useSession } from "next-auth/react";
export default function Home() {
  const {data :session}= useSession()

  return (
    <section className ="w-full h-screen flex items-center justify-center flex-col gap-2">
      <Image width ={100} height={100} src={logo}alt="logo de l'application" className="mb-4 object-contain"/>
      <h1 className= "text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center" >
        <Typewriter typeSpeed={50} words={["Bienvenue", "Welcome","Willkomen","Vienvenido",] } loop={0}/>
        <span><Cursor/></span>
      </h1>
      <p className="my-2 text-center"> Rejoignez une Aventure de code</p>
      <ButtonProvider/>
    </section>
    
  );
}
