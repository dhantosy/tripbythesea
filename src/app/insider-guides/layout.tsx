import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insider Guides & Tips Trip by the Sea',
  description: 'Unlock Diving Secrets! Dive deeper with our insider guides. Get exclusive tips, hidden gem recommendations, and expert advice to maximize your underwater adventures.',
  keywords: 'diving reviews, best diving destinations, dive spot, marine life, scuba diving tips, raja ampat, komodo, indonesia diving area, bali, maratua, tulamben, nusa penida, scuba gear, dive trip review, diving in bali, sea trip, coral bali, sea adventures, diving trip, snorkeling trip',
  openGraph: {
    title: 'Insider Guides & Tips Trip by the Sea',
    description: 'Unlock Diving Secrets! Dive deeper with our insider guides. Get exclusive tips, hidden gem recommendations, and expert advice to maximize your underwater adventures.',
    type: 'website',
    images: ''
  }
}

export default function InsiderGuidesLayout({
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
