import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://scam.ai'
  
  // Main pages
  const routes = [
    '',
    '/products',
    '/products/vision-detection',
    '/products/audio-detection',
    '/products/scam-database',
    '/resources',
    '/resources/documentation',
    '/resources/security-compliance',
    '/pricing',
    '/company',
    '/contact',
    '/news',
    '/demo',
    '/privacy',
    '/terms',
    '/cookies',
  ]

  // Supported locales
  const locales = ['en', 'es', 'pt', 'ja', 'ko', 'zh-TW', 'id']

  const sitemap: MetadataRoute.Sitemap = []

  // Add all routes for all locales
  routes.forEach(route => {
    locales.forEach(locale => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route.includes('/products') ? 0.9 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${baseUrl}/${l}${route}`])
          )
        }
      })
    })
  })

  return sitemap
}
