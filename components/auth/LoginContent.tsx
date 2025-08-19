'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Heart } from 'lucide-react'
import { InvitationCodeInput } from '@/components'

export default function LoginContent() {
  const [invitationCode, setInvitationCode] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    const code = searchParams.get('code')
    if (code && code.length === 6) {
      animateCodeInput(code)
    }
  }, [searchParams])

  const animateCodeInput = (code: string) => {
    const codeArray = code.split('')
    codeArray.forEach((digit, index) => {
      setTimeout(() => {
        setInvitationCode(prevCode => {
          const newCode = [...prevCode]
          newCode[index] = digit
          return newCode
        })
      }, index * 70) // 70ms delay entre cada dígito
    })
  }

  const handleComplete = async (code: string) => {
    if (code.length !== 6) {
      setError('Por favor ingresa un código válido')
      return
    }
    // Aquí validarías el código de invitación
    console.log('Código de invitación:', code)
    setError('')
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Image Section */}
      <div className="hidden lg:block relative group">
        <Image
          src="/banner-login.jpg"
          alt="Boda"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent" />
      </div>

      {/* Login Section */}
      <div className="flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md space-y-8 text-center">
          <div className="space-y-4">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-800 dark:text-red-500 mx-auto" />
            <h1 className="font-pinyon-script text-3xl sm:text-4xl lg:text-5xl text-red-800 dark:text-red-500">
              Emanuel y Vanessa
            </h1>
            <h2 className="font-cormorant dark:text-white text-2xl lg:text-3xl">
              ¡Nos Casamos!
            </h2>
            <p className="font-cormorant dark:text-gray-300 text-gray-600 text-lg">
              Ingresa tu código de invitación para acceder a los detalles de nuestra boda
            </p>
          </div>

          <div className="space-y-6">
            <InvitationCodeInput
              onComplete={handleComplete}
              code={invitationCode}
              setCode={setInvitationCode}
            />

            {error && (
              <p className="text-[#AA1E2D] text-sm">{error}</p>
            )}
          </div>

          <div className="pt-4">
            <p className="font-cormorant dark:text-gray-300 text-red-800 text-base">
              ¿Necesitas ayuda? Contacta a los novios
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
