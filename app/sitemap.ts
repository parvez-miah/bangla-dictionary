import type { MetadataRoute } from "next"
import { dictionaryData } from "@/lib/dictionary-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bangla-dictionary.vercel.app"

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
  ]

  // Dynamic word pages
  const wordPages = dictionaryData.map((word) => ({
    url: `${baseUrl}/word/${word.english}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...wordPages]
}
