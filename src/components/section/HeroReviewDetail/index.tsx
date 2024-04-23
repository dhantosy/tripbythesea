import Image from 'next/image'
import Container from '@/components/section/Container'
import { HeroReviewDetailProp } from './types'

export default function HeroReviewDetail({
  destination,
  title,
  img,
  imgAlt,
  blurDataUrl,
}: HeroReviewDetailProp) {

  return (
    <section className='relative h-96'>
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
      <div className='absolute bottom-8 left-0 w-full'>
        <Container>
          <p className='text-lg md:text-3xl mb-4 text-neutral-50'>{destination}</p>
          <h1 className='text-3xl md:text-6xl text-neutral-50'>{title}</h1>
        </Container>
      </div>
    </section>
  )
};
