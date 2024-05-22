import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Trip by the Sea',
  description: 'We, Trip by the Sea, share honest dive reviews & insider tips to help you plan your dream underwater adventure. Learn about our mission and what makes our reviews trusted.',
  keywords: 'diving reviews, best diving destinations, dive spot, marine life, scuba diving tips, raja ampat, komodo, indonesia diving area, bali, maratua, tulamben, nusa penida, scuba gear, dive trip review, diving in bali, sea trip, coral bali, sea adventures, diving trip, snorkeling trip',
  openGraph: {
    title: 'About Trip by the Sea',
    description: 'We, Trip by the Sea, share honest dive reviews & insider tips to help you plan your dream underwater adventure. Learn about our mission and what makes our reviews trusted.',
    type: 'website',
    images: ''
  }
}

export default function AboutLayout({
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
