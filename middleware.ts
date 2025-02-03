import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isValidLanguage, getDefaultLanguage } from '@/app/utils/language'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // If the pathname starts with /api or _next, ignore middleware
  if (pathname.startsWith('/api/') || pathname.startsWith('/_next/')) {
    return NextResponse.next()
  }

  // If accessing the root path, redirect to the default language
  if (pathname === '/') {
    const defaultLang = getDefaultLanguage()
    return NextResponse.redirect(new URL(`/${defaultLang}`, request.url))
  }

  // Check if the pathname starts with a valid language code
  const pathnameSegments = pathname.split('/')
  const langCode = pathnameSegments[1]

  // If the first segment is not a valid language code, redirect to default language
  if (!isValidLanguage(langCode)) {
    const defaultLang = getDefaultLanguage()
    return NextResponse.redirect(
      new URL(`/${defaultLang}${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|images|api).*)',
    // Optional: Add any other paths you want to run middleware on
    '/'
  ],
}
