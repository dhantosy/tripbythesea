import Link from 'next/link'
import { DestinationDetailLayoutProp } from './types'

export default function DestinationDetailLayout({ children }: DestinationDetailLayoutProp) {

  return (
    <div className='flex flex-wrap -mx-5'>
      <div className='hidden md:block flex-[25%] px-5'>
        <div className='sticky top-32 p-5 bg-neutral-800 text-neutral-50 mt-20 rounded-xl'>
          <div className='py-2'>
            <Link className='hover:text-rose-500 transition-colors' href="#destination-overview">
              Overview
            </Link>
          </div>
          <div className='py-2'>
            <Link className='hover:text-rose-500 transition-colors' href="#destination-wildlife">Wildlife</Link>
          </div>
          <div className='py-2'>
            <Link className='hover:text-rose-500 transition-colors' href="#destination-activities">Activities</Link>
          </div>
          <div className='py-2'>
            <Link className='hover:text-rose-500 transition-colors' href="#destination-review">User Reviews</Link>
          </div>
        </div>
      </div>
      <div className='flex-[75%] px-5'>
        {children}
      </div>
    </div>
  )
};
