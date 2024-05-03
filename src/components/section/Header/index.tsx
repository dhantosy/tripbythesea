'use client'

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { RxHamburgerMenu } from 'react-icons/rx';
import Container from '@/components/section/Container'
import LogoMain from '@public/images/logo.png';
import { mainMenu } from '@/data/menus'
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition < 51) setActive(false);
    if (scrollPosition >= 50) setActive(true);
  }, [scrollPosition]);

  const handleMobileMenuClick = useCallback(() => {
    setMobileMenuActive(!mobileMenuActive);
  }, [mobileMenuActive]);

  useEffect(() => {
    setMobileMenuActive(false);
  }, [pathname]);

  return (
    <header className={!active ? 'fixed w-full left-0 top-0 z-40 text-neutral-50 transition-all bg-neutral-800 md:bg-transparent' : 'fixed w-full left-0 top-0 z-40 bg-neutral-800 text-neutral-50 transition-all'}>
      <Container>
        <div className='flex justify-between text-lg items-center'>
          <div className='relative flex max-w-52 md:max-w-full'>
            <Link href='/' className={!active ? 'py-4 md:py-6 transition-all' : 'py-4 transition-all'} aria-label='go to home page'>
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
          <div className='block md:hidden p-3 pr-0 cursor-pointer' onClick={handleMobileMenuClick}>
            <RxHamburgerMenu size={30} />
          </div>
        </div>
      </Container>
      <div className={`${mobileMenuActive ? 'block' : 'hidden'} h-screen bg-neutral-800 fixed w-full p-5`}>
        {mainMenu.map(({ title, url }) => {
          return (
            <Link key={title} href={url} className='py-4 flex justify-end font-semibold text-xl' aria-label={`Go to ${title} page`}>
              {title}
            </Link>
          )
        })}
      </div>
    </header>
  )
};
