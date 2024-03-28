import Image from 'next/image'
import Container from '@/components/section/Container'
import { HeroBannerTopProp } from './types'

export default function HeroBannerTop({
  img,
  imgAlt,
  title,
  subtitle,
  blurDataUrl
}: HeroBannerTopProp) {

  return (
    <section className='relative h-screen'>
      <div className='absolute w-full h-screen after:content-[""] after:w-full after:bg-black after:opacity-30 after:h-full after:absolute'>
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
      <div className='absolute bottom-16 left-0'>
        <Container>
          <div>
            <h1 className='text-4xl md:text-6xl mb-4'>{title}</h1>
            <p className='text-lg md:text-xl'>{subtitle}</p>
          </div>
        </Container>
      </div>
    </section>
  )
};
