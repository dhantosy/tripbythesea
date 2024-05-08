import Image from 'next/image'
import Container from '@/components/section/Container'
import { HeroDestinationProp } from './types'

export default function HeroDestination({
  img,
  imgAlt,
  blurDataUrl,
  pretext,
  title,
  gallery,
}: HeroDestinationProp) {

  return (
    <section className='relative h-full min-h-[540px] md:min-h-[700px] overflow-hidden'>
      <div className='absolute w-full h-full after:content-[""] after:w-full after:bg-black after:opacity-40 after:h-full after:absolute scale-110 blur-xs'>
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
      <div className='absolute top-40 left-0 w-full'>
        <Container>
          <div className='text-lg md:text-2xl mb-2 md:mb-4 text-neutral-50'>{pretext}</div>
          <h1 className='text-2xl md:text-5xl md:max-w-[800px] mb-8 md:mb-16 text-neutral-50 font-medium'>{title}</h1>
        </Container>
        <div className='flex flex-nowrap overflow-x-auto m-auto w-full max-w-[1260px] pl-5 pb-3'>
          {gallery.map(({ src, srcBlurData, alt }) => {

            return (
              <div key={alt} className='flex flex-shrink-0 flex-[280px] md:flex-[33.33%] pr-5'>
                <div className='relative rounded-2xl w-full  overflow-hidden'>
                  <div className='h-[180px] md:h-[240px]'>
                    <Image
                      src={src}
                      alt={alt}
                      sizes='100vw, 33vw'
                      style={{ objectFit: 'cover' }}
                      fill
                      priority
                      placeholder='blur'
                      blurDataURL={srcBlurData}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
};
