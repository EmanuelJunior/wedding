// utils/getMessageAttendance.ts
import { BadgeX, CircleCheckBig } from "lucide-react"
import type { Database } from "@/interfaces/database.types"

type Status = Database['public']['Enums']['status']
type AttendanceUI = { message: string; icon: JSX.Element }

export const getMessageAttendance = (status: Status): AttendanceUI => {
  switch (status) {
    case "confirm":
      return {
        message: "¡Confirmado! Te esperamos con mucha alegría ✨",
        icon: <CircleCheckBig className="text-emerald-300" />,
      }
    case "reject":
      return {
        message: "Lamentamos que no puedas asistir. Te extrañaremos mucho 💔",
        icon: <BadgeX className="text-red-200" />,
      }
    default:
      return { message: "", icon: <></> }
  }
}
