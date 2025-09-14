'use client'

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { ArrowLeft, Calendar, HandHeart, Heart, Plus, Power } from "lucide-react";
import { Button, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ButtonIcon } from "../ui/buttons/ButtonIcon";
import { useRouter } from "next/navigation";
import { AddPhotoModal } from "../dashboard/modals/AddPhotoModal";
import { logout } from "@/app/actions";

export const DashboardNavbar = () => {

  const {isOpen, onOpen, onClose} = useDisclosure();

  const [leftDay, setLeftDay] = useState<number>(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const weddingDate = new Date('2025-10-11T13:00:00');

    const now = new Date()
    const difference = weddingDate.getTime() - now.getTime()

    setLeftDay(
      Math.floor(difference / (1000 * 60 * 60 * 24))
    )
  }, []);

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className=" py-1">
      <NavbarContent className="basis-1/5 sm:basis-full font-cormorant" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          
          {
            pathname === '/dashboard' ? (
              <Heart className="w-8 h-8 text-red-800 dark:text-red-500 mx-auto" />
            ) : pathname.startsWith('/dashboard') ? (
              <Button
                startContent={ <ArrowLeft/> }
                size="sm"
                className="font-bold text-base bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900"
                onClick={() => router.push('/dashboard')}
              >
                Volver
              </Button>
            ) : <></>
          }
          
          <div className="flex flex-col">
            <NextLink className="flex justify-start items-center" href="/">
              <p className="m-0 p-0 leading-none sm:block font-extrabold font-pinyon-script text-2xl text-red-800 dark:text-red-500">
                { 
                  pathname === '/dashboard' 
                    ? 'Ema y Vane' :
                  pathname === '/dashboard/gallery'
                    ? 'Galería de Fotos' :
                  pathname === '/dashboard/guest'
                    ? 'Lista de Invitados' :
                  pathname === '/dashboard/messages'
                    ? 'Mensajes para los Novios' : ''
                }
              </p>
            </NextLink>
            <div className="flex items-center justify-start gap-1">
              { 
                pathname === '/dashboard' && 
                  <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-300"/>  
              }

              <p className="text-gray-500 dark:text-gray-300">
                { 
                  pathname === '/dashboard' 
                    ? '11 de octubre, 2025' :
                  pathname === '/dashboard/gallery'
                    ? 'Comparte momentos especiales' :
                  pathname === '/dashboard/guest'
                    ? 'Confirmaciones y asistencia' :
                  pathname === '/dashboard/messages'
                    ? 'Comparte tus buenos deseos' : ''
                }
              </p>

              { 
                pathname === '/dashboard' &&
                  <p className="hidden font-semibold text-red-900 dark:text-red-500">• - { leftDay } días restantes</p>
              }
            </div>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        <NavbarItem className="hidden md:flex">
          <NextLink href={ !pathname.includes('dashboard') ? siteConfig.links.authLogin : '#'}>
            {
              pathname === '/dashboard' ?
                <div className="flex gap-2">
                  <ButtonIcon
                    icon={<HandHeart className="text-red-800 dark:text-red-500 w-5 h-5" />}
                    title="Dashboard Invitaciones"
                    
                  />

                  <form action={logout}>
                    <ButtonIcon
                      icon={<Power className="text-white w-5 h-5" />}
                      title="Salir"
                      type='submit'
                      className="bg-red-600 dark:bg-red-500 hover:bg-red-800 dark:hover:bg-red-600 text-white"
                    />
                  </form>
                </div>
              : pathname === '/dashboard/gallery' ?
                <>
                  <ButtonIcon
                    icon={<Plus/>}
                    title="Subir Foto"
                    onClick={onOpen}
                    className="text-white bg-gradient-to-r from-red-500 to-pink-700"
                  /> 

                  <AddPhotoModal
                    isOpen={isOpen}
                    onClose={onClose}                 
                  />
                </> : <></>
            }
          </NextLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle className="text-red-800 dark:text-red-500"/>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItemsDashboard.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="hover:dark:bg-red-500/50 hover:bg-red-900/50 rounded-lg">
              <Link
                color={"foreground"}
                href="#"
                size="lg"
                className="text-xl w-full p-3 px-4 flex gap-3"
              >
                { item.icon }
                <div className="flex flex-col">
                  <p>{item.label}</p>
                  <p className="text-base dark:text-gray-400 text-gray-700">Buenos deseos</p>
                </div>
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
