import React from 'react'
import { Metadata } from 'next'
import { Language } from '../../types'

interface ContactPageProps {
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

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const title = params.lang === 'en'
    ? 'Contact Us | Luxury Rolls Royce Service'
    : 'Contattaci | Servizio Rolls Royce di Lusso'

  const description = params.lang === 'en'
    ? 'Get in touch with our luxury car service in Campania. Book our Rolls Royce Ghost 6.6 with professional chauffeur for your special occasion.'
    : 'Contatta il nostro servizio auto di lusso in Campania. Prenota la nostra Rolls Royce Ghost 6.6 con autista professionale per la tua occasione speciale.'

  return {
    title,
    description,
    alternates: {
      languages: {
        'en': '/en/contact',
        'it': '/it/contact'
      }
    }
  }
}

const contactContent = {
  en: {
    title: 'Contact Us',
    subtitle: 'Get in Touch',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    hours: 'Business Hours',
    hoursContent: 'Monday - Sunday: 8:00 AM - 10:00 PM',
    form: {
      name: 'Your Name',
      email: 'Your Email',
      phone: 'Your Phone',
      service: 'Select Service',
      date: 'Preferred Date',
      message: 'Your Message',
      submit: 'Send Message'
    }
  },
  it: {
    title: 'Contattaci',
    subtitle: 'Mettiti in Contatto',
    phone: 'Telefono',
    email: 'Email',
    address: 'Indirizzo',
    hours: 'Orari di Apertura',
    hoursContent: 'Lunedì - Domenica: 8:00 - 22:00',
    form: {
      name: 'Il tuo Nome',
      email: 'La tua Email',
      phone: 'Il tuo Telefono',
      service: 'Seleziona Servizio',
      date: 'Data Preferita',
      message: 'Il tuo Messaggio',
      submit: 'Invia Messaggio'
    }
  }
}

export default function ContactPage({ params: { lang } }: ContactPageProps) {
  const content = contactContent[lang]

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-gray-500 mb-12">
              {content.subtitle}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {content.phone}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  <a 
                    href="tel:+39123456789" 
                    className="hover:text-gray-600"
                  >
                    +39 123 456 789
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {content.email}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  <a 
                    href="mailto:info@luxuryrolls.com" 
                    className="hover:text-gray-600"
                  >
                    info@luxuryrolls.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {content.address}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Via Example Street, 123<br />
                  80100 Naples, Italy
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {content.hours}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {content.hoursContent}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-0">
            <form className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  {content.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder={content.form.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  {content.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder={content.form.email}
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  {content.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder={content.form.phone}
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  {content.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder={content.form.message}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center w-full py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {content.form.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
