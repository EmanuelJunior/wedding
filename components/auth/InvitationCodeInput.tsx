'use client'

import React, { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react'

interface Props {
  onComplete: (code: string) => void;
  setCode: Dispatch<SetStateAction<string[]>>;
  code: string[];
}

export const InvitationCodeInput: React.FC<Props> = ({ onComplete, code, setCode }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  useEffect(() => {
    if (code.every(digit => digit !== '')) {
      onComplete(code.join(''))
    }
  }, [code, onComplete])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste events
      const pastedValue = value.slice(0, 6).split('')
      const newCode = [...code]
      pastedValue.forEach((char, i) => {
        if (index + i < 6) {
          newCode[index + i] = char
        }
      })
      setCode(newCode)
      const nextEmptyIndex = newCode.findIndex((digit, i) => i > index && digit === '')
      if (nextEmptyIndex !== -1) {
        inputRefs.current[nextEmptyIndex]?.focus()
      } else {
        inputRefs.current[Math.min(index + pastedValue.length, 5)]?.focus()
      }
    } else {
      // Handle single digit input
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)
      if (index < 5) {
        inputRefs.current[index + 1]?.focus()
        inputRefs.current[index + 1]?.select()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault()
      const newCode = [...code]
      newCode[index] = ''
      setCode(newCode)
      if (index > 0) {
        inputRefs.current[index - 1]?.focus()
        inputRefs.current[index - 1]?.select()
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault()
      inputRefs.current[index - 1]?.focus()
      inputRefs.current[index - 1]?.select()
    } else if (e.key === 'ArrowRight' && index < 5) {
      e.preventDefault()
      inputRefs.current[index + 1]?.focus()
      inputRefs.current[index + 1]?.select()
    }
  }

  const handleFocus = (index: number) => {
    inputRefs.current[index]?.select()
  }

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(el: HTMLInputElement | null) => { inputRefs.current[index] = el }}
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          value={digit}
          onChange={e => handleChange(index, e.target.value)}
          onKeyDown={e => handleKeyDown(index, e)}
          onFocus={() => handleFocus(index)}
          className="w-12 h-14 text-center text-2xl border-[3px] border-gray-300 rounded-md focus:border-red-800 focus:dark:border-red-500 dark:text-white focus:outline-none font-serif"
          aria-label={`Dígito ${index + 1} del código de invitación`}
        />
      ))}
    </div>
  )
}