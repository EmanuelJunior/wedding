"use client"

import { Countdown, HeaderDashboard, LiveStatistics, MyProfile, QuickActions, WeddingData } from "@/components/dashboard"
import { BookHeart, CalendarDays, Camera, Clock, GalleryHorizontal, Heart, MapPin, MessageCircle, Users } from "lucide-react"
import Link from "next/link"

const options = [
  {
    icon: <Camera className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Galeria",
    description: "Fotos especiales",
    path: 'gallery'
  },
  {
    icon: <MessageCircle className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Mensajes",
    description: "Buenos deseos",
    path: 'messages'
  },
  {
    icon: <Clock className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Timeline",
    description: "Cronograma",
    path: 'gallery'
  },
  {
    icon: <MapPin className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Mapa",
    description: "Ubicaciones",
    path: 'gallery'
  },
  {
    icon: <Users className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Invitados",
    description: "Lista",
    path: 'guest'
  },
  {
    icon: <BookHeart className="text-red-500 w-7 h-7 mb-2"/>,
    title: "Historia",
    description: "De Amor",
    path: 'gallery'
  },
]


const DashboardPage = () => {

  return (
    <main className="mx-10 sm:mx-16 md:mx-20 my-6 sm:my-10">
      <HeaderDashboard/>

      <section className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {
          options.map(({ icon, title, description, path }) => (
            <Link href={`/dashboard/${path}`}>
              <div className="p-3 hover:cursor-pointer hover:outline hover:outline-4 hover:outline-red-500 flex flex-col justify-center items-center shadow-2xl rounded-lg dark:bg-gray-900">
                { icon }
                <h1 className="text-2xl dark:text-white">{ title }</h1>
                <p className="text-xs text-gray-400">{ description }</p>
              </div>
            </Link>
          ))
        }
      </section>
      
      <div className="grid grid-cols-5 gap-5 mt-10">
        <section className="col-span-5 sm:col-span-3">
          <Countdown/>
          <WeddingData/>
        </section>
        <section className="col-span-5 sm:col-span-2 space-y-5">
          <MyProfile/>
          <LiveStatistics/>
          <QuickActions/>
        </section>
        
      </div>
    </main>
  )
}

export default DashboardPage

// "use client"

// import { Calendar, Clock, Mail, MapPin, Pin, PlayCircle, PauseCircle } from "lucide-react"
// import { useEffect, useRef, useState } from "react"

// const DashboardPage = () => {

//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   })

//   useEffect(() => {
//     const weddingDate = new Date('2024-12-18T01:00:00') // Asume que la boda es el 12 de diciembre de 2024 a las 4:00 PM
    
//     const timer = setInterval(() => {
//       const now = new Date()
//       const difference = weddingDate.getTime() - now.getTime()

//       setTimeLeft({
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       })
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="bg-red-50 dark:bg-red-900/30 py-4 px-3 sm:px-10 md:px-12 lg:px-16">
//       <h1 
//         className="text-center mx-auto mt-10 font-pinyon-script dark:text-red-500 text-red-800 text-3xl"
//       >
//         Nuestro Viaje hacia el altar
//       </h1>

//       <section className="flex flex-col md:flex-row justify-center gap-5 mt-5">

//         <div className="bg-white dark:bg-gray-900 p-4 shadow-xl rounded-lg w-full md:w-1/2">
//           <h2 className="text-red-800 font-cormorant dark:text-red-500 text-2xl">
//             Bienvenida a Nuestro Espacio Especial
//           </h2>

//           <p className="font-cormorant dark:text-white mt-2">
//             Mi amor, este es un lugar único creado solo para ti. Aquí encontrarás 60 cartas de amor, una para cada semana hasta nuestra boda. Cada carta contiene un mensaje especial, una foto de nosotros y una canción que me recuerda a ti.
//           </p>

//           <p className="font-cormorant dark:text-white mt-2">
//             Explora nuestros recuerdos, lee mis pensamientos y siente todo el amor que tengo por ti. Este es nuestro viaje hacia el altar, documentado semana a seman. Te amo más de lo que las palabras pueden expresar.
//           </p>
//         </div>

//         {/* Aqui debe ir la sección extra */}

//         <section className="bg-white p-4 rounded-lg shadow-xl w-1/2 flex flex-wrap">
//           <h2 className="font-cormorant dark:text-red-500 text-red-800 text-2xl w-full">Datos de nuestro amor</h2>
          
//           {
//             [...new Array(6)].map( (_, i) => (
//               <div className="flex items-center gap-2 w-1/2">

//                 <div className="bg-red-100 rounded-full p-2 w-8 h-8">
//                   <Calendar className="w-4 h-4 dark:text-red-500 text-red-800"/>
//                 </div>

//                 <div className="flex flex-col font-cormorant text-xs">
//                   <p className="font-sans">Dias Juntos</p>
//                   <p className="font-sans font-bold">730</p>
//                 </div>
//               </div>
//             ))
//           }

//         </section>
        
//       </section>


//       <section className="flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
//         <div className="bg-white w-full md:w-3/4 dark:bg-gray-900 p-4 shadow-xl rounded-lg">
//           <h2 className="text-red-800 font-cormorant text-center dark:text-red-500 text-2xl">
//             Cuenta regresiva proxima carta
//           </h2>

//           <section className="py-3">
//             <div className="mx-auto text-center">
//               <div className="flex justify-center space-x-5">
//                 {Object.entries(timeLeft).map(([unit, value]) => (
//                   <div key={unit} className="text-center">
//                     <div className="text-3xl font-extrabold dark:text-red-500 text-red-800">{value}</div>
//                     <div className="text-xs text-red-800 dark:text-red-500 capitalize">{unit}</div>
//                   </div>
//                 ))}
//               </div>
//               <p className="mt-3 text-xs sm:text-sm dark:text-white">11 de diciembre, 2024 - 18:00 pm</p>
//             </div>
//           </section>
//         </div>
//         <div className="bg-white w-full md:w-1/3 dark:bg-gray-900 p-4 shadow-xl rounded-lg">
//           <h2 className="text-red-800 font-cormorant dark:text-red-500 text-2xl">
//             Detalles de la boda
//           </h2>

//           <div className="flex flex-col gap-1 mt-2">
//             <div className="flex gap-1 items-center">
//               <Calendar className="dark:text-red-500 text-red-800 w-5 h-5"/>
//               <p className="text-base font-cormorant dark:text-white">
//                 <span className="font-bold dark:text-red-500 text-red-800">Fecha: </span>
//                 Nos casamos el 09 de noviembre, 2025 
//               </p>
//             </div>

//             <div className="flex gap-1 items-center">
//               <Clock className="dark:text-red-500 text-red-800 w-5 h-5"/>
//               <p className="text-base font-cormorant dark:text-white">
//                 <span className="font-bold dark:text-red-500 text-red-800">Hora: </span>
//                 La ceremonia comienza a las 16:00 pm 
//               </p>
//             </div>

//             <div className="flex gap-1 items-center">
//               <MapPin className="dark:text-red-500 text-red-800 w-5 h-5"/>
//               <p className="text-base font-cormorant dark:text-white">
//                 <span className="font-bold dark:text-red-500 text-red-800">Ubicación: </span>
//                 Copacabana Salon Frances
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default DashboardPage