"use client"

import { GuestContext } from "@/contexts/guest";
import { Cake, Calendar, Church, Clock, Coffee, Gift, Map, MapPin, Pin, Shirt } from "lucide-react"
import { useContext } from "react"
import { InvitationDataCard } from "../cards/InvitationDataCard";

export const WeddingData = () => {

  const { auth } = useContext(GuestContext);

  return (
    <section className="bg-white dark:bg-gray-900 p-5 mt-5 shadow-2xl rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-7 h-7 text-red-500"/>
        <h2 className="text-2xl dark:text-white">Información de la boda</h2>
        <span className="rounded-full px-2 py-1 text-xs bg-red-100 dark:bg-red-900/30 dark:text-red-200">Confirmado</span>
      </div>

      <section className={`grid grid-cols-${auth?.invitationType === 'Reception' ? 2 : 1} items-center justify-center gap-5 mt-5`}>
        
        <InvitationDataCard
          invitation="Eurcaristia"
          time="2:00 PM - 3:00 PM"
          name="Capilla Sagrada Familia"
          address="Vista Hermosa, El Santuario, Antioquia"
          icon={<Church className="w-5 h-5"/>}
        />

        {
          auth?.invitationType === 'Reception' && (
            <InvitationDataCard
              invitation="Recepción"
              time="6:00 PM - 12:00 PM"
              name="Apartamentos Olivar"
              address="Cra. 60a #62-02, Rionegro, Antioquia"
              icon={<Cake className="w-5 h-5"/>}
              color="indigo"
            />
          )
        }
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-3 justify-center items-center gap-4 mt-5">
        
        <div className="rounded-lg border border-yellow-500 bg-yellow-100 dark:bg-yellow-900/50 dark:text-white p-4 flex flex-col justify-center items-center">
          <Shirt className="text-yellow-500 w-7 h-7 mb-2"/>
          <h4 className="text-lg">Vestimenta</h4>
          <p className="text-xs">Ropa elegante</p>
        </div>

        <div className="rounded-lg border border-green-500 bg-green-100 dark:bg-green-900/50 dark:text-white p-4 flex flex-col justify-center items-center">
          <Gift className="text-green-500 w-7 h-7 mb-2"/>
          <h4 className="text-lg">Regalos</h4>
          <p className="text-xs">Lluvia de sobres</p>
        </div>

        <div className="rounded-lg border border-sky-500 bg-sky-100 dark:bg-sky-900/50 dark:text-white p-4 flex flex-col justify-center items-center">
          <Coffee className="text-sky-500 w-7 h-7 mb-2"/>
          <h4 className="text-lg">Coctel</h4>
          <p className="text-xs">6:00pm</p>
        </div>

      </section>
    </section>
  )
}
