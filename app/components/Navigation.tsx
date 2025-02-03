import React from 'react'
import Link from 'next/link'
import { Language, SERVICES } from '@/app/types'

interface NavigationProps {
  lang: Language
}

const navigationLabels = {
  en: {
    home: 'Home',
    services: 'Services',
    contact: 'Contact'
  },
  it: {
    home: 'Home',
    services: 'Servizi',
    contact: 'Contatti'
  }
}

export default function Navigation({ lang }: NavigationProps) {
  const labels = navigationLabels[lang]

  return (
    <nav className="flex items-center space-x-8">
      <Link 
        href={`/${lang}`}
        className="text-gray-900 hover:text-gray-600 font-medium"
      >
        {labels.home}
      </Link>
      
      <div className="relative group">
        <button 
          className="text-gray-900 hover:text-gray-600 font-medium inline-flex items-center"
        >
          {labels.services}
          <svg 
            className="ml-2 h-4 w-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </button>
        
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/${lang}/${service.slug[lang]}`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {service.name[lang]}
            </Link>
          ))}
        </div>
      </div>

      <Link
        href={`/${lang}/contact`}
        className="text-gray-900 hover:text-gray-600 font-medium"
      >
        {labels.contact}
      </Link>
    </nav>
  )
}
