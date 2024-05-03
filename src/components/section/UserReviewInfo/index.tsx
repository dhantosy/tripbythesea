import Image from 'next/image'
import { UserReviewInfoProp } from './types'

export default function UserReviewInfo({ img, imgAlt, username, description }: UserReviewInfoProp) {

  return (
    <section className='my-8 bg-neutral-100 p-6 rounded-2xl'>
      <h2 className='mb-4'>About the Author</h2>
      <div className='flex flex-row gap-3'>
        <div className='hidden md:flex basis-1/6'>
          <div className='relative overflow-hidden rounded-full'>
            <Image
              src={img}
              alt={imgAlt}
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className='basis-7/6'>
          <p className='font-bold mb-2'>{username}</p>
          <p>{description}</p>
        </div>
      </div>
    </section>
  )
};
