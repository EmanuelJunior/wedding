'use client';

import { MapPin, Clock, Calendar, Phone, X, Church, PartyPopper } from 'lucide-react';
import { motion } from 'framer-motion';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export const KeyDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    titleModal: ''
  });
  const [activeView, setActiveView] = useState('map'); // 'map' o 'images'

  const details = [
    { icon: Calendar, title: 'Fecha', content: 'Nos casamos el 11 de Octubre, 2025' },
    { icon: Clock, title: 'Hora', content: 'La ceremonia comienza a las 2:00 pm' },
    
    {
      icon: Church,
      title: 'Eucaristia',
      content: 'Capilla Sagrada Familia',
      link: 'https://maps.app.goo.gl/Wkk1iuE6CXxzvrxHA',
      modalContent: (
        <div className="text-gray-700 dark:text-white space-y-4 font-cormorant font-semibold text-lg">
          <div className="flex items-center space-x-2">
            <Church className="w-5 h-5 text-red-700 dark:text-red-500" />
            <p>Dirección: Capilla Sagrada Familia, Vista Hermosa, El Santuario, Antioquia</p>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-red-700 dark:text-red-500" />
            <p>Contacto: +57 304 473 2196 o +57 301 697 2311</p>
          </div>
          {/* <p>
            Instrucciones: Al llegar, dirígete a la entrada principal y sigue las señales hacia el salón de eventos.
          </p> */}
          <div className="flex justify-center space-x-4 mt-4">
            <Button
              variant={activeView === 'map' ? 'solid' : 'flat'}
              onClick={() => setActiveView('map')}
              className={`${activeView === 'map' ? 'bg-red-700 dark:bg-red-500 text-white' : ' text-red-700 dark:text-red-500'} text-lg`}
            >
              Mapa
            </Button>
            <Button
              variant={activeView === 'images' ? 'solid' : 'flat'}
              onClick={() => setActiveView('images')}
              className={`${activeView === 'images' ? 'bg-red-700 dark:bg-red-500 text-white' : ' text-red-700 dark:text-red-500'} text-lg`}
            >
              Imágenes
            </Button>
          </div>
          {activeView === 'map' && (
            <div className="h-[300px] w-full mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.872684237836!2d-75.26685018930247!3d6.147796427389287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46a10000b2392f%3A0xf3f7d87575ebd99e!2sCapilla%20Sagrada%20Familia!5e0!3m2!1ses!2sco!4v1755484780172!5m2!1ses!2sco"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          )}
          {activeView === 'images' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {[
                'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqqYVHJmTV6rJiAefMgUwPJxtlj4Ka_m3Jpry0Rtr-GBsuhAruL_Ii1bgw9AdnZGklCw85Uwu2crEYGaiLkp4N_LFotQaOvpwSIBmU0Eqdik2qY_OKwRorIc2uPGBA3C0BqM8LeJg=s1360-w1360-h1020-rw',
                'https://i.ibb.co/sJgqFqmH/Imagen-de-Whats-App-2025-08-18-a-las-19-43-55-43faadb1.jpg',
                'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npB8P83LL7aGZqB4x10L2Ia44tDDVGhCCyhPxZPYW1vRh3iwhW-CSOdsLPxZN0PFg5pGrBPgTgw8xI7MZ1uSFoF38zN-pIBtGxWn9TO4yWLIZWA19XWW_4F8kgYNrLM0uV76vsE=w203-h203-k-no',
                'https://cdn0.matrimonio.com.co/vendor/8372/3_2/960/jpeg/boda-4_10_168372-171593137585826.jpeg',
                'https://cdn0.matrimonio.com.co/vendor/8372/3_2/960/jpeg/boda-3_10_168372-171593135858140.jpeg',
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Imagen ${index + 1} del Jardín Botánico`}
                  className="w-full h-auto rounded-2xl shadow-xl transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:brightness-110"
                />
              ))}
            </div>
          )}
        </div>
      ),
    },
    {
      icon: PartyPopper,
      title: 'Recepción',
      content: 'Salon Social Apartamentos Olivar',
      link: 'https://maps.app.goo.gl/pFgoGhoyBL1WYCvc6',
      modalContent: (
        <div className="text-gray-700 dark:text-white space-y-4 font-cormorant font-semibold text-lg">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-red-700 dark:text-red-500" />
            <p>Dirección: Apartamentos Olivar, Cra.60a #62-02, Rionegro, Antioquia</p>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-red-700 dark:text-red-500" />
            <p>Contacto: +57 304 473 2196 o +57 301 697 2311</p>
          </div>
          <p>
            Instrucciones: Al llegar, dirígete a la entrada principal y sigue las señales hacia el salón de eventos.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button
              variant={activeView === 'map' ? 'solid' : 'flat'}
              onClick={() => setActiveView('map')}
              className={`${activeView === 'map' ? 'bg-red-700 dark:bg-red-500 text-white' : ' text-red-700 dark:text-red-500'} text-lg`}
            >
              Mapa
            </Button>
            <Button
              variant={activeView === 'images' ? 'solid' : 'flat'}
              onClick={() => setActiveView('images')}
              className={`${activeView === 'images' ? 'bg-red-700 dark:bg-red-500 text-white' : ' text-red-700 dark:text-red-500'} text-lg`}
            >
              Imágenes
            </Button>
          </div>
          {activeView === 'map' && (
            <div className="h-[300px] w-full mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.75778131969!2d-75.37725428930236!3d6.163184927219586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469fa64ff94ad5%3A0x2a434d4ad2d0f217!2sOlivar%20Apartamentos!5e0!3m2!1ses!2sco!4v1755484875389!5m2!1ses!2sco"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          )}
          {activeView === 'images' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {[
                'https://s3.amazonaws.com/cdn.contex.com.co/wp-content/uploads/2024/04/OlivarAvanceMarzo2024-10.jpg',
                'https://s3.amazonaws.com/cdn.contex.com.co/wp-content/uploads/2023/11/Olivar_Apartamentos_Rionegro_Sector_Milla_Fontibo%CC%81n_Porteria.jpg',
                'https://dobleelearquitectos.com/wp-content/uploads/2017/01/PARQUEADEROS-ATARDECER.jpg',
                'https://s3.amazonaws.com/cdn.contex.com.co/wp-content/uploads/2024/02/Olivar-01-junio2024.jpg',
                'https://s3.amazonaws.com/cdn.contex.com.co/wp-content/uploads/2024/02/Olivar-13-junio2024.jpg',
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Imagen ${index + 1} del Jardín Botánico`}
                  className="w-full h-auto rounded-2xl shadow-xl transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:brightness-110"
                />
              ))}
            </div>
          )}
        </div>
      ),
    },
  ];

  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const visibleDetails = useMemo(() => {

    console.log(type)

    if (type === 'alone') {
      return details.filter(detail => detail.title !== 'Recepción');
    }

    return details;
  }, [type]);


  const openModal = (titleModal: string) => 
    setIsModalOpen({ isOpen: true, titleModal }); 
  
  const closeModal = () => 
    setIsModalOpen({ isOpen: false, titleModal: ''});

  return (
    <section className={`px-5 py-14 relative ${(type !== 'alone' && type !== 'all') && 'hidden'}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-12 text-red-700 dark:text-red-500 font-bold drop-shadow-lg">Detalles Clave</h2>
        <div className={`grid grid-cols-1 ${type === 'alone' ? 'md:grid-cols-3' : 'md:grid-cols-4' } gap-3`}>
          {visibleDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-8 rounded-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <detail.icon className="w-16 h-16 text-red-700 dark:text-red-500 mb-4" />
              <h3 className="text-3xl text-red-700  dark:text-red-500 font-semibold mb-2 ">{detail.title}</h3>
              <p className="mb-2 text-gray-700 dark:text-white">{detail.content}</p>
              {detail.link && detail.modalContent && (
                <Button 
                  size='sm' 
                  radius='full' 
                  color='danger' 
                  className="font-cormorant text-base font-extrabold bg-gradient-to-tr dark:from-red-500 dark:to-red-400 from-red-700 to-red-900 px-6 py-3 text-white" 
                  onClick={() => openModal(detail.title)}
                >
                  Ver Ubicación
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen.isOpen}
        onClose={closeModal}
        scrollBehavior="outside"
        size="2xl"
        className="rounded-none rounded-lg shadow-lg"
      >
        <ModalContent>
          <ModalHeader>
            <h3 className="text-red-700 dark:text-red-500 font-bold text-3xl text-center mx-auto">
              Detalles de la { isModalOpen.titleModal ?? 'Ubicación' }
            </h3>
          </ModalHeader>
          <ModalBody className="p-4 space-y-4">
            {details.find((detail) => detail.title === isModalOpen.titleModal)?.modalContent}
          </ModalBody>
          <ModalFooter>
            <Button
              variant="flat"
              color="danger"
              onClick={closeModal}
              radius='full'
              className='bg-gradient-to-r dark:from-red-500 dark:to-red-600 dark:text-white from-red-700 to-red-900 text-white font-cormorant text-lg'
              startContent={<X/>}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};
