import { Language, LANGUAGES } from '../types'

export function isValidLanguage(lang: string): lang is Language {
  return LANGUAGES.includes(lang as Language)
}

export function getDefaultLanguage(): Language {
  return 'en'
}

export function getAlternateLanguageLinks(path: string): { lang: Language; url: string }[] {
  // Remove any existing language prefix
  const pathWithoutLang = path.replace(/^\/[a-z]{2}\//, '/')
  
  return LANGUAGES.map(lang => ({
    lang,
    url: `/${lang}${pathWithoutLang}`
  }))
}
