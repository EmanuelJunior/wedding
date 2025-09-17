import { Button } from "@nextui-org/react"
import { ReactNode } from "react"

interface Props {
  icon: ReactNode;
  title: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
}

export const ButtonIcon = ({ icon, title, size = 'sm', type = 'button', onClick = () => {}, className = 'text-default-600 bg-default-100' }: Props ) => {
  return (
    <Button
      className={`${className} font-cormorant font-extrabold text-base`}
      startContent={ icon }
      variant="flat"
      size={size}
      onClick={onClick}
      type={type}
    >
      { title }
    </Button>
  )
}
