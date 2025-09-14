'use client'

import { addMessageForm } from "@/app/actions/message";
import { GuestContext } from "@/contexts/guest";
import { Button, Textarea } from "@nextui-org/react";
import { MessageCircle, Send } from "lucide-react";
import { useContext } from "react";

export const AddMessageForm = () => {

  const { auth } = useContext(GuestContext);

  return (
    <form action={(formData) => addMessageForm(formData, auth?.id ?? undefined)} className="dark:bg-gray-900 rounded-lg shadow-md flex-col justify-center items-center w-full mt-5 p-4">
      <div className="flex gap-1 ">
        <MessageCircle className="text-red-700 dark:text-red-500  w-6 h-6" />
        <h3 className="text-2xl dark:text-white ">Enviar un mensaje</h3>
      </div>

      <p className="text-xs text-gray-400 dark:text-gray-300 mb-4 font-extralight  ">
        Comparte tus mejores deseos para Emanuel y Vanessa
      </p>

      <Textarea
        className="w-full"
        classNames={{
          input: "text-[13px]",
        }}
        name="message"
        placeholder="Escribe tu mensaje aqui... Comparte tus mejores deseos, recuerdos especiales o consejos para los novios."
      />

      <div className="flex justify-between mt-4">
        <p className="text-xs dark:text-white">0/500 Caracteres</p>

        <Button
          color="danger"
          size="sm"
          type="submit"
          startContent={<Send className="w-4 h-4" />}
          className="text-white bg-gradient-to-r from-red-500 to-red-700 text-[11px]"
        >
          Enviar Mensaje
        </Button>
      </div>
    </form>
  );
};
