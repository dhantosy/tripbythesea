import { DestinationDetailLayoutProp } from './types'

export default function DestinationDetailLayout({ children }: DestinationDetailLayoutProp) {

  return (
    <div className='flex flex-wrap -m-5'>
      <div className='flex-[25%] p-5'>
        <div className='sticky top-32 p-5 bg-neutral-800 text-neutral-50 mt-20 rounded-xl'>
          <div className='py-2'>
            <a href="#destination-overview">Overview</a>
          </div>
          <div className='py-2'>
            <a href="#destination-wildlife">Wildlife</a>
          </div>
          <div className='py-2'>
            <a href="#destination-activities">Activities</a>
          </div>
          <div className='py-2'>
            <a href="#destination-review">User Reviews</a>
          </div>
        </div>
      </div>
      <div className='flex-[75%] p-5'>
        {children}
      </div>
    </div>
  )
};
