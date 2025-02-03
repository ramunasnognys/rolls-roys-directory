export type Language = 'en' | 'it'

export interface Service {
  id: string
  name: {
    en: string
    it: string
  }
  slug: {
    en: string
    it: string
  }
  description: {
    en: string
    it: string
  }
}

export interface Location {
  region: string
  city: string
  slug: string
  province: string
}

export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
}

export interface ServiceLocation {
  service: Service
  location: Location
  metadata: {
    en: SEOMetadata
    it: SEOMetadata
  }
}

// Constants
export const LANGUAGES: Language[] = ['en', 'it']

export const SERVICES: Service[] = [
  {
    id: 'birthdays',
    name: {
      en: 'Birthday Celebrations',
      it: 'Celebrazioni di Compleanno'
    },
    slug: {
      en: 'birthday-celebrations',
      it: 'celebrazioni-compleanno'
    },
    description: {
      en: 'Make your birthday truly special with our luxury Rolls Royce Ghost 6.6 and professional chauffeur service',
      it: 'Rendi il tuo compleanno davvero speciale con la nostra lussuosa Rolls Royce Ghost 6.6 e il servizio autista professionale'
    }
  },
  {
    id: 'weddings',
    name: {
      en: 'Wedding Services',
      it: 'Servizi Matrimoniali'
    },
    slug: {
      en: 'wedding-services',
      it: 'servizi-matrimoniali'
    },
    description: {
      en: 'Arrive in style on your special day with our elegant Rolls Royce Ghost and experienced chauffeur',
      it: 'Arriva con stile nel tuo giorno speciale con la nostra elegante Rolls Royce Ghost e autista esperto'
    }
  },
  {
    id: 'private-parties',
    name: {
      en: 'Private Parties',
      it: 'Feste Private'
    },
    slug: {
      en: 'private-parties',
      it: 'feste-private'
    },
    description: {
      en: 'Elevate your private events with our premium Rolls Royce chauffeur service',
      it: 'Eleva i tuoi eventi privati con il nostro servizio autista Rolls Royce premium'
    }
  }
]

export const LOCATIONS: Location[] = [
  { region: 'Campania', city: 'Avellino', province: 'Province of Avellino', slug: 'avellino' },
  { region: 'Campania', city: 'Ariano Irpino', province: 'Province of Avellino', slug: 'ariano-irpino' },
  { region: 'Campania', city: 'Montoro', province: 'Province of Avellino', slug: 'montoro' },
  { region: 'Campania', city: 'Benevento', province: 'Province of Benevento', slug: 'benevento' },
  { region: 'Campania', city: 'Montesarchio', province: 'Province of Benevento', slug: 'montesarchio' },
  { region: 'Campania', city: 'San Giorgio del Sannio', province: 'Province of Benevento', slug: 'san-giorgio-del-sannio' },
  { region: 'Campania', city: 'Caserta', province: 'Province of Caserta', slug: 'caserta' },
  { region: 'Campania', city: 'Aversa', province: 'Province of Caserta', slug: 'aversa' },
  { region: 'Campania', city: 'Marcianise', province: 'Province of Caserta', slug: 'marcianise' },
  { region: 'Campania', city: 'Salerno', province: 'Province of Salerno', slug: 'salerno' },
  { region: 'Campania', city: 'Cava de\' Tirreni', province: 'Province of Salerno', slug: 'cava-de-tirreni' },
  { region: 'Campania', city: 'Battipaglia', province: 'Province of Salerno', slug: 'battipaglia' },
  { region: 'Campania', city: 'Naples', province: 'Metropolitan City of Naples', slug: 'naples' },
  { region: 'Campania', city: 'Giugliano in Campania', province: 'Metropolitan City of Naples', slug: 'giugliano-in-campania' },
  { region: 'Campania', city: 'Torre del Greco', province: 'Metropolitan City of Naples', slug: 'torre-del-greco' }
]
