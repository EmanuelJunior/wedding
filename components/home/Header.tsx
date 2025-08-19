'use client'

import { Button } from "@nextui-org/react"
import Image from "next/image"

export const Header = () => {
  return (
    <section
      className="relative overflow-hidden min-h-screen w-full px-4 py-12 flex justify-center items-center flex-col gap-4"
    >
      {/* Background image */}
      <Image
        src="/banner-login.jpg"
        alt="Emanuel y Vanessa"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0 z-0"
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="z-10 text-center flex flex-col items-center gap-6">
        {/* Decorative icon */}
        <div className="text-white text-4xl">
          <span className="inline-block bg-gradient-to-tr dark:from-red-400 dark:to-red-500 from-red-400 to-red-600 text-transparent bg-clip-text">
            ❤️
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl dark:text-red-500 text-red-500 font-bold tracking-wide">Emanuel y Vanessa</h1>

        {/* Subtitle */}
        <h5 className="text-3xl font-extrabold text-white font-cormorant">¡Nos Casamos!</h5>

        {/* Description */}
        <p className="text-lg text-white max-w-lg">
          Nos llena de alegría invitarte a celebrar con nosotros este día tan especial.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 hidden">
          <Button
            variant="shadow"
            color="danger"
            radius="full"
            className="font-cormorant text-base font-extrabold bg-gradient-to-tr dark:from-red-500 dark:to-red-400 from-red-400 to-red-600 px-6 py-3"
          >
            Confirmar Asistencia
          </Button>
          <Button
            variant="ghost"
            radius="full"
            className="hover:bg-white font-cormorant font-bold text-white border-white border-2 px-6 py-3"
          >
            Ver Detalles
          </Button>
        </div>
      </div>
    </section>
  )
}
