import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Language, SERVICES, LOCATIONS, Service } from '@/app/types'
import { generateServiceMetadata, generateSchemaMarkup } from '@/app/utils/seo'
import Hero from '@/app/components/Hero'

interface ServicePageProps {
  params: {
    lang: Language
    service: string
  }
}

export async function generateStaticParams() {
  return SERVICES.flatMap((service) => [
    { lang: 'en', service: service.slug.en },
    { lang: 'it', service: service.slug.it }
  ])
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = SERVICES.find(s => 
    s.slug.en === params.service || s.slug.it === params.service
  )
  
  if (!service) return {}

  const metadata = generateServiceMetadata(service, params.lang)
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords
  }
}

const locationContent = {
  en: {
    title: 'Available in',
    cta: 'Book Now',
    features: [
      'Luxury Rolls Royce Ghost 6.6',
      'Professional chauffeur service',
      'Door-to-door service',
      'Complimentary water and refreshments',
      'Red carpet service (optional)',
      'Flexible scheduling'
    ]
  },
  it: {
    title: 'Disponibile a',
    cta: 'Prenota Ora',
    features: [
      'Lussuosa Rolls Royce Ghost 6.6',
      'Servizio autista professionale',
      'Servizio porta a porta',
      'Acqua e rinfreschi in omaggio',
      'Servizio tappeto rosso (opzionale)',
      'Programmazione flessibile'
    ]
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES.find(s => 
    s.slug.en === params.service || s.slug.it === params.service
  )

  if (!service) {
    notFound()
  }

  return (
    <div>
      <Hero
        title={service.name[params.lang]}
        subtitle={service.description[params.lang]}
        imageUrl={`/images/${service.id}-hero.jpg`}
        lang={params.lang}
        overlayOpacity="bg-black/60"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {locationContent[params.lang].title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LOCATIONS.map((location) => (
              <a
                key={location.slug}
                href={`/${params.lang}/${service.slug[params.lang]}/${location.slug}`}
                className="block group"
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gray-200">
                    {/* Location image placeholder */}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {location.city}
                    </h3>
                    <p className="text-gray-600">
                      {location.province}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/${service.id}-features.jpg')` }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {params.lang === 'en' ? 'Service Features' : 'Caratteristiche del Servizio'}
              </h2>
              <ul className="space-y-4">
                {locationContent[params.lang].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSchemaMarkup(service, params.lang))
        }}
      />
    </div>
  )
}
