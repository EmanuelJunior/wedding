import { Button } from "@nextui-org/react"
import { ReactNode } from "react"

interface Props {
  icon: ReactNode;
  title: string;
  className?: string;
  onClick?: () => void
}

export const ButtonIcon = ({ icon, title, onClick = () => {}, className = 'text-default-600 bg-default-100' }: Props ) => {
  return (
    <Button
      className={`${className} font-cormorant font-extrabold text-base`}
      startContent={ icon }
      variant="flat"
      size="sm"
      onClick={onClick}
    >
      { title }
    </Button>
  )
}
