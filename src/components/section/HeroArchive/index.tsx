import Image from 'next/image'
import Container from '@/components/section/Container'
import { HeroArchiveProp } from './types'

export default function HeroArchive({
  img,
  imgAlt,
  blurDataUrl,
  title,
  subtitle,
}: HeroArchiveProp) {

  return (
    <section className='relative h-[400px] md:h-[500px]'>
      <div className='absolute w-full h-full after:content-[""] after:w-full after:bg-black after:opacity-40 after:h-full after:absolute'>
        <Image
          src={img}
          alt={imgAlt}
          sizes='100vw, 33vw'
          style={{ objectFit: 'cover' }}
          fill
          priority
          placeholder='blur'
          blurDataURL={blurDataUrl}
        />
      </div>
      <div className='absolute bottom-36 md:bottom-44 left-0 w-full'>
        <Container>
          <h1 className='font-medium text-3xl mb-1 md:text-6xl md:mb-4 text-neutral-50'>{title}</h1>
          <p className='text-xl md:text-3xl text-neutral-300 md:max-w-2xl font-playfair italic'>{subtitle}</p>
        </Container>
      </div>
    </section>
  )
};
