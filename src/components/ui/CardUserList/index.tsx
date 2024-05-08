import Link from 'next/link'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { CardUserListProp } from './types'

export default function CardUserList({
  img,
  imgAlt,
  tag,
  title,
  username,
  url,
  hightlight,
  score
}: CardUserListProp) {

  return (
    <Link href={url} className='relative top-0 my-10 block p-6 shadow-md rounded-xl hover:shadow-xl transition-all bg-gray-50 hover:-top-1 last:mb-0'>
      <div className='flex flex-wrap flex-col md:flex-row -mx-3'>
        <div className='flex-[25%] pt-3 pb-5 md:px-3 flex border-b-2 md:border-r-2 md:border-b-0 justify-around gap-7'>
          <div className='justify-center items-center flex flex-col'>
            <div className='relative overflow-hidden rounded-full'>
              <Image
                src={img}
                alt={imgAlt}
                width={80}
                height={80}
              />
            </div>
            <h4 className='mt-4'>{username}</h4>
            <div>{tag}</div>
          </div>
          <div className='flex flex-col md:hidden gap-3 items-center'>
            <div className='text-center'>User Rating</div>
            <div className='flex items-center justify-center bg-rose-500 text-neutral-50 w-16 h-16 overflow-hidden rounded-2xl text-3xl'>{score}</div>
          </div>
        </div>
        <div className='flex-[50%] pt-5 md:px-3 md:border-r-2'>
          <div className='pl-0 md:pl-5'>
            <h3 className='mb-6 text-xl font-semibold'>{title}</h3>
            <div>
              <div className='mb-3'>Main highlights:</div>
              {hightlight.length ? (
                hightlight.map((item) => {
                  return (
                    <div key={item} className='flex gap-2 mb-1 items-center'>
                      <span><FaStar className='text-amber-400' /></span>
                      <span>{item}</span>
                    </div>
                  )
                })
              ) : null}
            </div>
          </div>
        </div>
        <div className='hidden md:flex flex-[25%] px-3 items-center flex-col gap-4 justify-center'>
          <div>User Rating</div>
          <div className='flex items-center justify-center bg-rose-500 text-neutral-50 w-24 h-24 overflow-hidden rounded-2xl text-3xl'>{score}</div>
        </div>
      </div>
    </Link>
  )
};
