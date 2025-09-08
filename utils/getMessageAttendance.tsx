import { Guest } from "@/contexts/guest";
import { BadgeX, CircleCheckBig } from "lucide-react";

export const getMessageAttendance = ( auth: Guest ) => {
  if (!auth) return { message: "", icon: <></> };

  switch (auth.status) {
    case "confirm":
      return {
        message: "¡Confirmado! Te esperamos con mucha alegría ✨",
        icon: <CircleCheckBig className="text-green-300" />,
      };
    case "reject":
      return {
        message: "Lamentamos que no puedas asistir. Te extrañaremos mucho 💔",
        icon: <BadgeX className="text-red-200" />,
      };
    default:
      return { message: "", icon: <></> };
  }
};