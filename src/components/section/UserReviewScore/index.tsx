import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { UserReviewScoreProp } from './types'

export default function UserReviewScore({ score, highlight, checklist, img, imgAlt, blurDataUrl }: UserReviewScoreProp) {

  return (
    <section className='bg-neutral-800 text-neutral-50 p-8 rounded-2xl mt-20 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full after:content-[""] after:w-full after:bg-neutral-900 after:opacity-90 after:h-full after:absolute'>
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
      <div className='relative '>
        <div className='h-32 w-32 rounded-full bg-rose-500 flex items-center justify-center m-auto relative'>
          <div className='font-bold text-5xl'>
            {score}
          </div>
        </div>
        <div className='flex flex-wrap -mx-6 mt-10'>
          <div className='flex-[50%] px-6'>
            <h4 className='font-semibold text-xl mb-3'>Main Highlights</h4>
            {highlight.map((item) => {
              return (
                <div key={item} className='flex gap-2 mb-1 items-center'>
                  <span><FaStar className='text-amber-400' /></span>
                  <span>{item}</span>
                </div>
              )
            })}
          </div>
          <div className='flex-[50%] px-5'>
            <h4 className='font-semibold text-xl mb-3'>Score Breakdown</h4>
            {checklist.map(({ title, rate }) => {
              return (
                <div key={title}>
                  <div className='flex gap-3 justify-between'>
                    <div>
                      {title}
                    </div>
                    <div className='text-xl font-semibold'>
                      {rate}
                    </div>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
                    <div className='bg-rose-500 h-2.5 rounded-full dark:bg-rose-500' style={{ width: `${rate}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
};
