'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Language, LANGUAGES } from '@/app/types'

interface LanguageSwitcherProps {
  currentLang: Language
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLang: Language) => {
    const newPath = pathname.replace(`/${currentLang}/`, `/${newLang}/`)
    router.push(newPath)
  }

  return (
    <div className="flex gap-2">
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            currentLang === lang
              ? 'bg-gray-900 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          aria-current={currentLang === lang}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
