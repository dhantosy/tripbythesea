import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Destinations Trip by the Sea',
  description: 'Diving Top Destinations! Find unbiased diver reviews, discover the best scuba spots worldwide, and explore marine life, visibility, dive sites & more. Plan your dream underwater escape with confidence!',
  keywords: 'diving reviews, best diving destinations, dive spot, marine life, scuba diving tips, raja ampat, komodo, indonesia diving area, bali, maratua, tulamben, nusa penida, scuba gear, dive trip review, diving in bali, sea trip, coral bali, sea adventures, diving trip, snorkeling trip',
  openGraph: {
    title: 'Destinations Trip by the Sea',
    description: 'Diving Top Destinations! Find unbiased diver reviews, discover the best scuba spots worldwide, and explore marine life, visibility, dive sites & more. Plan your dream underwater escape with confidence!',
    type: 'website',
    images: ''
  }
}

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
