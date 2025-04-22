"use server"

import { prisma } from "./prisma"
import { redirect } from "next/navigation"
import { authOptions} from "./AuthOptions"
import { getServerSession } from "next-auth"

export const getUsers = async () => {
    const session = await getServerSession(authOptions);
    if(!session || !session.user || !session.user.id){
        redirect('../')
    }
    const id = session.user.id as string;
    const user =await prisma.user.findUnique({
        where:{id}
    })
    return user;
}