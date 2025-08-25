'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { BadgeCheck, Heart } from 'lucide-react'
import { InvitationCodeInput } from '@/components'

export default function LoginContent() {
  const [invitationCode, setInvitationCode] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [nextStep, setNextStep] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const code = searchParams.get('code')
    if (code && code.length === 6) {
      animateCodeInput(code)
    }
  }, [searchParams]);

  useEffect(() => {
    const emailForParams = searchParams.get('email');

    if (emailForParams && nextStep) {
      animateEmailInput(emailForParams)
    }
  }, [nextStep]);

  const animateEmailInput = (emailForParams: string) => {
    const emailInputArray = emailForParams.split('');

    emailInputArray.forEach((digit, index) => {
      setTimeout(() => {
        setEmail(prevEmail => {
          const newEmail = [...prevEmail.split('')];
          newEmail[index] = digit;
          return newEmail.join('');
        })
      }, index * 50)

      if (index === emailInputArray.length - 1) {
        setTimeout(() => {
          setShowSuccess(true);
        }, (index + 1) * 50 + 100); // Wait for the last character to be set, plus a little extra time
      }
    })
    
  }

  const animateCodeInput = (code: string) => {
    const codeArray = code.split('')
    codeArray.forEach(async (digit, index) => {
      setTimeout(async () => {
        setInvitationCode(prevCode => {
          const newCode = [...prevCode]
          newCode[index] = digit
          return newCode
        })
      }, index * 70) // 70ms delay entre cada dígito

      if ( index === codeArray.length -1 )
        setTimeout(() => {
          setNextStep(true)
        }, 420)
    });
    
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
        <div className="w-full max-w-md space-y-4 text-center">
          <div className="space-y-4">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-800 dark:text-red-500 mx-auto" />
            <h1 className="font-pinyon-script text-3xl sm:text-4xl lg:text-5xl text-red-800 dark:text-red-500">
              Emanuel y Vanessa
            </h1>
            <h2 className="font-cormorant dark:text-white text-2xl lg:text-3xl">
              ¡Nos Casamos!
            </h2>

            {
              !showSuccess ? (
                <p className="font-cormorant dark:text-gray-300 text-gray-600 text-lg">
                  Ingresa el codigo de invitación para acceder a los detalles de nuestra boda
                </p>
              ) : (
                <p className="font-cormorant dark:text-gray-300 text-gray-600 text-lg">
                  Has iniciado correctamente, 🌸 Un instante por favor... estamos preparando la invitación para ti
                </p>
              )
            }
          </div>

          {
            !nextStep ? (
              <div className="space-y-6 ">
                <InvitationCodeInput
                  onComplete={handleComplete}
                  code={invitationCode}
                  setCode={setInvitationCode}
                />

                {error && (
                  <p className="text-[#AA1E2D] text-sm">{error}</p>
                )}
              </div>
            ) : (
              <>
                {
                  showSuccess ? (
                    <div className='flex justify-center'>
                      <BadgeCheck className='w-16 h-16 text-red-700 dark:text-red-500 animate-pulse'/>
                    </div>
                  ) : (
                    <input 
                      type='text' 
                      placeholder='xxxxx@wedding.com' 
                      className='focus:dark:border-red-500 focus:border-red-700 outline-none font-serif rounded-lg border-[3px] px-3 py-2 text-2xl dark:text-white'
                      value={email}
                    />
                  )
                }
              </>
            )
          }



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
