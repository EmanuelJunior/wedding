"use client"

import { PhotoModal } from '@/components/dashboard'
import { PhotoCard } from '@/components/dashboard/cards/PhotoCard'
import { AddPhotoModal } from '@/components/dashboard/modals/AddPhotoModal'
import { Button, Input, Select, SelectItem, Tab, Tabs, useDisclosure } from '@nextui-org/react'
import { Grid3x3, Heart, Image, List, MessageCircle, Search, Star } from 'lucide-react'
import React from 'react'

const statisticsGallery = [
  {
    icon: <Image className='w-7 h-7 text-blue-700 dark:text-blue-500'/>,
    count: 88,
    title: 'Fotos Totales',
  },
  {
    icon: <Heart className='w-7 h-7 text-red-700 dark:text-red-500'/>,
    count: 32,
    title: 'Me gusta',
  },
  {
    icon: <MessageCircle className='w-7 h-7 text-green-700 dark:text-green-500'/>,
    count: 48,
    title: 'Comentarios',
  },
  {
    icon: <Star className='w-7 h-7 text-yellow-700 dark:text-yellow-500'/>,
    count: 98,
    title: 'Visitas',
  },
]

const GalleryPhotosPage = () => {

  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <main className='mt-10 mx-10 md:mx-16 lg:mx-24'>
      <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 '>
        {
          statisticsGallery.map(({ icon, count, title }) => (
            <div className="p-3 hover:cursor-pointer gap-2 flex flex-col justify-center items-center shadow-2xl rounded-lg dark:bg-gray-900">
              { icon }
              <h1 className="text-xl dark:text-white font-extrabold font-serif">{ count }</h1>
              <p className="text-xs text-gray-400">{ title }</p>
            </div>
          ))
        }
      </section>

      <section className='dark:bg-gray-900 rounded-lg shadow-md p-4 grid grid-cols-9 justify-center items-center w-full gap-3 mt-5'>
        <div className='col-span-9 md:col-span-2 lg:col-span-2'>
          <Input
            placeholder='Buscar Fotos, autores o etiquetas'
            startContent={<Search className='text-red-500'/>}
            size='sm'
          />
        </div>

        <div className='col-span-9 md:col-span-7 lg:col-span-4'>
          <Tabs size='sm' className='w-full' color='danger'>
            <Tab key='All' title='Todas'/>
            <Tab key='Ceremony' title='Ceremonia'/>
            <Tab key='Reception' title='Recepción'/>
            <Tab key='Preparatives' title='Preparativos'/>
            <Tab key='Family' title='Familia'/>
            <Tab key='Friends' title='Amigos'/>
          </Tabs>
        </div>

        <div className='col-span-9 lg:col-span-3 flex gap-3'>

          <div className='flex flex gap-2'>
            <Button isIconOnly size='sm' color='danger' onPress={onOpen}>
              <Grid3x3 className='w-3 h-3'/>
            </Button>

            <Button isIconOnly size='sm' color='danger'>
              <List className='w-3 h-3'/>
            </Button>
          </div>

          <Select size='sm' className='text-xs'>
            <SelectItem key='last'>Más recientes</SelectItem>
            <SelectItem key='popular'>Más populares</SelectItem>
            <SelectItem key='author'>Por autor</SelectItem>
          </Select>
        </div>
      </section>

      <section className='my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        
        {
          [... new Array(10)].map(_ => (
            <PhotoCard onOpen={onOpen}/>
          ))
        }

      </section>

      {/* <PhotoModal
        isOpen={isOpen}
        onClose={onClose}
      /> */}

      <AddPhotoModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </main>
  )
}

export default GalleryPhotosPage