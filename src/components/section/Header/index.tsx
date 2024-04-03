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
    <header className={!active ? 'fixed w-full left-0 top-0 z-40 text-neutral-50' : 'fixed w-full left-0 top-0 z-40 bg-neutral-800 text-neutral-50'}>
      <Container>
        <div className='flex justify-between text-lg align-middle'>
          <div className='relative flex'>
            <Link href='/' className='py-6'>
              <Image
                src={LogoMain}
                alt='trip by the sea logo'
                width={!active ? 350 : 200}
                height={!active ? 57 : 33}
                priority
              />
            </Link>
          </div>
          <div className='flex gap-12'>
            {mainMenu.map(({ title, url}) => {
              return (
                <Link key={title} href={url} className='py-6 flex items-center'>
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
