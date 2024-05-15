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
    <Link href={url} className='group'>
      <div className='relative rounded-2xl overflow-hidden h-[320px] md:h-full'>
        <div className='absolute w-full h-full after:content-[""] after:w-full after:bg-black after:opacity-30 after:h-full after:absolute scale-100 group-hover:scale-110 transition-transform'>
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
            <p className='text-neutral-200 text-lg line-clamp-3'>{subtitle}</p>
            <p className='text-neutral-200 mt-4 font-medium'>Read More</p>
          </div>
        </div>
      </div>
    </Link>
  )
};
