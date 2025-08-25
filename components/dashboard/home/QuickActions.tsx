"use client";

import { CalendarDays, Camera, Heart } from "lucide-react";

export const QuickActions = () => {
  return (
    <div className="p-5 rounded-lg shadow-2xl bg-white dark:bg-gray-900 flex flex-col justify-center items-center gap-3">
      <h4 className="text-2xl dark:text-white">Acciones Rapidas</h4>

      <button className="flex text-xs w-full gap-2 justify-center items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-[6px] rounded-md">
        <Heart className="w-5 h-5" />
        Enviar Buenos deseos
      </button>

      <button className="dark:text-white flex text-xs w-full gap-2 justify-center items-center border px-2 py-[6px] rounded-md">
        <Camera className="w-5 h-5" />
        Subir Fotos
      </button>

      <button className="dark:text-white flex text-xs w-full gap-2 justify-center items-center border px-2 py-[6px] rounded-md">
        <CalendarDays className="w-5 h-5" />
        Ver Cronograma
      </button>
    </div>
  );
};
