"use client"

import { Camera, MessageCircle, User } from "lucide-react"

export const LiveStatistics = () => {
  return (
    <div className="p-5 rounded-lg shadow-2xl bg-white dark:bg-gray-900 flex flex-col justify-center items-center gap-3">
      <h4 className="text-2xl dark:text-white">Estadisticas en Vivo</h4>

      <div className="px-2 py-2 bg-green-100 dark:bg-green-900/50 flex justify-between items-center w-full">
        <div className="flex items-center gap-1 justify-center">
          <User className="text-green-500 w-4 h-4"/>
          <p className="text-xs text-gray-600 dark:text-gray-200">Confirmados</p>
        </div>
        <button className="rounded-lg bg-green-200 dark:bg-green-800/50 text-green-500 text-[11px] px-1">
          85/120
        </button>
      </div>

      <div className="px-2 py-2 bg-blue-100 dark:bg-blue-900/50 flex justify-between items-center w-full">
        <div className="flex items-center gap-1 justify-center">
          <Camera className="text-blue-500 w-4 h-4"/>
          <p className="text-xs text-gray-600 dark:text-gray-200">Fotos Compartidas</p>
        </div>
        <button className="rounded-lg bg-blue-200 dark:bg-blue-800/50 text-blue-500 text-[11px] px-1">
          247
        </button>
      </div>

      <div className="px-2 py-2 bg-purple-100 dark:bg-purple-900/50 flex justify-between items-center w-full">
        <div className="flex items-center gap-1 justify-center">
          <MessageCircle className="text-purple-500 w-4 h-4"/>
          <p className="text-xs text-gray-600 dark:text-gray-200">Mensajes</p>
        </div>
        <button className="rounded-lg bg-purple-200 dark:bg-purple-800/50 text-purple-500 text-[11px] px-1">
          156
        </button>
      </div>
    </div>
  )
}
