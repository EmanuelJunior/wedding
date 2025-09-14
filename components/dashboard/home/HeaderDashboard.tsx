"use client"

import { changeStatusGuest } from "@/app/actions/guest"
import { GuestContext } from "@/contexts/guest"
import { Database } from "@/interfaces/database.types"
import { getMessageAttendance } from "@/utils"
import { Button } from "@nextui-org/react"
import { BadgeX, CheckCircle } from "lucide-react"
import { useContext, useTransition, useOptimistic } from "react"

type Status = Database['public']['Enums']['status'] // "pending" | "confirm" | "reject"

export const HeaderDashboard = () => {
  const { auth } = useContext(GuestContext)

  // 1) Estado optimista SOLO para el status
  const [optimisticStatus, addOptimisticStatus] = useOptimistic<Status>(
    auth?.status ?? "pending",
  )

  const { message, icon } = getMessageAttendance(optimisticStatus)

  // 3) Transición no bloqueante
  const [isPending, startTransition] = useTransition()

  const changeStatusAttendance = (status: Status) => {
    if (!auth || auth.status !== "pending") return

    // a) UI optimista inmediata
    addOptimisticStatus(status)

    // b) Ejecutar la acción en transición
    startTransition(async () => {
      try {
        await changeStatusGuest(auth.id, status)
        // c) Sincronizar datos reales (si tu acción ya hace revalidatePath, esto puede ser opcional)
        // router.refresh()
      } catch (e) {
        // d) Reversión simple si hay error
        addOptimisticStatus("pending")
      }
    })
  }

  return (
    <header className="rounded-lg bg-gradient-to-r from-red-500 to-red-400 dark:from-red-600 dark:to-gray-900 p-5 flex justify-center items-center flex-col">
      <img 
        src="/banner-login.jpg" 
        alt="profile" 
        className="rounded-full w-20 h-20 mb-4"
      />
      <h1 className="text-white text-4xl text-center">Hola, {auth?.fullName}!</h1>
      <p className="text-white mt-1">Nos emociona compartir este día especial contigo</p>
      <p className="text-white mt-1 text-xs font-extralight w-1/2 text-center ">"Porque de tal manera amó Dios al mundo, que dio a su Hijo unigénito, para que todo el que cree en él no se pierda, sino que tenga vida eterna"</p>
      <span className="font-bold text-white text-xs">Juan 3:16</span>

      {
        optimisticStatus === 'pending' ? (
          <section className="flex flex-wrap gap-3 justify-center items-center mt-3">
            <Button 
              className="bg-white w-full sm:w-auto dark:bg-gray-900 dark:hover:text-gray-950 dark:text-white rounded-lg shadow-2xl text-xs flex gap-1 justify-center items-center hover:bg-gradient-to-r hover:from-yellow-200 hover:to-green-300 transition-all shadow-2xl"
              onClick={() => changeStatusAttendance("confirm")}
              isLoading={isPending}
              disabled={isPending}
            >
              <CheckCircle className="w-4 h-4"/>
              ¡Confirmar Asistencia!
            </Button>

            <Button 
              className="bg-white w-full sm:w-auto dark:text-gray-950 rounded-lg shadow-2xl text-xs flex gap-1 justify-center items-center hover:bg-gradient-to-r hover:from-red-200 hover:to-indigo-200 hover:opacity-100 transition-all shadow-2xl"
              onClick={() => changeStatusAttendance("reject")}
              disabled={isPending}
            >
              <BadgeX className="w-4 h-4"/>
              No podré asistir
            </Button>
          </section>
        ) : (
          <section className="flex justify-center items-center gap-1 mt-3">
            { icon }
            <h4 className="text-xl text-white">{ message }</h4>
          </section>
        )
      }
    </header>
  )
}
