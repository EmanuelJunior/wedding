"use client"

import { Button } from "@nextui-org/react"
import { BadgeX, CheckCircle, CircleCheckBig } from "lucide-react"
import { useState } from "react"

export const HeaderDashboard = () => {

  const [message, setMessage] = useState({
    message: '',
    icon: <></>,
    inProgress: false
  });

  const confirmAttendance = () => {
    setMessage({
      message: '¡Confirmado! Te esperamos con mucha alegría ✨',
      icon: <CircleCheckBig className="text-green-300"/>,
      inProgress: true
    })
  }

  const rejectInvitation = () => {}

  return (
    <header className=" rounded-lg bg-gradient-to-r from-red-500 to-gray-300 dark:from-red-600 dark:to-gray-900 p-5 flex justify-center items-center flex-col">
      <img 
        src="/banner-login.jpg" 
        alt="profile" 
        className="rounded-full w-20 h-20 mb-4"
      />
      <h1 className="text-white text-4xl text-center">Hola, Juan!</h1>
      <p className="text-white mt-1">Nos emociona compartir este día especial contigo</p>
      <p className="text-white mt-1 text-xs font-extralight w-1/2 text-center ">"Porque de tal manera amó Dios al mundo, que dio a su Hijo unigénito, para que todo el que cree en él no se pierda, sino que tenga vida eterna"</p>
      <span className="font-bold text-white text-xs">Juan 3:16</span>

      {
        !message.inProgress ? (
          <section className="flex gap-3 justify-center items-center mt-3">
            <Button 
              className="bg-white dark:bg-gray-900 dark:hover:text-gray-950 dark:text-white rounded-lg shadow-2xl text-xs flex gap-1 justify-center items-center hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green-300 transition-all shadow-2xl"
              onClick={() => confirmAttendance()}
            >
              <CheckCircle className="w-4 h-4"/>
              ¡Confirmar Asistencia!
            </Button>

            <Button 
              className="bg-white dark:text-gray-950 rounded-lg shadow-2xl text-xs flex gap-1 justify-center items-center hover:bg-gradient-to-r hover:from-red-200 hover:to-indigo-200 hover:opacity-100 transition-all shadow-2xl opacity-60"
              onClick={() => rejectInvitation()}
            >
              <BadgeX className="w-4 h-4"/>
              No podré asistir
            </Button>
          </section>
        ) : (
          <section className="flex justify-center items-center gap-1 mt-3">
            { message.icon }
            <h4 className="text-xl text-white">{ message.message }</h4>
          </section>
        )
      }


    </header>
  )
}
