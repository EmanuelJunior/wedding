"use client"

import { Button, Textarea } from "@nextui-org/react"
import { Lightbulb, MessageCircle, Send } from "lucide-react"

const ideaForMessages = [
  {
    title: 'Bendiciones',
    description: 'Que Dios bendiga su unión y les conceda una vida llena de amor, paz y felicidad.',
  },
  {
    title: 'Consejos',
    description: 'Recuerden siempre comunicarse con amor y paciencia. El matrimonio es una hermosa aventura.',
  },
  {
    title: 'Recuerdos',
    description: 'Desde que los conocí supe que estaban hechos el uno para el otro. ¡Qué alegría verlos llegar hasta aquí!',
  },
  {
    title: 'Futuro',
    description: 'Que su amor crezca cada día y que construyan juntos una familia llena de alegría.',
  },
]

const MessagePage = () => {
  return (
    <main className='mt-10 mx-10 sm:mx-16 md:mx-28 lg:mx-40'>
      <section className='dark:bg-gray-900 rounded-lg shadow-md flex-col justify-center items-center w-full mt-5 p-4'>
        <div className="flex gap-1 ">
          <MessageCircle className="text-red-700 dark:text-red-500  w-6 h-6"/>
          <h3 className="text-2xl dark:text-white ">Enviar un mensaje</h3>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-300 mb-4 font-extralight  ">Comparte tus mejores deseos para Emanuel y Vanessa</p>

        <Textarea 
          className="w-full" 
          classNames={{
            input: 'text-[13px]'
          }}
          placeholder="Escribe tu mensaje aqui... Comparte tus mejores deseos, recuerdos especiales o consejos para los novios." 
        />

        <div className="flex justify-between mt-4">
          <p className="text-xs dark:text-white">0/500 Caracteres</p>

          <Button color="danger" size="sm" startContent={<Send className="w-4 h-4"/>} className="text-white bg-gradient-to-r from-red-500 to-red-700 text-[11px]">
            Enviar Mensaje
          </Button>
        </div>
      </section>

      <section className="dark:bg-gray-900 rounded-lg shadow-md flex-col justify-center items-center w-full mt-6 p-4">
        <div className="flex gap-1">
          <Lightbulb className="text-red-700 dark:text-red-500  w-6 h-6"/>
          <h3 className="text-2xl dark:text-white ">Ideas para tu mensaje</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {
            ideaForMessages.map( ({ title, description }) => (
              <article className="col-span-1">
                <h5 className="text-xl dark:text-white">{ title }</h5>
                <p className="text-[12px] mt-2 dark:text-gray-300">"{ description }"</p>
              </article>
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default MessagePage