"use client"

import { Button, Card, CardBody } from '@nextui-org/react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-white to-red-500/60 dark:from-gray-950 dark:via-gray-950 dark:to-red-500/50 text-white p-6 font-sans">
      <Card className="max-w-5xl w-full bg-white/5 border border-white/10 rounded-2xl shadow-2xl grid md:grid-cols-2 gap-8 p-8 relative overflow-hidden">
        <CardBody>
          <h1 className="uppercase dark:text-gray-300 mb-2 text-sm font-serif">
            Error 404
          </h1>
          <h1 className="text-7xl md:text-8xl font-black mb-4 drop-shadow-lg font-serif">
            404
          </h1>
          <p className="text-lg dark:text-gray-100 mb-6">
            Lo sentimos — esta página se perdió en el camino al altar. Puede que el enlace ya no exista o que la dirección se haya escrito mal.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button as="a" href="/" color="danger" variant="solid" className='bg-gradient-to-r from-red-500 to-red-700'>
              Volver al inicio
            </Button>
            <Button as="a" href="/contacto" variant="bordered" className="dark:text-white border-gray-400 dark:border-white/20">
              Contactar a los novios
            </Button>
            <Button as="a" href="/evento" variant="bordered" className="dark:text-white border-gray-400 dark:border-white/20">
              Ver programa
            </Button>
          </div>
          <div className="text-xs dark:text-gray-300 mt-4">
            Si crees que esto es un error, envía un mensaje y lo arreglamos juntos ❤️
          </div>
        </CardBody>
        <div className="flex items-center justify-center">
          <img
            src="/404-wedding.svg"
            alt="Corazones y anillos de boda"
            className="w-72 md:w-96 drop-shadow-lg"
          />
        </div>
      </Card>
    </div>
  )
}