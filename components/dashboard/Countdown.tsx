"use client"

import { useEffect, useState } from "react"

export const Countdown = () => {

    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  
    useEffect(() => {
      const weddingDate = new Date('2025-11-09T13:00:00') // Asume que la boda es el 12 de diciembre de 2024 a las 4:00 PM
      
      const timer = setInterval(() => {
        const now = new Date()
        const difference = weddingDate.getTime() - now.getTime()
  
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }, 1000)
  
      return () => clearInterval(timer)
    }, [])

  return (
    <div className="bg-gradient-to-r from-red-500 to-red-700/50 dark:from-red-900/50 dark:to-red-600/50 p-8 rounded-lg shadow-2xl">

      <h2 className="text-center mb-4 text-3xl text-red-200 dark:text-white">Cuenta regrasiva</h2>

      <div className="flex justify-evenly ">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-gray-100">{value}</div>
            <div className="text-sm sm:text-base text-red-200 dark:text-red-500 font-semibold capitalize">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
