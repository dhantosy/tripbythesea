import Image from 'next/image'
import Container from '@/components/section/Container'
import { HeroTitleTextProp } from './types'

export default function HeroTitleText({ title, subtitle, img, imgAlt, blurDataUrl }: HeroTitleTextProp) {

  return (
    <section className='bg-neutral-800 h-72 md:h-80 flex flex-col relative'>
      {img && (
        <div className='absolute w-full h-full after:content-[""] after:w-full after:bg-black after:opacity-40 after:h-full after:absolute'>
          <Image
            src={img}
            alt={imgAlt || ''}
            sizes='100vw, 33vw'
            style={{ objectFit: 'cover' }}
            fill
            priority
            placeholder='blur'
            blurDataURL={blurDataUrl}
          />
        </div>
      )}
      <Container>
        <div className='flex flex-col h-full justify-end py-10 relative z-10'>
          <h1 className='text-neutral-50 text-5xl md:text-6xl'>{title}</h1>
          {subtitle && (
            <p className='text-neutral-300 text-xl mt-4'>{subtitle}</p>
          )}
        </div>
      </Container>
    </section>
  )
};
