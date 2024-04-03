import Image from 'next/image'
import { OverviewDestinationPageProp } from './types'
import IconWildflife from '@public/images/icons/icon-wildlife.png'
import IconActivity from '@public/images/icons/icon-activity.png'

export default function OverviewDestinationPage({
  title,
  description,
  subtitle0,
  subtitleDesc0,
  subtitle1,
  subtitleDesc1
}: OverviewDestinationPageProp) {

  return (
    <div id='destination-overview'>
      <h2 className='text-3xl font-bold'>{title}</h2>
      <p className='mt-3'>{description}</p>
      {subtitle0 && (
        <h3 id='destination-wildlife' className='mt-12 text-2xl font-semibold flex gap-3 items-center'>
          <span>
            <Image
              src={IconWildflife}
              alt='wildlife icon'
              width={30}
              height={30}
            />
          </span>
          <span>{subtitle0}</span>
        </h3>
      )}
      {subtitleDesc0?.length ? (
        <ul className='mt-5 mb-5 pl-4'>
          {subtitleDesc0.map((item) => {
            return (
              <li key={item} className='mb-2 list-disc'>
                <p>{item}</p>
              </li>
            )
          })}
        </ul>
      ) : null}
      {subtitle1 && (
        <h3 id='destination-activities' className='mt-12 text-2xl font-semibold flex gap-3 items-center'>
          <span className='flex'>
            <Image
              src={IconActivity}
              alt='wildlife icon'
              width={30}
              height={30}
            />
          </span>
          <span className='flex'>{subtitle1}</span>
        </h3>
      )}
      {subtitleDesc1?.length ? (
        <ul className='my-5 pl-4 flex flex-wrap -mx-5 max-w-3xl'>
          {subtitleDesc1.map((item) => {
            return (
              <li key={item} className='mx-5 mb-2 list-disc flex-[40%]'>
                <p>{item}</p>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
};
