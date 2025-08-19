'use client'

import { Button } from "@nextui-org/react"
import { Camera, Facebook, Gift, Instagram, Linkedin, LinkedinIcon, Mail, Map, Music, Phone } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-red-800 dark:bg-red-900/60">
      <section className="grid grid-cols-6 gap-3 justify-center items-center p-5">
        <article className="col-span-6 lg:col-span-2  p-2 text-white flex flex-col justify-start items-center">
          <h1 className="text-3xl text-white dark:text-red-500">Emanuel y Vanessa</h1>
          <h6 className="text-gray-300 font-sans font-extralight text-base mb-2">11 de octubre 2025</h6>
          {/* <p className="text-sm italic">El amor es tan fuerte que ni las muchas aguas ni los rios pueden apagarlo</p> */}
          {/* <span className="text-base font-light text-red-300 dark:text-red-400 font-pinyon-script">Cantares: 8, 7</span> */}
          <div className="flex items-center justify-evenly gap-4 text-[12px] font-extraligh text-gray-300">
            <Link href={'#'}>Detalles</Link>
            <Link href={'#'}>Itinerario</Link>
            <Link href={'#'}>Historia</Link>
            <Link href={'#'}>Blog</Link>
            {/* <Link href={'#'}>About</Link> */}
          </div>
        </article>

        <article className="col-span-6 sm:col-span-3 lg:col-span-2  p-2 flex flex-col justify-center items-start text-white">

          <h3 className="text-xl text-white">Información de contacto</h3>

          <div className="grid grid-cols-2 items-center w-full justify-center flex-wrap gap-3 mt-3">
            <div className="rounded-lg bg-red-700/50 p-3">
              <p className="text-xs">Contacto Novio</p>

              <div className="flex gap-1 text-[12px]">
                <Phone className="w-4 h-4"/>
                <p>+57 304 473 2196</p>
              </div>
              <div className="flex gap-1 text-[12px]">
                <Mail className="w-4 h-4"/>
                <p>sagazu13@gmail.com</p>
              </div>
            </div>

            <div className="rounded-lg bg-red-700/50 p-3">
              <p className="text-xs font-bold ">Contacto Novia</p>
              <div className="flex gap-1 text-[12px]">
                <Phone className="w-4 h-4"/>
                <p>+57 301 697 2311</p>
              </div>
              <div className="flex gap-1 text-[12px]">
                <Instagram className="w-4 h-4"/>
                <p>#agudelovanessa77</p>
              </div>
            </div>
          </div>
        </article>
        
        <article className="p-2 col-span-6 sm:col-span-3 lg:col-span-2 ">
          <p className="text-xs italic text-white">"El amor es tan fuerte que ni las muchas aguas ni los rios pueden apagarlo"</p>
          <p className="text-base font-light mb-2 text-red-300 dark:text-red-400 font-pinyon-script">Cantares: 8, 7</p>

          <div className="grid grid-cols-2 gap-2">
            <Button className="rounded-lg text-[12px] bg-red-700/60 text-gray-100" startContent={<Camera className="w-4 h-4"/>} size="sm">Galeria</Button>
            <Button className="rounded-lg text-[12px] bg-red-700/60 text-gray-100" startContent={<Music className="w-4 h-4"/>} size="sm">Musica</Button>
            <Button className="rounded-lg text-[12px] bg-red-700/60 text-gray-100" startContent={<Map className="w-4 h-4"/>} size="sm">Ubicación</Button>
            <Button className="rounded-lg text-[12px] bg-red-700/60 text-gray-100" startContent={<Gift className="w-4 h-4"/>} size="sm">Regalos</Button>
          </div>
        </article>

      </section>

      <div className="p-3 text-white flex flex-col justify-center items-center text-xs bg-red-900 dark:bg-red-900/60">
        <p className=" font-semibold">Diseñado con amor para nuestro día especial</p>
        <p className="">© 2025 Emanuel & Vanessa. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
