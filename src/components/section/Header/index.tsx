import Link from 'next/link'
import Image from 'next/image';
import Container from '@/components/section/Container'
import LogoMain from '@public/images/logo.png';
import { mainMenu } from '@/data/menus'

export default function Header() {

  return (
    <header className='fixed w-full left-0 top-0 z-40 text-neutral-50'>
      <Container>
        <div className='flex justify-between text-lg align-middle'>
          <div className='relative flex'>
            <Link href='/' className='py-7'>
              <Image
                src={LogoMain}
                alt='trip by the sea logo'
                width={350}
                height={150}
                priority
              />
            </Link>
          </div>
          <div className='flex gap-12'>
            {mainMenu.map(({ title, url}) => {
              return (
                <Link key={title} href={url} className='py-7 flex items-center'>
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
