import React from 'react'
import { Language } from '../types'

interface HeroProps {
  title: string
  subtitle: string
  imageUrl: string
  fullscreen?: boolean
  overlayOpacity?: string
  className?: string
  lang: Language
  ctaText?: string
  ctaLink?: string
}

export default function Hero({
  title,
  subtitle,
  imageUrl,
  fullscreen = false,
  overlayOpacity = 'bg-black/50',
  className = '',
  lang,
  ctaText,
  ctaLink
}: HeroProps) {
  return (
    <div className={`relative ${fullscreen ? 'h-screen' : 'h-[60vh]'} ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={`absolute inset-0 ${overlayOpacity}`} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8">
            {subtitle}
          </p>
          {ctaText && ctaLink && (
            <a
              href={ctaLink}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:text-lg"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
