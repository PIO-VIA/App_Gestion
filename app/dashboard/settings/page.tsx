"use client"

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getUsers } from "@/lib/actionUsers"
export default async function PageSettings() {
  const user = await getUsers()
  return (
    <section className="border border-gray-200 rounded-md p-3">
        <h2 className="text-3xl uppercase font-black">Settings</h2>
        <p className="text-lg text-muted-foreground">Vos Parametres de profil</p>
        <div className="w-12 bg-white my-2 mx-1 h-[1px]"></div>
        <form action="" >
          <Input type="hidden" name="id" value={user?.id}/>
          <Card>
            <CardHeader>
              <CardTitle>Parametre global</CardTitle>
              <CardDescription>Modifier vos informations personnelles</CardDescription>
            </CardHeader>
            <CardContent>
              {user?.image && (
                <Image width={100}  height={100} src={user?.image} alt="image de l'utilisateur"
                className="w-16 h-16 object-contain mb-4 rounded-full"/>
              )}
              <div className="space-y-1 mb-2">
                <Label htmlFor="idUser">ID</Label>
                <Input type="text" name="idUser" id="idUser" disabled  defaultValue={user?.id || ''}/>
              </div>
              <div className="space-y-1 mb-2">
                <Label htmlFor="name">Nom</Label>
                <Input type="text" name="name" id="name" defaultValue={user?.name || ''}/>
              </div>
              <div className="space-y-1 mb-2">
                <Label htmlFor="email">Email</Label>
                <Input type="text" name="email" id="email" defaultValue={user?.email || ''} />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Modifier</Button>
            </CardFooter>
          </Card>
        </form>
        <form action="">
          <Input type="hidden" name="id" value=""/>
          <Button className="bg-red-500 mx-1 my-2 hover:bg-red-600 text-white">Supprimer votre compte</Button>
        </form>
    </section>
  )
}
