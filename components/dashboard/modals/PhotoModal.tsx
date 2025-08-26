"use client"

import { Avatar, Button, Modal, ModalBody, ModalContent, Textarea } from "@nextui-org/react"
import { Heart, MessageCircle, Send } from "lucide-react"

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoModal = ({ isOpen, onClose }: Props) => {

  return (
    <Modal isOpen={isOpen} size='4xl' onClose={onClose} backdrop='blur' classNames={{
      body: 'p-0'
    }}>
      <ModalContent>
        {
          onClose => (
            <>
              <ModalBody>
                <section className='grid grid-cols-5 '>
                  <div className='col-span-5 md:col-span-3'>
                    <img src="/banner-principal.jpg" alt="photo" className='w-full  min-h-[400px]'/>
                  </div>
                  <div className='col-span-5 md:col-span-2 flex flex-col justify-between'>
                    <article className='p-4'>
                      <div className='flex gap-2 items-center'>
                        <Avatar size='sm' color='danger' name='EGZ'/>

                        <div>
                          <h3 className='dark:text-white'>Emanuel Garcés Zuluaga</h3>
                          <p className='text-xs text-gray-500 dark:text-gray-300'>Ceremonia · Hace 5 horas</p>
                        </div>
                      </div>

                      <p className='text-[12px] mt-3 dark:text-gray-100'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia exercitationem quos quas aut ipsa. Nostrum tempore voluptate voluptatum quidem adipisci. Excepturi reprehenderit qui quas iste enim quibusdam quae error nobis.</p>
                    </article>

                    <section className='px-4 '>
                      <div className='flex gap-2 items-start justify-between'>
                        <div className='bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center p-2 text-[10px]'>
                          EGZ
                        </div>

                        <div className='flex flex-col'>
                          <p className='text-[11px] text-gray-500 dark:text-gray-300'><span className='text-[12px] font-semibold'>Emanuel Garcés Zuluaga</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias natus, unde libero dolore neque qui? Quis illo deleniti distinctio harum, libero itaque impedit consequatur consequuntur quidem autem aspernatur debitis quaerat!</p>
                          <div className='flex gap-2 text-[11px] text-gray-500 dark:text-gray-400 mt-1 font-semibold'>
                            <p>4 sem</p>
                            <p>10 Me gusta</p>
                            <p>Responder</p>
                          </div>
                        </div>

                        <Button isIconOnly radius='full' className='bg-transparent' size='sm'>
                          <Heart className='w-4 h-4'/>
                        </Button>
                      </div>
                    </section>

                    <section>

                      <div className='px-3'>
                        <Button isIconOnly radius='full' className='bg-transparent' size='sm'>
                          <Heart className='w-5 h-5 text-red-500'/>
                        </Button>
                        <Button isIconOnly radius='full' className='bg-transparent' size='sm'>
                          <MessageCircle className='w-5 h-5'/>
                        </Button>
                        <Button isIconOnly radius='full' className='bg-transparent' size='sm'>
                          <Send className='w-5 h-5'/>
                        </Button>
                      </div>

                      <div className='flex flex-col px-3 mt-1'>
                        <p className='text-[14px] dark:text-white'>Le gusta a 50 personas</p>
                        <p className='text-[12px] text-gray-500 dark:text-gray-400'>Ceremonia · Hace 5 horas</p>
                      </div>

                      <div className='flex items-center gap-1 justify-center mr-2'> 
                        <Textarea
                          placeholder='Agrega comentario'
                          variant='bordered'
                          minRows={1}
                          maxRows={3}
                          classNames={{
                            base: 'border-none',
                            inputWrapper: 'border-none shadow-none',
                            input: 'text-[14px] dark:text-gray-200'
                          }}
                        />
                        <Button isIconOnly className='bg-transparent' size='sm' radius='full' color='danger'>
                          <Send className='w-5 h-5 text-red-500'/>
                        </Button>
                      </div>
                    </section>
                  </div>
                </section>
              </ModalBody>
            </>
          )
        }
      </ModalContent>
    </Modal>  
  )
}
