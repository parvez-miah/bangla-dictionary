import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Word Not Found - বাংলা অভিধান",
  description:
    "The requested Bengali word was not found in our dictionary. Search for other Bengali words and their meanings in our comprehensive Bangla dictionary.",
  openGraph: {
    title: "Word Not Found - বাংলা অভিধান",
    description: "The requested Bengali word was not found in our dictionary.",
  },
  twitter: {
    card: "summary",
    title: "Word Not Found - বাংলা অভিধান",
    description: "The requested Bengali word was not found in our dictionary.",
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-tiro-bangla">
                বাংলা অভিধান
              </h1>
              <p className="text-sm text-gray-600">Bangla Dictionary</p>
            </div>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="text-6xl mb-4">📚</div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">Word Not Found</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-8 text-lg">
                Sorry, we couldn't find the word you're looking for in our dictionary.
              </p>
              <div className="space-y-4">
                <Link href="/">
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Dictionary
                  </Button>
                </Link>
                <p className="text-sm text-gray-500">
                  Try searching for a different word or browse our collection of Bengali words.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
