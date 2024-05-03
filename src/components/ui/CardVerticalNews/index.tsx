import Link from 'next/link'
import Image from 'next/image'
import { CardVerticalNewsProp } from './types'

export default function CardVerticalNews({
  img,
  imgAlt,
  blurDataUrl,
  title,
  subtitle,
  url,
}: CardVerticalNewsProp) {

  return (
    <Link href={url} className='relative top-0 overflow-hidden block shadow-md rounded-2xl hover:shadow-xl transition-all bg-gray-50 hover:-top-1'>
      <div className='relative rounded-2xl overflow-hidden'>
        <div className='w-full pb-[60%] after:content-[""] after:w-full after:bg-black after:opacity-30 after:h-full after:absolute'>
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
      <div className='p-6'>
        <h2 className='text-xl font-semibold mb-3'>{title}</h2>
        <p className='text-neutral-600 line-clamp-2'>{subtitle}</p>
      </div>
    </Link>
  )
};
