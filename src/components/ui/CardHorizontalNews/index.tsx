import Link from 'next/link'
import Image from 'next/image'
import { CardHorizontalNewsProp } from './types'

export default function CardHorizontalNews({
  img,
  imgAlt,
  blurDataUrl,
  title,
  subtitle,
  url,
}: CardHorizontalNewsProp) {

  return (
    <Link href={url}>
      <div className='flex flex-wrap -mx-3'>
        <div className='flex-[100%] md:flex-[35%] px-3'>
          <div className='relative rounded-2xl overflow-hidden'>
            <div className='w-full pb-[50%] md:pb-[80%] after:content-[""] after:w-full after:bg-black after:opacity-30 after:h-full after:absolute'>
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
          </div>
        </div>
        <div className='flex-[100%] md:flex-[65%] px-3'>
          <h3 className='mb-2 mt-2 md:mt-0 text-xl font-semibold'>{title}</h3>
          <p className='text-neutral-600 line-clamp-2'>{subtitle}</p>
          <p className='text-neutral-600 mt-4 font-medium'>Read More</p>
        </div>
      </div>
    </Link>
  )
};
