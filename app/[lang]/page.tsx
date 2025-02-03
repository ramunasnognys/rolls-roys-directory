import React from 'react'
import { Metadata } from 'next'
import { Language, SERVICES } from '@/app/types'
import { generateHomeMetadata, generateSchemaMarkup } from '@/app/utils/seo'
import Hero from '@/app/components/Hero'

interface HomePageProps {
  params: {
    lang: Language
  }
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'it' }
  ]
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const metadata = generateHomeMetadata(params.lang)
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      languages: {
        'en': '/en',
        'it': '/it'
      }
    }
  }
}

const heroContent = {
  en: {
    title: 'Luxury Car Service in Campania',
    subtitle: 'Experience unparalleled luxury with our Rolls Royce Ghost 6.6 and professional chauffeur service',
    ctaText: 'Discover Our Services'
  },
  it: {
    title: 'Servizio Auto di Lusso in Campania',
    subtitle: 'Vivi un lusso senza pari con la nostra Rolls Royce Ghost 6.6 e il servizio autista professionale',
    ctaText: 'Scopri i Nostri Servizi'
  }
}

const serviceContent = {
  en: {
    title: 'Our Services',
    description: 'Choose from our premium chauffeur services'
  },
  it: {
    title: 'I Nostri Servizi',
    description: 'Scegli tra i nostri servizi di autista premium'
  }
}

export default function HomePage({ params: { lang } }: HomePageProps) {
  return (
    <>
      <Hero
        title={heroContent[lang].title}
        subtitle={heroContent[lang].subtitle}
        imageUrl="/images/rolls-royce-ghost.jpg"
        fullscreen
        lang={lang}
        ctaText={heroContent[lang].ctaText}
        ctaLink={`/${lang}#services`}
      />

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {serviceContent[lang].title}
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              {serviceContent[lang].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={`/${lang}/${service.slug[lang]}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <div className="h-64 bg-gray-200">
                    {/* Service image will be added here */}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.name[lang]}
                    </h3>
                    <p className="text-gray-200 line-clamp-2">
                      {service.description[lang]}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {lang === 'en' 
                  ? 'Why Choose Our Service?' 
                  : 'Perché Scegliere il Nostro Servizio?'}
              </h2>
              <ul className="space-y-4">
                {[
                  lang === 'en' 
                    ? 'Professional and experienced chauffeurs'
                    : 'Autisti professionali ed esperti',
                  lang === 'en'
                    ? 'Luxurious Rolls Royce Ghost 6.6'
                    : 'Lussuosa Rolls Royce Ghost 6.6',
                  lang === 'en'
                    ? 'Serving all of Campania region'
                    : 'Servizio in tutta la regione Campania',
                  lang === 'en'
                    ? 'Personalized service for your special occasions'
                    : 'Servizio personalizzato per le tue occasioni speciali'
                ].map((feature, index) => (
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
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/rolls-royce-interior.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSchemaMarkup(SERVICES[0], lang))
        }}
      />
    </>
  )
}
