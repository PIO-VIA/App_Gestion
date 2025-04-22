import DashboardNav from "../components/DashboardNav"
import ButtonSignOut from "../components/ButtonSignOut"
import { ToastContainer } from 'react-toastify';

export default async function DashboardLayout({children}:Readonly<{children:React.ReactNode}>) {
    return (
        <section className="mx-auto md:flex md:items-center md:gap-4 h-screen w-full mt-2 p-2">
            <DashboardNav/>
            <div className="w-full h-full">
                <ButtonSignOut/>
                {children}
                <ToastContainer/>
            </div>
            
        </section>
    )
}