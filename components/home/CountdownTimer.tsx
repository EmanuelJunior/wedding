'use client'

import { useState, useEffect } from 'react'

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date('2025-10-11T14:00:00') // Asume que la boda es el 12 de diciembre de 2024 a las 4:00 PM
    
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
    <section className="py-16 bg-gold-100 section-padding">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl mb-8 text-red-700 dark:text-red-500 font-light">Cuenta Regresiva para Unir Nuestras Vidas Ante Los Ojos De Dios</h2>
        <div className="flex justify-center space-x-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-4xl sm:text-5xl font-extrabold dark:text-red-500 text-red-700">{value}</div>
              <div className="text-base sm:text-lg text-red-700 dark:text-red-500 capitalize">{unit}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-base sm:text-lg dark:text-white">11 de octubre, 2025 - 14:00 pm</p>
      </div>
    </section>
  )
}

