import Link from 'next/link'
import { FaArrowLeftLong } from 'react-icons/fa6'
import Container from '@/components/section/Container'
import HeroReviewDetail from '@/components/section/HeroReviewDetail'
import UserReviewScore from '@/components/section/UserReviewScore'
import UserReviewInfo from '@/components/section/UserReviewInfo'
import BannerImage from '@public/images/komodo-2.jpg'
import { usersReview } from '../data'

export default function KomodoSightsea() {
  const userObject = usersReview.filter(obj => obj.username === 'Sightsea Expeditions')[0];

  return (
    <main>
      <HeroReviewDetail
        destination={userObject.location}
        title={userObject.title}
        img={BannerImage.src}
        imgAlt={userObject.location}
        blurDataUrl={BannerImage.blurDataURL || ''}
      />
      <Container>
        <div className='mx-auto max-w-3xl'>
          <UserReviewInfo
            img={userObject.img}
            imgAlt={userObject.imgAlt}
            username={userObject.username}
            description={userObject.description}
            website={userObject?.website}
            instagram={userObject?.instagram}
          />
          <div>
            <div>
              <div>
                <h2 className='text-lg mb-2 mt-4 font-semibold'>Marine Life Diversity</h2>
                <p>{userObject.reviewMarineLife}</p>
              </div>
              <div>
                <h2 className='text-lg mb-2 mt-4 font-semibold'>Coral Health</h2>
                <p>{userObject.reviewCoralHealth}</p>
              </div>
              <div>
                <h2 className='text-lg mb-2 mt-4 font-semibold'>Water Visibility and Currents</h2>
                <p>{userObject.reviewWaterVisibility}</p>
              </div>
              <div>
                <h2 className='text-lg mb-2 mt-4 font-semibold'>Surrounding Attractions</h2>
                <p>{userObject.reviewSurroundingAttractions}</p>
              </div>
              <div>
                <h2 className='text-lg mb-2 mt-4 font-semibold'>Sustainability</h2>
                <p>{userObject.reviewSustainability}</p>
              </div>
              <div>
                <h2 className='text-lg mb-2 mt-4 font-semibold'>Closing</h2>
                <p>{userObject.reviewClosing}</p>
              </div>
            </div>
          </div>
          <UserReviewScore
            score={(userObject.checklistData.reduce((n, { rate }) => n + rate, 0) / 5).toFixed(0)}
            highlight={userObject.highlight}
            checklist={userObject.checklistData || []}
            img={BannerImage.src}
            imgAlt='Score Background'
            blurDataUrl={BannerImage.blurDataURL || ''}
          />
          <div className='mt-10 text-center'>
            <Link
              href='/destinations/komodo#destination-review'
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
