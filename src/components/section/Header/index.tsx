import Link from 'next/link'
import Container from '@/components/section/Container'

const headerMenu = [
  {
    title: 'Trips',
    url: '/'
  },
  {
    title: 'About Us',
    url: '/'
  },
  {
    title: 'Insider Guides',
    url: '/'
  },
]

export default function Header() {

  return (
    <header className='fixed w-full left-0 top-0 z-40 text-neutral-50'>
      <Container>
        <div className='flex justify-between text-lg align-middle'>
          <div>
            <Link href='/' className='py-7'>
              Trip by the sea
            </Link>
          </div>
          <div className='flex gap-12'>
            {headerMenu.map(({ title, url}) => {
              return (
                <Link key={title} href={url} className='py-7'>
                  {title}
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </header>
  )
};
