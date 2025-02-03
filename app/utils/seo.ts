import { Service, Location, Language, SEOMetadata } from '../types'

const BRAND_NAME = {
  en: 'Luxury Rolls Royce Service',
  it: 'Servizio Rolls Royce di Lusso'
}

const REGION_NAME = {
  en: 'Campania',
  it: 'Campania'
}

export function generateServiceMetadata(
  service: Service,
  lang: Language,
  location?: Location
): SEOMetadata {
  const brandName = BRAND_NAME[lang]
  const regionName = REGION_NAME[lang]
  
  if (location) {
    return {
      title: `${service.name[lang]} in ${location.city} | ${brandName}`,
      description: lang === 'en'
        ? `Luxury ${service.name[lang].toLowerCase()} service with Rolls Royce Ghost 6.6 and professional chauffeur in ${location.city}, ${location.province}. Premium car service for your special occasion.`
        : `Servizio di lusso per ${service.name[lang].toLowerCase()} con Rolls Royce Ghost 6.6 e autista professionale a ${location.city}, ${location.province}. Servizio auto premium per la tua occasione speciale.`,
      keywords: [
        service.name[lang],
        location.city,
        location.province,
        'Rolls Royce Ghost',
        'chauffeur',
        'luxury car',
        lang === 'en' ? 'wedding car' : 'auto matrimonio',
        lang === 'en' ? 'luxury service' : 'servizio di lusso'
      ]
    }
  }

  return {
    title: `${service.name[lang]} in ${regionName} | ${brandName}`,
    description: lang === 'en'
      ? `Premium ${service.name[lang].toLowerCase()} service across ${regionName}. Luxury Rolls Royce Ghost 6.6 with professional chauffeur for your special events.`
      : `Servizio premium per ${service.name[lang].toLowerCase()} in ${regionName}. Lussuosa Rolls Royce Ghost 6.6 con autista professionale per i tuoi eventi speciali.`,
    keywords: [
      service.name[lang],
      regionName,
      'Rolls Royce Ghost',
      'chauffeur',
      'luxury car',
      lang === 'en' ? 'wedding car' : 'auto matrimonio',
      lang === 'en' ? 'luxury service' : 'servizio di lusso'
    ]
  }
}

export function generateHomeMetadata(lang: Language): SEOMetadata {
  return {
    title: lang === 'en'
      ? `${BRAND_NAME[lang]} in ${REGION_NAME[lang]} | Luxury Car with Driver`
      : `${BRAND_NAME[lang]} in ${REGION_NAME[lang]} | Auto di Lusso con Autista`,
    description: lang === 'en'
      ? `Experience luxury with our Rolls Royce Ghost 6.6 chauffeur service in ${REGION_NAME[lang]}. Perfect for weddings, birthdays, and private events.`
      : `Vivi il lusso con il nostro servizio autista Rolls Royce Ghost 6.6 in ${REGION_NAME[lang]}. Perfetto per matrimoni, compleanni ed eventi privati.`,
    keywords: [
      'Rolls Royce Ghost',
      'luxury car',
      'chauffeur service',
      REGION_NAME[lang],
      lang === 'en' ? 'wedding car' : 'auto matrimonio',
      lang === 'en' ? 'private events' : 'eventi privati',
      lang === 'en' ? 'luxury service' : 'servizio di lusso'
    ]
  }
}

export function generateSchemaMarkup(
  service: Service,
  lang: Language,
  location?: Location
) {
  const baseUrl = lang === 'en' ? 'https://yourwebsite.com/en' : 'https://yourwebsite.com/it'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name[lang],
    description: service.description[lang],
    provider: {
      '@type': 'LocalBusiness',
      name: BRAND_NAME[lang],
      image: '/images/rolls-royce-ghost.jpg',
      priceRange: '$$$',
      areaServed: location 
        ? `${location.city}, ${location.province}`
        : REGION_NAME[lang],
    },
    serviceType: 'Luxury Car Service',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 40.8518,  // Campania region approximate center
        longitude: 14.2681
      },
      geoRadius: '100000'
    }
  }
}

export function generateCanonicalUrl(
  service: Service,
  lang: Language,
  location?: Location
): string {
  const baseUrl = 'https://yourwebsite.com'
  const serviceSlug = service.slug[lang]
  
  if (location) {
    return `${baseUrl}/${lang}/${serviceSlug}/${location.slug}`
  }
  
  return `${baseUrl}/${lang}/${serviceSlug}`
}
