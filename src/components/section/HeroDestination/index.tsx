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
    <section className='relative h-full min-h-[700px] overflow-hidden'>
      <div className='absolute w-full h-full after:content-[""] after:w-full after:bg-black after:opacity-30 after:h-full after:absolute scale-110 blur-xs'>
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
          <div className='text-xl md:text-2xl mb-4 text-neutral-50'>{pretext}</div>
          <h1 className='text-2xl md:text-5xl md:max-w-[800px] mb-16 text-neutral-50'>{title}</h1>
          <div className='flex flex-wrap -m-5'>
            {gallery.map(({ src, srcBlurData, alt }) => {

              return (
                <div key={alt} className='flex-[33.33%] px-5'>
                  <div className='relative rounded-2xl overflow-hidden'>
                    <div className='w-full pb-[65%]'>
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
        </Container>
      </div>
    </section>
  )
};
