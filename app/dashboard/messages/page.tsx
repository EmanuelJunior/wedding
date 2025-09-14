"use server"

import { getAllMessages } from "@/app/actions/message"
import { AddMessageForm, MessageCard } from "@/components/dashboard/"
import { ideasForMessages } from "@/data/dashboard"
import { Lightbulb } from "lucide-react"

const MessagePage = async() => {

  const messages = await getAllMessages();
  
  return (
    <main className='mt-10 mx-10 sm:mx-16 md:mx-28 lg:mx-40'>
      
      {/* Posible error aca */}
      <AddMessageForm/>

      <section className="dark:bg-gray-900 rounded-lg shadow-md flex-col justify-center items-center w-full mt-6 p-4">
        <div className="flex gap-1">
          <Lightbulb className="text-red-700 dark:text-red-500  w-6 h-6"/>
          <h3 className="text-2xl dark:text-white ">Ideas para tu mensaje</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {
            ideasForMessages.map( ({ title, description }) => (
              <article className="col-span-1">
                <h5 className="text-xl dark:text-white">{ title }</h5>
                <p className="text-[12px] mt-2 dark:text-gray-300">"{ description }"</p>
              </article>
            ))
          }
        </div>
      </section>

      <div className='mt-6'>
        <h1 className='text-2xl dark:text-white'>Mensajes de los Invitados</h1>

        {/* Card of guest to wedding */}
        <div className='gap-4 my-4 grid grid-cols-1 md:grid-cols-2 '>
          
          {/* Posible error aqui */}
          {/* {
            [... new Array(4)].map( (_, index) => (
              <MessageCard
                key={ index }
                fullName="Juan Pérez"
                message="¡Felicidades en su boda! Les deseo toda la felicidad del mundo en esta nueva etapa de sus vidas juntos."
                likes={5}
              />
            ))
          } */}

          {
            messages.map( ({ message, id }) => (
              <MessageCard
                key={ id }
                fullName="Invitado Anónimo"
                message={ message }
                likes={5}
              />
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default MessagePage