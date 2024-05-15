import Link from 'next/link'
import { FaArrowLeftLong } from 'react-icons/fa6'
import Container from '@/components/section/Container'
import HeroReviewDetail from '@/components/section/HeroReviewDetail'
import UserReviewScore from '@/components/section/UserReviewScore'
import UserReviewInfo from '@/components/section/UserReviewInfo'
import BannerImage from '@public/images/tulamben/tulamben-1.jpg'
import { usersReview } from '../data'

export default function RajaAmpatStefanyA() {
  const filterArrayData = usersReview.filter(obj => obj.username === 'Edward W')[0];

  return (
    <main>
      <HeroReviewDetail
        destination={filterArrayData.location}
        title={filterArrayData.title}
        img={BannerImage.src}
        imgAlt={filterArrayData.location}
        blurDataUrl={BannerImage.blurDataURL || ''}
      />
      <Container>
        <div className='mx-auto max-w-3xl'>
          <UserReviewInfo
            img={filterArrayData.img}
            imgAlt={filterArrayData.imgAlt}
            username={filterArrayData.username}
            description={filterArrayData.description}
          />
          <div>
            <div>
              <div>
                <h2 className='text-lg mb-2 mt-4 font-semibold'>Marine Life Diversity</h2>
                <p>{filterArrayData.reviewMarineLife}</p>
              </div>
              <div>
                <h2 className='text-lg mb-2 mt-4 font-semibold'>Coral Health</h2>
                <p>{filterArrayData.reviewCoralHealth}</p>
              </div>
              <div>
                <h2 className='text-lg mb-2 mt-4 font-semibold'>Water Visibility and Currents</h2>
                <p>{filterArrayData.reviewWaterVisibility}</p>
              </div>
              <div>
                <h2 className='text-lg mb-2 mt-4 font-semibold'>Surrounding Attractions</h2>
                <p>{filterArrayData.reviewSurroundingAttractions}</p>
              </div>
              <div>
                <h2 className='text-lg mb-2 mt-4 font-semibold'>Sustainability</h2>
                <p>{filterArrayData.reviewSustainability}</p>
              </div>
              <div>
                <h2 className='text-lg mb-2 mt-4 font-semibold'>Closing</h2>
                <p>{filterArrayData.reviewClosing}</p>
              </div>
              </div>
          </div>
          <UserReviewScore
            score={(filterArrayData.checklistData.reduce((n, { rate }) => n + rate, 0) / 5).toFixed(0)}
            highlight={filterArrayData.highlight}
            checklist={filterArrayData.checklistData || []}
            img={BannerImage.src}
            imgAlt='Score Background'
            blurDataUrl={BannerImage.blurDataURL || ''}
          />
          <div className='mt-10 text-center'>
            <Link
              href='/destinations/maratua#destination-review'
              className='text-xl font-medium flex gap-4 items-center justify-center transition-colors hover:text-rose-500'
            >
              <FaArrowLeftLong />
              <span>See Other Reviews</span>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  )
};
