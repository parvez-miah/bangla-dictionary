"use client"

import { useState, useMemo } from "react"
import { Search, BookOpen, Star, Globe, Heart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { dictionaryData, searchWords } from "@/lib/dictionary-data"

export default function BanglaDictionaryClient() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredWords = useMemo(() => {
    return searchWords(searchTerm)
  }, [searchTerm])

  const featuredWords = dictionaryData.slice(0, 6)

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
    ],
  }

  return (
    <>
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
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700"
                  aria-label={`${dictionaryData.length} words available`}
                >
                  <Globe className="h-3 w-3 mr-1" aria-hidden="true" />
                  {dictionaryData.length} Words
                </Badge>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent font-tiro-bangla">
                স্বাগতম বাংলা অভিধানে
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover the beauty of Bengali language with our comprehensive dictionary. Search, learn, and explore
                thousands of words with meanings, pronunciations, and examples. Perfect for students, teachers, and
                Bengali language enthusiasts.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mb-12">
                <label htmlFor="dictionary-search" className="sr-only">
                  Search Bengali words in Bangla or English
                </label>
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                  aria-hidden="true"
                />
                <Input
                  id="dictionary-search"
                  type="text"
                  placeholder="Search in Bangla or English... (e.g., ভালো, good, bhalo)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-blue-200 focus:border-blue-500 shadow-lg [&::placeholder]:font-sans"
                  aria-describedby="search-help"
                />
                <div id="search-help" className="sr-only">
                  Search for Bengali words using Bangla script, English translation, or phonetic pronunciation
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
                  <div
                    className="text-3xl font-bold text-blue-600 mb-2"
                    aria-label={`${dictionaryData.length} plus words available`}
                  >
                    {dictionaryData.length}+
                  </div>
                  <div className="text-gray-600">Words Available</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Free to Use</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-100">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Words */}
        {!searchTerm && (
          <section className="py-12 px-4" aria-labelledby="featured-words-heading">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h3 id="featured-words-heading" className="text-3xl font-bold text-gray-800 mb-4">
                  Featured Words
                </h3>
                <p className="text-gray-600">Explore some popular Bengali words and their meanings</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {featuredWords.map((word) => (
                  <Link
                    key={word.id}
                    href={`/word/${word.english}`}
                    aria-label={`Learn about ${word.bangla} (${word.english})`}
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 cursor-pointer group h-full">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 font-tiro-bangla">
                            {word.bangla}
                          </CardTitle>
                          <Star className="h-5 w-5 text-yellow-500" aria-label="Featured word" />
                        </div>
                        <CardDescription className="text-lg font-medium text-gray-700">{word.english}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Pronunciation:</span>{" "}
                            <span className="font-tiro-bangla">{word.pronunciation}</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline" className="text-xs">
                              {word.partOfSpeech}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {word.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Search Results */}
        {searchTerm && (
          <section className="py-12 px-4" aria-labelledby="search-results-heading">
            <div className="container mx-auto">
              <div className="mb-8">
                <h3 id="search-results-heading" className="text-2xl font-bold text-gray-800 mb-2">
                  Search Results ({filteredWords.length})
                </h3>
                <p className="text-gray-600">
                  Found {filteredWords.length} words matching "{searchTerm}"
                </p>
              </div>

              {filteredWords.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto" role="list">
                  {filteredWords.map((word) => (
                    <Link
                      key={word.id}
                      href={`/word/${word.english}`}
                      aria-label={`Learn about ${word.bangla} (${word.english})`}
                    >
                      <Card
                        className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm cursor-pointer h-full"
                        role="listitem"
                      >
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-xl font-bold text-blue-600 font-tiro-bangla">
                              {word.bangla}
                            </CardTitle>
                            <div className="flex gap-1">
                              <Badge variant="outline" className="text-xs">
                                {word.partOfSpeech}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {word.frequency}
                              </Badge>
                            </div>
                          </div>
                          <CardDescription className="text-lg font-medium text-gray-700">
                            {word.english} /<span className="font-tiro-bangla">{word.pronunciation}</span>/
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-2">{word.definition}</p>
                          <div className="flex flex-wrap gap-1">
                            {word.categories.slice(0, 3).map((category) => (
                              <Badge key={category} variant="outline" className="text-xs">
                                {category}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12" role="status" aria-live="polite">
                  <div className="text-6xl mb-4" aria-hidden="true">
                    🔍
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No words found</h3>
                  <p className="text-gray-500">Try searching with different keywords or check your spelling</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12 mt-16" role="contentinfo">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8" aria-hidden="true" />
              <h3 className="text-2xl font-bold font-tiro-bangla">বাংলা অভিধান</h3>
            </div>
            <p className="text-blue-100 mb-6">Preserving and promoting the beauty of Bengali language</p>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="h-4 w-4 text-red-300" aria-hidden="true" />
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
