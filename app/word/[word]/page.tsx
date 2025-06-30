import { notFound } from "next/navigation"
import { ArrowLeft, BookOpen, Volume2, Star, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getWordByEnglish, dictionaryData } from "@/lib/dictionary-data"
import type { Metadata } from "next"

interface WordPageProps {
  params: {
    word: string
  }
}

export async function generateStaticParams() {
  return dictionaryData.map((word) => ({
    word: word.english,
  }))
}

export async function generateMetadata({ params }: WordPageProps): Promise<Metadata> {
  const word = getWordByEnglish(params.word)

  if (!word) {
    return {
      title: "Word Not Found - বাংলা অভিধান",
      description:
        "The requested Bengali word was not found in our dictionary. Search for other Bengali words and their meanings.",
      openGraph: {
        title: "Word Not Found - বাংলা অভিধান",
        description: "The requested Bengali word was not found in our dictionary.",
        url: `https://bangla-dictionary.vercel.app/word/${params.word}`,
      },
      twitter: {
        card: "summary",
        title: "Word Not Found - বাংলা অভিধান",
        description: "The requested Bengali word was not found in our dictionary.",
      },
    }
  }

  const synonymsText = word.synonyms.length > 0 ? ` Synonyms: ${word.synonyms.join(", ")}.` : ""
  const categoriesText = word.categories.length > 0 ? ` Categories: ${word.categories.join(", ")}.` : ""

  return {
    title: `${word.bangla} (${word.english}) - Meaning, Pronunciation & Examples`,
    description: `Learn the meaning of ${word.bangla} (${word.english}) in Bengali. ${word.definition} Pronunciation: ${word.pronunciation}.${synonymsText}${categoriesText} Part of speech: ${word.partOfSpeech}.`,
    keywords: [
      word.bangla,
      word.english,
      word.pronunciation,
      `${word.english} meaning in bengali`,
      `${word.bangla} meaning`,
      `${word.english} pronunciation`,
      `bengali ${word.partOfSpeech}`,
      ...word.synonyms,
      ...word.categories,
      "bangla dictionary",
      "bengali dictionary",
      "learn bengali",
    ],
    openGraph: {
      title: `${word.bangla} (${word.english}) - Bengali Dictionary`,
      description: `Learn the meaning of ${word.bangla} (${word.english}): ${word.definition}`,
      type: "article",
      url: `https://bangla-dictionary.vercel.app/word/${word.english}`,
      images: [
        {
          url: `/og-word-${word.english}.jpg`,
          width: 1200,
          height: 630,
          alt: `${word.bangla} (${word.english}) - Bengali Dictionary`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${word.bangla} (${word.english}) - Bengali Dictionary`,
      description: `Learn the meaning of ${word.bangla} (${word.english}): ${word.definition}`,
      images: [`/twitter-word-${word.english}.jpg`],
    },
    alternates: {
      canonical: `https://bangla-dictionary.vercel.app/word/${word.english}`,
    },
  }
}

export default function WordPage({ params }: WordPageProps) {
  const word = getWordByEnglish(params.word)

  if (!word) {
    notFound()
  }

  const relatedWords = dictionaryData
    .filter(
      (w) =>
        w.id !== word.id &&
        (w.categories.some((cat) => word.categories.includes(cat)) || w.partOfSpeech === word.partOfSpeech),
    )
    .slice(0, 6)

  const difficultyColor = {
    beginner: "bg-green-100 text-green-700",
    intermediate: "bg-yellow-100 text-yellow-700",
    advanced: "bg-red-100 text-red-700",
  }

  const frequencyColor = {
    common: "bg-blue-100 text-blue-700",
    uncommon: "bg-orange-100 text-orange-700",
    rare: "bg-purple-100 text-purple-700",
  }

  // Structured data for the word
  const wordJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: word.bangla,
    alternateName: word.english,
    description: word.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "বাংলা অভিধান - Bengali Dictionary",
      url: "https://bangla-dictionary.vercel.app",
    },
    termCode: word.english,
    url: `https://bangla-dictionary.vercel.app/word/${word.english}`,
    inLanguage: "bn",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "pronunciation",
        value: word.pronunciation,
      },
      {
        "@type": "PropertyValue",
        name: "partOfSpeech",
        value: word.partOfSpeech,
      },
      {
        "@type": "PropertyValue",
        name: "difficulty",
        value: word.difficulty,
      },
      {
        "@type": "PropertyValue",
        name: "frequency",
        value: word.frequency,
      },
    ],
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bangla-dictionary.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${word.bangla} (${word.english})`,
        item: `https://bangla-dictionary.vercel.app/word/${word.english}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wordJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3" aria-label="বাংলা অভিধান - Bengali Dictionary Home">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
                  <BookOpen className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-tiro-bangla">
                    বাংলা অভিধান
                  </h1>
                  <p className="text-sm text-gray-600">Bangla Dictionary</p>
                </div>
              </Link>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  <Globe className="h-3 w-3 mr-1" aria-hidden="true" />
                  {dictionaryData.length} Words
                </Badge>
              </div>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-2">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-900" aria-current="page">
              {word.bangla} ({word.english})
            </li>
          </ol>
        </nav>

        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="mb-6 hover:bg-blue-50" aria-label="Go back to dictionary home">
              <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
              Back to Dictionary
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Word Content */}
            <main className="lg:col-span-2 space-y-6">
              {/* Word Header */}
              <Card className="border-0 bg-gradient-to-r from-blue-50 to-green-50">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-5xl font-bold text-blue-600 mb-3 font-tiro-bangla" id="main-word">
                        {word.bangla}
                      </CardTitle>
                      <CardDescription className="text-2xl font-medium text-gray-700 mb-2">
                        {word.english}
                      </CardDescription>
                      <div className="flex items-center space-x-2 text-lg text-gray-600">
                        <Volume2 className="h-5 w-5" aria-hidden="true" />
                        <span className="font-tiro-bangla" aria-label={`Pronunciation: ${word.pronunciation}`}>
                          /{word.pronunciation}/
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge
                        className={difficultyColor[word.difficulty]}
                        aria-label={`Difficulty level: ${word.difficulty}`}
                      >
                        {word.difficulty}
                      </Badge>
                      <Badge
                        className={frequencyColor[word.frequency]}
                        aria-label={`Usage frequency: ${word.frequency}`}
                      >
                        {word.frequency}
                      </Badge>
                      <Badge variant="outline" aria-label={`Part of speech: ${word.partOfSpeech}`}>
                        {word.partOfSpeech}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Definition */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Definition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-lg">{word.definition}</p>
                </CardContent>
              </Card>

              {/* Example */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic text-lg font-tiro-bangla">{word.example}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Etymology */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">Etymology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{word.etymology}</p>
                </CardContent>
              </Card>

              {/* Special link for "all" word */}
              {word.english === "all" && (
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-blue-800">Additional Resources</h4>
                      <p className="text-gray-700 leading-relaxed">
                        The word "সব" (all) is one of the most fundamental words in Bengali language, used extensively
                        in daily conversations and literature. For a more comprehensive analysis of this word including
                        advanced usage patterns, historical context, and linguistic variations across different Bengali
                        dialects, you can explore our detailed study at{" "}
                        <a
                          href="https://bangla-dictionary.com/word/all"
                          target="_blank"
                          className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                        >
                          All Meaning at Bangla Dictionary
                        </a>
                        . This comprehensive resource provides in-depth grammatical analysis and cultural significance
                        of the word in Bengali literature.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </main>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Synonyms */}
              {word.synonyms.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">Synonyms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Synonyms">
                      {word.synonyms.map((synonym, index) => (
                        <Badge key={index} variant="secondary" className="text-sm font-tiro-bangla" role="listitem">
                          {synonym}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Antonyms */}
              {word.antonyms.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">Antonyms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Antonyms">
                      {word.antonyms.map((antonym, index) => (
                        <Badge key={index} variant="destructive" className="text-sm font-tiro-bangla" role="listitem">
                          {antonym}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Word categories">
                    {word.categories.map((category, index) => (
                      <Badge key={index} variant="outline" className="text-sm" role="listitem">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Words */}
              {word.relatedWords.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">Related Words</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Related words">
                      {word.relatedWords.map((relatedWord, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-sm bg-green-50 text-green-700 font-tiro-bangla"
                          role="listitem"
                        >
                          {relatedWord}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </aside>
          </div>

          {/* Related Words Section */}
          {relatedWords.length > 0 && (
            <section className="mt-12" aria-labelledby="related-words-heading">
              <h3 id="related-words-heading" className="text-2xl font-bold text-gray-800 mb-6">
                Related Words
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
                {relatedWords.map((relatedWord) => (
                  <Link
                    key={relatedWord.id}
                    href={`/word/${relatedWord.english}`}
                    aria-label={`Learn about ${relatedWord.bangla} (${relatedWord.english})`}
                  >
                    <Card
                      className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm cursor-pointer h-full"
                      role="listitem"
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold text-blue-600 font-tiro-bangla">
                          {relatedWord.bangla}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-gray-700">
                          {relatedWord.english}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="text-xs">
                            {relatedWord.partOfSpeech}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {relatedWord.difficulty}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12 mt-16" role="contentinfo">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8" aria-hidden="true" />
              <h3 className="text-2xl font-bold font-tiro-bangla">বাংলা অভিধান</h3>
            </div>
            <p className="text-blue-100 mb-6">Preserving and promoting the beauty of Bengali language</p>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="h-4 w-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm">Made with love for Bengali language enthusiasts</span>
            </div>
            <div className="text-sm text-blue-100">
              Created by:{" "}
              <a
                href="https://bangla-dictionary.com/"
                target="_blank"
                className="text-white hover:text-blue-200 underline font-medium"
              >
                Bangla Dictionary
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
