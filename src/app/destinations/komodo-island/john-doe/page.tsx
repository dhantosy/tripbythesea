import Container from '@/components/section/Container'
import HeroReviewDetail from '@/components/section/HeroReviewDetail'
import UserReviewScore from '@/components/section/UserReviewScore'
import UserReviewInfo from '@/components/section/UserReviewInfo'
import BannerImage from '@public/images/komodo-2.jpg'
import UserDefault from '@public/images/user.png';

const reviewerData = {
  img: UserDefault.src,
  imgAlt: 'John Doe photo',
  username: 'John Doe',
  description: 'Sarah`s love for the ocean began at a young age, growing up near the pristine shores of Australia`s coastline. She embarked on her scuba diving journey during her university years and quickly became enamored with the underwater world.',
}

const hightlightData = [
  'Crystal Clear Sea Water',
  'Rich Diversity of Sea Creatures',
  'Vibrant Coral Gardens',
  'Manta Point!',
  'Quite Affordable',
];

const checklistData = [
  {
    title: 'Marine Life Diversity',
    rate: 93
  },
  {
    title: 'Coral Health',
    rate: 81
  },
  {
    title: 'Water Visibility & Currents',
    rate: 75
  },
  {
    title: 'Surrounding Attractions',
    rate: 90
  },
  {
    title: 'Sustainability',
    rate: 80
  },
]

export default function KomodoIslandJohnDoe() {

  return (
    <main>
      <HeroReviewDetail
        destination='Komodo Island'
        title='One of the Best Diving Site!'
        img={BannerImage.src}
        imgAlt='Komodo Island Photo'
        blurDataUrl={BannerImage.blurDataURL || ''}
      />
      <Container>
        <div className='mx-auto max-w-3xl'>
          <UserReviewInfo
            img={reviewerData.img}
            imgAlt={reviewerData.imgAlt}
            username={reviewerData.username}
            description={reviewerData.description}
          />
          <div>
            <div>
              <h2 className='text-lg mb-2 mt-4 font-semibold'>Marine Life Diversity</h2>
              <p>Komodo`s underwater realm teems with a staggering array of marine life. Its diverse ecosystems harbor an abundance of species, including vibrant coral reefs, majestic manta rays, enigmatic sharks, playful dolphins, and a kaleidoscope of tropical fish. The convergence of currents enriches these waters, creating a fertile environment for marine biodiversity unparalleled in its richness.</p>
            </div>
            <div>
              <h2 className='text-lg mb-2 mt-4 font-semibold'>Coral Health</h2>
              <p>The health of Komodo`s coral reefs is of paramount importance, serving as the foundation of the marine ecosystem. While these reefs face threats such as coral bleaching, pollution, and overfishing, concerted conservation efforts are underway to mitigate these challenges. Marine protected areas and sustainable diving practices aim to preserve coral health and promote resilience in the face of environmental stressors.</p>
            </div>
            <div>
              <h2 className='text-lg mb-2 mt-4 font-semibold'>Water Visibility and Currents</h2>
              <p>One of the most captivating aspects of diving in Komodo is its crystal-clear waters and dynamic currents. Excellent visibility allows for immersive underwater experiences, while nutrient-rich currents attract an astonishing array of marine life. Divers can drift along exhilarating currents, encountering schools of fish, vibrant coral gardens, and breathtaking underwater seascapes.</p>
            </div>
            <div>
              <h2 className='text-lg mb-2 mt-4 font-semibold'>Surrounding Attractions</h2>
              <p>Beyond its marine wonders, Komodo Island offers a wealth of attractions for nature enthusiasts and adventurers alike. Trekking through rugged landscapes reveals stunning vistas, hidden waterfalls, and encounters with Komodo dragons in their natural habitat. Exploring neighboring islands unveils pristine beaches, ancient volcanic formations, and cultural insights into the region`s rich heritage.</p>
            </div>
            <div>
              <h2 className='text-lg mb-2 mt-4 font-semibold'>Sustainability</h2>
              <p>Sustainability lies at the heart of efforts to preserve Komodo`s natural treasures for future generations. Community-based initiatives, marine protected areas, and responsible tourism practices strive to minimize environmental impact while maximizing benefits for local communities. Through education, conservation, and sustainable development, stakeholders work together to safeguard Komodo`s ecological integrity and cultural heritage.</p>
            </div>
            <div>
              <h2 className='text-lg mb-2 mt-4 font-semibold'>Closing</h2>
              <p>Komodo Island is a testament to the incredible diversity and beauty of our planet`s` marine ecosystems. From its vibrant coral reefs to its majestic marine inhabitants, every aspect of this underwater paradise beckons exploration and appreciation. By embracing sustainability and conservation, we can ensure that Komodo`s` natural wonders continue to inspire awe and wonder for generations to come. So, pack your bags, dive into the depths, and discover the magic of Komodo Island for yourself.</p>
            </div>
          </div>
          <UserReviewScore
            score={(checklistData.reduce((n, { rate }) => n + rate, 0) / 5).toFixed(0)}
            highlight={hightlightData}
            checklist={checklistData}
            img={BannerImage.src}
            imgAlt='Score Background'
            blurDataUrl={BannerImage.blurDataURL || ''}
          />
        </div>
      </Container>
    </main>
  )
};
