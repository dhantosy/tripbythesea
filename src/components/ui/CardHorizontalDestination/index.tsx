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
    <Link href={url} aria-label={`Go to ${title} page`}>
      <div className='relative rounded-2xl top-0 overflow-hidden mb-7  md:mb-10 hover:shadow-xl transition-all hover:-top-2'>
        <div className='w-full pb-[55%] after:content-[""] after:w-full after:bg-black after:opacity-40 after:h-full after:absolute'>
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
        <div className='absolute z-index-10 top-0 left-0 text-neutral-50 h-full w-full p-4 md:p-6'>
          <div className='flex flex-col justify-between h-full'>
            <div className='text-xl'>{topText}</div>
            <div className='flex flex-col justify-between gap-6 align-bottom md:flex-row'>
              <div>
                <div>
                  <div className='text-2xl mb-0 md:mb-1 md:text-3xl font-medium'>{title}</div>
                </div>
                <div className='flex'>
                  <div className='text-neutral-300 text-lg'>{reviews}</div>
                </div>
              </div>
              <Button size='md' className='hidden self-end md:flex'>
                See Detail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
};
