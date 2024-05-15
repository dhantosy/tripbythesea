import Link from 'next/link'
import Image from 'next/image'
import { CardHighlightReviewProp } from './types'

export default function CardHighlightReview({
  img,
  imgAlt,
  blurDataUrl,
  destination,
  title,
  score,
  user,
  url,
}: CardHighlightReviewProp) {

  return (
    <Link href={url} aria-label={`Go to ${user} ${destination} review page`} className='relative w-full top-0 overflow-hidden block shadow-md rounded-2xl hover:shadow-xl transition-all bg-gray-50 hover:-top-1 group'>
      <div className='relative overflow-hidden'>
        <div className='w-full h-[160px] md:h-full md:pb-[70%] after:content-[""] after:w-full after:bg-black after:opacity-30 after:h-full after:absolute'>
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
          <div className='text-3xl text-center'>{destination}</div>
        </div>
      </div>
      <div className='flex flex-col items-center text-center relative -top-7 px-3'>
        <div className='flex items-center justify-center bg-rose-500 text-neutral-50 w-14 h-14 overflow-hidden rounded-full text-xl font-semibold'>{score}</div>
        <div className='mt-4 mb-2 text-lg font-semibold group-hover:text-rose-500 transition-colors'>{title}</div>
        <div>{user}</div>
      </div>
    </Link>
  )
};
