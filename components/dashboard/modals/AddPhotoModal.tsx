"use client"


import { Avatar, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Textarea } from "@nextui-org/react"
import { Heart, MessageCircle, Send, Upload } from "lucide-react"
import { ChangeEvent, useRef, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const categories = [
  {
    key: 1,
    label: 'Amigos'
  },
  {
    key: 2,
    label: 'Familia'
  },
  {
    key: 3,
    label: 'Ceremonia'
  },
  {
    key: 4,
    label: 'Recepción'
  },
  {
    key: 5, 
    label: 'Preparativos'
  }
]

export const AddPhotoModal = ({ isOpen, onClose }: Props) => {

      const fileInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setFileName("");
      setImageSrc(null);
      return;
    }
    setFileName(file.name);

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => setImageSrc(ev.target?.result as string);
      reader.readAsDataURL(file);
    } else {
      setImageSrc(null);
    }
  };

  return (
<Modal isOpen={isOpen} size='xl' onClose={onClose} backdrop='blur' scrollBehavior="inside">
      <ModalContent>
        {
          onClose => (
            <>
              <ModalHeader className="font-extrabold text-xl dark:text-white">Subir Nueva Foto</ModalHeader>
              <ModalBody>

              <div className="flex flex-col space-y-2 w-full">
                {/* Input container */}
                <div
                  className="flex items-center bg-gray-100 dark:bg-[#27272a]   rounded-lg px-4 py-3 cursor-pointer"
                  onClick={() => fileInput.current && fileInput.current.click()}
                >
                  <input
                    type="file"
                    className="hidden"
                    ref={fileInput}
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                  <span className="text-gray-500 dark:text-[#a1a1aa] text-sm">
                    Seleccionar archivo
                  </span>
                  <span className="ml-3 text-gray-700 text-sm truncate max-w-[110px]">
                    {fileName}
                  </span>
                </div>
                {/* Vista previa */}
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt="Vista previa"
                    className="mt-1 rounded-lg border bg-gray-100  object-cover"
                  />
                )}
              </div>


                <Select label='Categoria'>
                  {
                    categories.map(({ key, label }) => (
                      <SelectItem key={key}>{label}</SelectItem>
                    ))
                  }
                </Select>

                <Textarea
                  isRequired
                  className="w-full"
                  label="Descripción"
                  labelPlacement="inside"
                  placeholder="Escribe una descipción"
                />
              </ModalBody>
              <ModalFooter className="grid grid-cols-4">
                <Button size='sm' color="danger" startContent={<Upload className="w-4 h-4"/>} className="col-span-3">
                  Subir Foto
                </Button>
                
                <Button size='sm' variant="bordered" className="col-span-1" onClick={onClose}>
                  Cancelar
                </Button>
              </ModalFooter>
            </>
          )
        }
      </ModalContent>
    </Modal>  
  )
}
