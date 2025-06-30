import type { Metadata } from "next"
import HomePageClient from "./components/bangla-dictionary-client-page"

export const metadata: Metadata = {
  title: "বাংলা অভিধান - Comprehensive Bengali Dictionary | Learn Bengali Words Online",
  description:
    "Discover the beauty of Bengali language with our comprehensive dictionary. Search, learn, and explore thousands of Bengali words with meanings, pronunciations, examples, and etymology. Perfect for students, teachers, and Bengali language enthusiasts.",
  keywords: [
    "bangla dictionary",
    "bengali dictionary",
    "বাংলা অভিধান",
    "bengali words",
    "bangla meaning",
    "bengali language learning",
    "learn bengali online",
    "bangla pronunciation",
    "bangla etymology",
    "free online dictionary",
    "bengali vocabulary",
    "bangla grammar",
    "bengali language course",
    "dictionary bangla to english",
    "english to bangla dictionary",
  ],
  openGraph: {
    title: "বাংলা অভিধান - Comprehensive Bengali Dictionary",
    description:
      "Discover the beauty of Bengali language with our comprehensive dictionary. Search, learn, and explore thousands of Bengali words with meanings, pronunciations, and examples.",
    url: "https://bangla-dictionary.vercel.app",
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "বাংলা অভিধান - Bengali Dictionary Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "বাংলা অভিধান - Comprehensive Bengali Dictionary",
    description:
      "Discover the beauty of Bengali language with our comprehensive dictionary. Learn Bengali words with meanings, pronunciations, and examples.",
    images: ["/twitter-home.jpg"],
  },
  alternates: {
    canonical: "https://bangla-dictionary.vercel.app",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
