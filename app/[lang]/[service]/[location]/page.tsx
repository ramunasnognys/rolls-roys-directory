import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Language, SERVICES, LOCATIONS } from '@/app/types'
import { generateServiceMetadata, generateSchemaMarkup } from '@/app/utils/seo'
import Hero from '@/app/components/Hero'

interface LocationPageProps {
  params: {
    lang: Language
    service: string
    location: string
  }
}

export async function generateStaticParams() {
  return SERVICES.flatMap((service) => 
    LOCATIONS.flatMap((location) => [
      { 
        lang: 'en',
        service: service.slug.en,
        location: location.slug
      },
      {
        lang: 'it',
        service: service.slug.it,
        location: location.slug
      }
    ])
  )
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const service = SERVICES.find(s => 
    s.slug.en === params.service || s.slug.it === params.service
  )
  const location = LOCATIONS.find(l => l.slug === params.location)
  
  if (!service || !location) return {}

  const metadata = generateServiceMetadata(service, params.lang, location)
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords
  }
}

const getFeatureBlocks = (service: string, location: string, lang: Language) => {
  const isWedding = service.includes('wedding') || service.includes('matrimonial')
  const isBirthday = service.includes('birthday') || service.includes('compleanno')
  const isParty = service.includes('part')

  return [
    // Block 1: Overview
    {
      title: lang === 'en' ? 'Luxury Service Overview' : 'Panoramica del Servizio di Lusso',
      content: lang === 'en'
        ? `Experience unparalleled luxury with our premium Rolls Royce Ghost 6.6 service in ${location}. Our professional chauffeur service ensures a memorable journey for your special occasion.`
        : `Vivi un lusso senza pari con il nostro servizio premium Rolls Royce Ghost 6.6 a ${location}. Il nostro servizio di autista professionale garantisce un viaggio memorabile per la tua occasione speciale.`
    },
    // Block 2: Vehicle Features
    {
      title: lang === 'en' ? 'Rolls Royce Ghost Features' : 'Caratteristiche Rolls Royce Ghost',
      content: lang === 'en'
        ? 'Experience the epitome of luxury with our Rolls Royce Ghost 6.6. Features include premium leather interiors, advanced climate control, ambient lighting, and state-of-the-art entertainment system.'
        : 'Sperimenta l\'apice del lusso con la nostra Rolls Royce Ghost 6.6. Le caratteristiche includono interni in pelle premium, climatizzazione avanzata, illuminazione ambientale e sistema di intrattenimento all\'avanguardia.'
    },
    // Block 3: Service Area
    {
      title: lang === 'en' ? 'Service Coverage' : 'Area di Servizio',
      content: lang === 'en'
        ? `Our luxury car service covers all areas in and around ${location}. We provide convenient pick-up and drop-off services at your preferred locations within the region.`
        : `Il nostro servizio di auto di lusso copre tutte le aree di ${location} e dintorni. Forniamo comodi servizi di ritiro e consegna nei luoghi preferiti della regione.`
    },
    // Block 4: Occasion-specific content
    {
      title: isWedding
        ? lang === 'en' ? 'Wedding Day Excellence' : 'Eccellenza nel Giorno del Matrimonio'
        : isBirthday
        ? lang === 'en' ? 'Birthday Celebration Specials' : 'Speciali Celebrazioni di Compleanno'
        : lang === 'en' ? 'Private Event Services' : 'Servizi per Eventi Privati',
      content: isWedding
        ? lang === 'en'
          ? 'Make your wedding day truly special with our premium car service. We offer red carpet service, champagne service, and special wedding decorations for the vehicle.'
          : 'Rendi il tuo giorno del matrimonio davvero speciale con il nostro servizio auto premium. Offriamo servizio tappeto rosso, servizio champagne e decorazioni speciali per il veicolo.'
        : isBirthday
        ? lang === 'en'
          ? 'Celebrate your birthday in style with our luxury car service. We can arrange special birthday decorations and create a memorable experience.'
          : 'Festeggia il tuo compleanno con stile con il nostro servizio auto di lusso. Possiamo organizzare decorazioni speciali per il compleanno e creare un\'esperienza memorabile.'
        : lang === 'en'
          ? 'Perfect for private events and special occasions. Our service adds an element of luxury and sophistication to any gathering.'
          : 'Perfetto per eventi privati e occasioni speciali. Il nostro servizio aggiunge un elemento di lusso e sofisticatezza a qualsiasi incontro.'
    },
    // Block 5: Chauffeur Service
    {
      title: lang === 'en' ? 'Professional Chauffeur Service' : 'Servizio Autista Professionale',
      content: lang === 'en'
        ? 'Our experienced chauffeurs are professionally trained, punctual, and dedicated to providing exceptional service. They ensure your comfort and safety throughout the journey.'
        : 'I nostri autisti esperti sono professionalmente addestrati, puntuali e dedicati a fornire un servizio eccezionale. Garantiscono comfort e sicurezza durante tutto il viaggio.'
    },
    // Block 6: Booking Process
    {
      title: lang === 'en' ? 'Easy Booking Process' : 'Processo di Prenotazione Semplice',
      content: lang === 'en'
        ? 'Booking our luxury car service is simple and straightforward. Contact us to discuss your requirements, and we\'ll tailor our service to meet your needs.'
        : 'Prenotare il nostro servizio auto di lusso è semplice e diretto. Contattaci per discutere le tue esigenze e adatteremo il nostro servizio per soddisfarle.'
    },
    // Block 7: Additional Services
    {
      title: lang === 'en' ? 'Complementary Services' : 'Servizi Complementari',
      content: lang === 'en'
        ? 'Enjoy complimentary refreshments, Wi-Fi service, and personalized music playlists. We can also arrange additional services upon request.'
        : 'Goditi rinfreschi gratuiti, servizio Wi-Fi e playlist musicali personalizzate. Possiamo anche organizzare servizi aggiuntivi su richiesta.'
    }
  ]
}

export default function LocationPage({ params }: LocationPageProps) {
  const service = SERVICES.find(s => 
    s.slug.en === params.service || s.slug.it === params.service
  )
  const location = LOCATIONS.find(l => l.slug === params.location)

  if (!service || !location) {
    notFound()
  }

  const featureBlocks = getFeatureBlocks(params.service, location.city, params.lang)

  return (
    <div>
      <Hero
        title={`${service.name[params.lang]} in ${location.city}`}
        subtitle={service.description[params.lang]}
        imageUrl={`/images/${service.id}-${location.slug}.jpg`}
        lang={params.lang}
        overlayOpacity="bg-black/60"
      />

      {featureBlocks.map((block, index) => (
        <section 
          key={index}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 0 ? '' : 'lg:grid-flow-col-dense lg:grid-cols-2'
            }`}>
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {block.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {block.content}
                </p>
              </div>
              <div 
                className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${
                  index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/images/${service.id}-block-${index + 1}.jpg')` }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSchemaMarkup(service, params.lang, location))
        }}
      />
    </div>
  )
}
