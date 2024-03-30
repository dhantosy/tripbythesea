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
  duration,
  price,
  url,
}: CardHorizontaDestinationlProp) {

  return (
    <div className='relative rounded-2xl overflow-hidden'>
      <div className='w-full pb-[55%] after:content-[""] after:w-full after:bg-black after:opacity-30 after:h-full after:absolute'>
        <Image
          src={img}
          alt={imgAlt}
          sizes='100vw, 33vw'
          style={{ objectFit: 'cover' }}
          placeholder='blur'
          blurDataURL={blurDataUrl}
          fill
        />
      </div>
      <div className='absolute z-index-10 top-0 left-0 p-6 text-neutral-50 h-full w-full'>
        <div className='flex flex-col justify-between h-full'>
          <div>{topText}</div>
          <div className='flex justify-between gap-6 align-bottom'>
            <div>
              <div>
                <div>{title}</div>
              </div>
              <div className='flex gap-6'>
                <div>{duration}</div>
                <div>{price}</div>
              </div>
            </div>
            <Button asChild size='sm'>
              <Link href={url}>Check Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
};
