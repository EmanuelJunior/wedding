"use client"

import { Avatar, Input, Tab, Tabs } from "@nextui-org/react"
import { CheckCircle, CircleX, Clock, Search, UserCheck2, UserRoundX, Users } from "lucide-react"

const statistics = [
  {
    icon: <Users className='w-7 h-7 text-blue-700 dark:text-blue-500'/>,
    count: 8,
    title: 'Total de Invitados',
  },
  {
    icon: <UserCheck2 className='w-7 h-7 text-green-700 dark:text-green-500'/>,
    count: 32,
    title: 'Confirmados',
  },
  {
    icon: <Clock className='w-7 h-7 text-yellow-700 dark:text-yellow-500'/>,
    count: 48,
    title: 'Pendientes',
  },
  {
    icon: <UserRoundX className='w-7 h-7 text-red-700 dark:text-red-500'/>,
    count: 98,
    title: 'No asisten',
  },
]

const GuestPage = () => {
  return (
    <main className='mt-10 mx-10 md:mx-16 lg:mx-24'>
      <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 '>
        {
          statistics.map(({ icon, count, title }) => (
            <div className="p-3 hover:cursor-pointer gap-2 flex flex-col justify-center items-center shadow-2xl rounded-lg dark:bg-gray-900">
              { icon }
              <h1 className="text-xl dark:text-white font-extrabold font-serif">{ count }</h1>
              <p className="text-xs text-gray-400">{ title }</p>
            </div>
          ))
        }
      </section>

      <section className='dark:bg-gray-900 rounded-lg shadow-md p-4 grid grid-cols-8 justify-center items-center w-full gap-3 mt-5'>
        <div className='col-span-9 md:col-span-2 lg:col-span-5'>
          <Input
            placeholder='Buscar Invitado...'
            startContent={<Search className='text-red-500'/>}
            size='sm'
          />
        </div>

        <div className='col-span-9 md:col-span-7 lg:col-span-3'>
          <Tabs size='sm' className='w-full' color='danger'>
            <Tab key='Todos' title='Todos'/>
            <Tab key='Confirmados' title='Confirmados'/>
            <Tab key='Pendiente' title='Pendiente'/>
            <Tab key='No asisten' title='No asisten'/>
          </Tabs>
        </div>
      </section>

      <section className='dark:bg-gray-900 rounded-lg shadow-md p-4 flex-col justify-center items-center w-full mt-5 space-y-3'>
        <h3 className="text-2xl dark:text-white mb-4">Invitados (8)</h3>
        
        {
          [... new Array(6)].map(_ => (
            <article className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 flex justify-between">
              <div className="flex items-center justify-center gap-2">
                <Avatar size='md' color='danger' name='Ema'/>
                
                <div className="flex flex-col items-start justify-center">
                  <h6 className="text-xl dark:text-white">Ana Garcia</h6>
                  <p className="text-gray-400 text-[11px]">304 473 2196</p>
                </div>
              </div>
            </article>
          ))
        }
      </section>

      <section className='dark:bg-gray-900 rounded-lg shadow-md p-4 flex-col justify-center items-center w-full mt-5 space-y-3'>
        <h3 className="text-2xl dark:text-white mb-4">Distribución por mesas</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            [... new Array(8)].map(_ => (
              <article className="border border-gray-300 dark:border-gray-700 p-3 rounded-md col-span-1">
                <h5 className="text-xl dark:text-white">Mesa 1</h5>

                <p className="text-[11.5px] text-gray-400 dark:text-gray-300 mb-3">2 Invitados confirmados</p>

                <div className="flex flex-col dark:text-gray-200">
                  <span className="text-[10px] flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500"/> Ana Garcia</span>
                  <span className="text-[10px] flex items-center gap-1"><Clock className="w-3 h-3 text-yellow-500"/> Ana Garcia</span>
                  <span className="text-[10px] flex items-center gap-1"><CircleX className="w-3 h-3 text-red-500"/> Roberto Silva</span>

                </div>
              </article>
            ))
          }
        </div>
      </section>


    </main>
  )
}

export default GuestPage