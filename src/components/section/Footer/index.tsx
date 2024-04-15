import Image from 'next/image'
import Link from 'next/link'
import { IoLogoInstagram } from 'react-icons/io5'
import Container from '@/components/section/Container'
import { mainMenu } from '@/data/menus'
import LogoMain from '@public/images/logo.png'
import FooterBg from '@public/images/footer-bg.png'

export default function Footer() {

  return (
    <footer className='bg-neutral-950 relative mt-52 pb-10'>
      <div className='absolute w-full h-80 -top-24'>
        <Image
          src={FooterBg}
          alt='footer background'
          sizes='100vw'
          style={{ objectFit: 'cover' }}
          fill
        />
      </div>
      <Container>
        <div className='text-neutral-50 relative pt-44'>
          <div className='flex justify-between gap-5 items-end'>
            <div>
              <div>
                <Link href='/' className='py-7' aria-label='go to home'>
                  <Image
                    src={LogoMain}
                    alt='trip by the sea logo'
                    sizes='(max-width: 768px) 208px, 350px'
                    width={350}
                    height={150}
                    priority
                  />
                </Link>
              </div>
              <div className='mt-8'>
                <div className='text-neutral-400'>Drop us a message</div>
                <div className='text-lg'>hello@tripbythesea.com</div>
              </div>
              <div className='mt-4 inline-block'>
                <Link href='/' aria-label='Go to Trip by the sea instagram account'>
                  <IoLogoInstagram size={30} />
                </Link>
              </div>
            </div>
            <div className='flex flex-col items-end'>
              <div className='flex gap-10'>
                {mainMenu.map(({ title, url }) => {
                  return (
                    <Link key={title} href={url} className=''>
                      {title}
                    </Link>
                  )
                })}
              </div>
              <div className='text-neutral-50 mt-8'>
                Copyright 2024 tripbythesea.com
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
};
