import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import Container from '@/components/section/Container'
import { HeroBannerTopProp } from './types'

export default function HeroBannerTop({
  img,
  imgAlt,
  blurDataUrl,
  pretext,
  title,
  subtitle,
  btnText,
  btnUrl,
  btnSecondaryText,
  btnSecondaryUrl,
}: HeroBannerTopProp) {

  return (
    <section className='relative h-screen'>
      <div className='absolute w-full h-screen after:content-[""] after:w-full after:bg-black after:opacity-30 after:h-full after:absolute'>
        <Image
          src={img}
          alt={imgAlt}
          sizes='100vw'
          style={{ objectFit: 'cover' }}
          fill
          priority
          placeholder='blur'
          blurDataURL={blurDataUrl}
        />
      </div>
      <div className='absolute bottom-16 left-0 w-full'>
        <Container>
          <div className='text-1xl md:text-2xl mb-4 text-neutral-50'>{pretext}</div>
          <h1 className='text-4xl md:text-8xl mb-4 text-neutral-50'>{title}</h1>
          <p className='text-lg md:text-xl text-neutral-300 md:max-w-xl'>{subtitle}</p>
          <div className='flex mt-9 gap-4'>
            <Button asChild size='lg'>
              <Link href={btnUrl} aria-label={`Go to ${title} page`}>{btnText}</Link>
            </Button>
            <Button asChild size='lg' variant='ghost'>
              <Link href={btnSecondaryUrl} aria-label='Go to destination page'>{btnSecondaryText}</Link>
            </Button>
          </div>
        </Container>
      </div>
    </section>
  )
};
