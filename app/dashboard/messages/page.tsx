"use client"

import { AddMessageForm } from "@/components/dashboard/"
import { ideasForMessages } from "@/data/dashboard"
import { Button, Textarea } from "@nextui-org/react"
import { Lightbulb, MessageCircle, Send } from "lucide-react"

const MessagePage = () => {
  return (
    <main className='mt-10 mx-10 sm:mx-16 md:mx-28 lg:mx-40'>
      
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
    </main>
  )
}

export default MessagePage