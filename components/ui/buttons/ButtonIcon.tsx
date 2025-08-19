import { Button } from "@nextui-org/react"
import { ReactNode } from "react"

interface Props {
  icon: ReactNode;
  title: string;
  className?: string;
}

export const ButtonIcon = ({ icon, title, className = 'text-default-600 bg-default-100' }: Props ) => {
  return (
    <Button
      className={`${className} font-cormorant font-extrabold text-base`}
      startContent={ icon }
      variant="flat"
      size="sm"
    >
      { title }
    </Button>
  )
}
