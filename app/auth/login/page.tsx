'use client'

import LoginContent from '@/components/auth/LoginContent'
import { Loading } from '@/components/ui'
import { Suspense } from 'react'

export default function LoginPage() {
  return (
    <Suspense fallback={<Loading/>}>
      <LoginContent />
    </Suspense>
  )
}
