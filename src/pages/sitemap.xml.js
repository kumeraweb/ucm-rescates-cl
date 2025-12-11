export async function GET() {
  const baseUrl = 'https://www.rescatesmedicos.cl' // Cambia esto cuando tengas el dominio final

  const pages = ['', '/ucm-telefono', '/planes-ucm', '/rescate-medico-ucm']

  const urls = pages
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
  ${urls}
</urlset>
`

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
