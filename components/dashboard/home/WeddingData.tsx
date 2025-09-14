"use client"

import { Cake, Calendar, Church, Clock, Coffee, Gift, Map, MapPin, Pin, Shirt } from "lucide-react"

export const WeddingData = () => {
  return (
    <section className="bg-white dark:bg-gray-900 p-5 mt-5 shadow-2xl rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-7 h-7 text-red-500"/>
        <h2 className="text-2xl dark:text-white">Información de la boda</h2>
        <span className="rounded-full px-2 py-1 text-xs bg-red-100 dark:bg-red-900/30 dark:text-red-200">Confirmado</span>
      </div>

      <section className='flex items-center justify-center gap-5 mt-5'>
        <article className="flex flex-col bg-indigo-100 border border-indigo-500 dark:bg-indigo-900/50 dark:text-white p-3 rounded-xl w-1/2">
          <div className="flex items-center gap-1 mb-2">
            <Church className="w-5 h-5"/>
            <h3 className="text-lg">Eucaristia</h3>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4"/>
            <p className="text-xs">2:00 PM - 3:00 PM</p>
          </div>

          <div className="flex items-center gap-1 mt-1">
            <MapPin className="w-4 h-4"/>
            <p className="text-xs">Capilla Sagrada Familia</p>
          </div>

          <p className="text-xs mt-2">Vista Hermosa, El Santuario, Antioquia</p>
        </article>

        <article className="flex flex-col bg-rose-100 border border-rose-500 dark:bg-rose-900/50 dark:text-white p-3 rounded-xl w-1/2">
          <div className="flex items-center gap-1 mb-2">
            <Cake className="w-5 h-5"/>
            <h3 className="text-lg">Recepción</h3>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4"/>
            <p className="text-xs">6:00 PM - 12:00 PM</p>
          </div>

          <div className="flex items-center gap-1 mt-1">
            <MapPin className="w-4 h-4"/>
            <p className="text-xs">Apartamentos Olivar</p>
          </div>

          <p className="text-xs mt-2">Cra. 60a #62-02, Rionegro, Antioquia</p>
        </article>
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
