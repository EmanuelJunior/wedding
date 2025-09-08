"use client"

import { GuestContext } from "@/contexts/guest"
import { Mail } from "lucide-react"
import { useContext } from "react"

export const MyProfile = () => {

  const { auth } = useContext(GuestContext);

  return (
    <section className="p-5 rounded-lg shadow-2xl bg-white dark:bg-gray-900 flex flex-col justify-center items-center gap-3">
      <h2 className="text-2xl dark:text-white">Mi información</h2>

      <div className="rounded-full p-1 bg-gradient-to-r from-red-500 to-red-900/50 shadow-2xl">
        <img src="/banner-login.jpg" alt="my-profile" className="w-20 h-20 rounded-full"/>
      </div>

      <article className="mt-1 flex flex-col justify-center items-center">
        <h4 className="text-2xl dark:text-white">{ auth?.fullName }</h4>
        <p className="text-xs dark:text-gray-300">{ auth?.phone }</p>
        
        <div className="flex gap-1 mt-2">
          <p className="bg-purple-100  rounded-full text-[11px] px-2 py-[2px]">Mesa 5</p>

          <p 
            className="bg-yellow-100  rounded-full text-[11px] px-2 py-[2px]"
            style={{
              backgroundColor: auth?.status && auth.status === "confirm" ? "#D1FAE5" : auth?.status === "reject" ? "#FEE2E2" : "#fef9c3",
            }}
          >
            { auth?.status && auth.status === "confirm" ? "Confirmado" : auth?.status === "reject" ? "No asistirá" : "Pendiente de respuesta" }
          </p>
        </div>
      </article>

      <button className="w-full  py-2 rounded-lg border dark:text-white dark:border-gray-300 flex justify-center items-center gap-1 text-xs">
        <Mail className="w-4 h-4"/>
        Reenviar Invitación Whatsapp
      </button>

    </section>
  )
}
