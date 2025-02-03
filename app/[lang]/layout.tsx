import React from 'react'
import { notFound } from 'next/navigation'
import { Language } from '@/app/types'
import { isValidLanguage } from '@/app/utils/language'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'
import Navigation from '@/app/components/Navigation'

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'it' }
  ]
}

interface LanguageLayoutProps {
  children: React.ReactNode
  params: {
    lang: string
  }
}

export default function LanguageLayout({ children, params }: LanguageLayoutProps) {
  if (!isValidLanguage(params.lang)) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Navigation lang={params.lang as Language} />
            <LanguageSwitcher currentLang={params.lang as Language} />
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-gray-400">
            {params.lang === 'en' 
              ? '© 2024 Luxury Rolls Royce Service. All rights reserved.'
              : '© 2024 Servizio Rolls Royce di Lusso. Tutti i diritti riservati.'}
          </p>
        </div>
      </footer>
    </div>
  )
}
