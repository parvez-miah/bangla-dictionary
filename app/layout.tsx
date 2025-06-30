import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Tiro_Bangla } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const tiroBangla = Tiro_Bangla({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["bengali", "latin"],
  display: "swap",
  variable: "--font-tiro-bangla",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bangla-dictionary.vercel.app"),
  title: {
    default: "বাংলা অভিধান - Comprehensive Bengali Dictionary | Learn Bengali Words",
    template: "%s | বাংলা অভিধান - Bengali Dictionary",
  },
  description:
    "Discover the beauty of Bengali language with our comprehensive dictionary. Search, learn, and explore thousands of Bengali words with meanings, pronunciations, examples, and etymology. Free online Bangla dictionary for students and language enthusiasts.",
  keywords: [
    "bangla dictionary",
    "bengali dictionary",
    "বাংলা অভিধান",
    "bengali words",
    "bangla meaning",
    "bengali language",
    "learn bengali",
    "bangla pronunciation",
    "bengali etymology",
    "online dictionary",
    "free dictionary",
    "language learning",
    "bengali grammar",
    "bangla vocabulary",
  ],
  authors: [{ name: "Bangla Dictionary Team" }],
  creator: "Bangla Dictionary",
  publisher: "Bangla Dictionary",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    url: "https://bangla-dictionary.vercel.app",
    siteName: "বাংলা অভিধান - Bengali Dictionary",
    title: "বাংলা অভিধান - Comprehensive Bengali Dictionary",
    description:
      "Discover the beauty of Bengali language with our comprehensive dictionary. Search, learn, and explore thousands of Bengali words with meanings, pronunciations, and examples.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "বাংলা অভিধান - Bengali Dictionary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "বাংলা অভিধান - Comprehensive Bengali Dictionary",
    description:
      "Discover the beauty of Bengali language with our comprehensive dictionary. Learn Bengali words with meanings, pronunciations, and examples.",
    images: ["/twitter-image.jpg"],
    creator: "@bangla_dictionary",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "education",
  classification: "Dictionary, Language Learning, Education",
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "বাংলা অভিধান - Bengali Dictionary",
  alternateName: "Bangla Dictionary",
  url: "https://bangla-dictionary.vercel.app",
  description:
    "Comprehensive Bengali dictionary with meanings, pronunciations, examples, and etymology for thousands of Bengali words.",
  inLanguage: ["bn", "en"],
  about: {
    "@type": "Language",
    name: "Bengali",
    alternateName: "Bangla",
    iso6391Code: "bn",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://bangla-dictionary.vercel.app/?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "Bangla Dictionary",
    url: "https://bangla-dictionary.com",
    logo: {
      "@type": "ImageObject",
      url: "https://bangla-dictionary.vercel.app/logo.png",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" className={`${inter.className} ${tiroBangla.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://bangla-dictionary.vercel.app" />
        <link rel="alternate" hrefLang="bn" href="https://bangla-dictionary.vercel.app" />
        <link rel="alternate" hrefLang="en" href="https://bangla-dictionary.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://bangla-dictionary.vercel.app" />
      </head>
      <body>{children}</body>
    </html>
  )
}
