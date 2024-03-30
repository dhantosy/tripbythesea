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
    <section className='relative h-[500px]'>
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
      <div className='absolute bottom-44 left-0 w-full'>
        <Container>
          <h1 className='text-3xl md:text-6xl mb-4 text-neutral-50'>{title}</h1>
          <p className='text-lg md:text-xl text-neutral-300 md:max-w-xl'>{subtitle}</p>
        </Container>
      </div>
    </section>
  )
};
