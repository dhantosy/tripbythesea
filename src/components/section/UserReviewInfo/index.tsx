import Image from 'next/image'
import { UserReviewInfoProp } from './types'

export default function UserReviewInfo({ img, imgAlt, username, description, website, instagram }: UserReviewInfoProp) {

  return (
    <section className='my-8 bg-neutral-100 p-6 rounded-2xl'>
      <h2 className='mb-4'>About the Author</h2>
      <div className='flex flex-col md:flex-row gap-5'>
        <div className='flex basis-1/6'>
          <div className='relative overflow-hidden rounded-full place-self-start'>
            <Image
              src={img}
              alt={imgAlt}
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className='basis-7/6'>
          <p className='font-bold mb-2'>{username}</p>
          <p>{description}</p>
          <div>
            {website && (
              <div className='my-3 text-sky-600'><a href='https://sightseaexpeditions.com/' target='_blank'>www.sightseaexpeditions.com</a></div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
};
