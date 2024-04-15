import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CardHorizontaDestinationlProp } from './types'

export default function CardHorizontalDestination({
  img,
  imgAlt,
  blurDataUrl,
  topText,
  title,
  reviews,
  url,
}: CardHorizontaDestinationlProp) {

  return (
    <div className='relative rounded-2xl overflow-hidden'>
      <div className='w-full pb-[55%] after:content-[""] after:w-full after:bg-black after:opacity-30 after:h-full after:absolute'>
        <Image
          src={img}
          alt={imgAlt}
          sizes="(min-width: 1340px) 590px, 100vw"
          style={{ objectFit: 'cover' }}
          placeholder='blur'
          blurDataURL={blurDataUrl}
          fill
        />
      </div>
      <div className='absolute z-index-10 top-0 left-0 p-6 text-neutral-50 h-full w-full'>
        <div className='flex flex-col justify-between h-full'>
          <div className='text-xl'>{topText}</div>
          <div className='flex justify-between gap-6 align-bottom'>
            <div>
              <div>
                <div className='text-3xl mb-1'>{title}</div>
              </div>
              <div className='flex'>
                <div className='text-neutral-300'>{reviews}</div>
              </div>
            </div>
            <Button asChild size='md' className='self-end'>
              <Link href={url} aria-label={`Go to ${title} page`}>Check Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
};
