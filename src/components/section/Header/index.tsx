'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Container from '@/components/section/Container'
import LogoMain from '@public/images/logo.png';
import { mainMenu } from '@/data/menus'
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function Header() {
  const [active, setActive] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition < 51) setActive(false);
    if (scrollPosition >= 50) setActive(true);
  }, [scrollPosition]);

  return (
    <header className={!active ? 'fixed w-full left-0 top-0 z-40 text-neutral-50 transition-all' : 'fixed w-full left-0 top-0 z-40 bg-neutral-800 text-neutral-50 transition-all'}>
      <Container>
        <div className='flex justify-between text-lg align-middle'>
          <div className='relative flex max-w-52 md:max-w-full'>
            <Link href='/' className={!active ? 'py-6 transition-all' : 'py-4 transition-all'} aria-label='go to home page'>
              <Image
                src={LogoMain}
                alt='trip by the sea logo'
                width={!active ? 350 : 208}
                height={!active ? 57 : 34}
                sizes='(max-width: 768px) 208px, 350px'
                priority
                className='transition-all'
              />
            </Link>
          </div>
          <div className='gap-6 hidden md:flex lg:gap-12'>
            {mainMenu.map(({ title, url}) => {
              return (
                <Link key={title} href={url} className={!active ? 'py-6 flex items-center transition-all' : 'py-4 flex items-center transition-all'} aria-label={`Go to ${title} page`}>
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
