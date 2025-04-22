import React from "react"
import { Button } from "@/components/ui/button"
import {signIn} from "next-auth/react"
export default function ButtonProvider(){
    return(
        <div className="flex flex-col space-y-4">
            <Button>Continuer avec Google</Button>
            <Button onClick ={()=>signIn('github')}>Continuer avec GitHub</Button>
        </div>
    )
}