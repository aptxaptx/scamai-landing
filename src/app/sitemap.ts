import { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'
import { getPublishedNewsletters } from '@/lib/db/newsletters'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://scam.ai'

  // Static pages
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
    '/about',
    '/contact',
    '/news',
    '/demo',
    '/msa',
    '/privacy',
    '/terms',
    '/cookies',
    '/newsletter',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add static routes for all locales
  routes.forEach(route => {
    locales.forEach(locale => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route.includes('/products') ? 0.9 : 0.7,
        alternates: {
          languages: {
            ...Object.fromEntries(
              locales.map(l => [l, `${baseUrl}/${l}${route}`])
            ),
            'x-default': `${baseUrl}/en${route}`,
          }
        }
      })
    })
  })

  // Add dynamic newsletter pages
  try {
    const newsletters = await getPublishedNewsletters()
    newsletters.forEach(nl => {
      locales.forEach(locale => {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/newsletter/${nl.id}`,
          lastModified: new Date(nl.date),
          changeFrequency: 'monthly',
          priority: 0.6,
          alternates: {
            languages: {
              ...Object.fromEntries(
                locales.map(l => [l, `${baseUrl}/${l}/newsletter/${nl.id}`])
              ),
              'x-default': `${baseUrl}/en/newsletter/${nl.id}`,
            }
          }
        })
      })
    })
  } catch {
    // DB unavailable during build — skip dynamic entries
  }

  return sitemapEntries
}
