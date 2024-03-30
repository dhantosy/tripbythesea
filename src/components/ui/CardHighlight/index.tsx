import Link from 'next/link'
import Image from 'next/image'
import { CardHighlightProp } from './types'

export default function CardHighlight({
  img,
  imgAlt,
  blurDataUrl,
  title,
  subtitle,
  url,
}: CardHighlightProp) {

  return (
    <Link href={url}>
      <div className='relative rounded-2xl overflow-hidden h-full'>
        <div className='absolute w-full h-full after:content-[""] after:w-full after:bg-black after:opacity-20 after:h-full after:absolute'>
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
          <div className='flex flex-col justify-end h-full'>
            <h3 className='my-2 text-2xl font-semibold'>{title}</h3>
            <p className='text-neutral-300 text-lg'>{subtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  )
};
