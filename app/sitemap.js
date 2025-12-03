export default async function sitemap() {
  const baseUrl = 'https://asianimpex.com' // Replace with your actual domain
  
  // Fetch all products from categories.json
  const response = await fetch(`${baseUrl}/categories.json`)
  const categories = await response.json()
  
  // Extract all products
  const productUrls = []
  categories.forEach(category => {
    category.subcategories?.forEach(subcategory => {
      subcategory.products?.forEach(product => {
        productUrls.push({
          url: `${baseUrl}/product/${product.id}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        })
      })
    })
  })
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/aboutUs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/shipping`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
  
  return [...staticPages, ...productUrls]
}
