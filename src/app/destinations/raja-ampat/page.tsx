import Container from '@/components/section/Container';
import HeroDestination from '@/components/section/HeroDestination';
import OverviewDestinationPage from '@/components/section/OverviewDestinationPage';
import DestinationDetailLayout from '@/components/section/DestinationDetailLayout';
import CardUserList from '@/components/ui/CardUserList';
import BannerImage from '@public/images/raja-ampat/raja-ampat-1.jpg';
import { galleryRajaAmpat } from '@/data/destinations';
import { usersReview } from './data';

export default function RajaAmpatPage() {

  return (
    <main>
      <HeroDestination
        img={BannerImage.src}
        blurDataUrl={BannerImage.blurDataURL || ''}
        imgAlt='raja ampat page background'
        pretext='Raja Ampat'
        title='Unveiling the Underwater Marvels of Indonesia`s Coral Kingdom'
        gallery={galleryRajaAmpat}
      />
      <Container>
        <DestinationDetailLayout>
          <section className='my-8 md:my-20'>
            <OverviewDestinationPage
              title='Raja Ampat Overview'
              description='Raja Ampat, located in the heart of the Coral Triangle in West Papua, Indonesia, is renowned as one of the most biodiverse marine environments on the planet. With its stunning coral reefs, vibrant marine life, and crystal-clear waters, Raja Ampat is a paradise for scuba divers and underwater enthusiasts alike.'
              subtitle0='Wildlife'
              subtitleDesc0={[
                'Raja Ampat is home to an extensive variety of coral species, including hard corals, soft corals, and colorful coral formations.',
                'The waters of Raja Ampat teem with a plethora of fish species, from tiny reef fish to larger pelagics. Some common fish species include Clownfish, Parrotfish, Angelfish, Butterflyfish, Surgeonfish, Groupers, etc.',
                'Famous for its manta ray populations, with several dive sites offering opportunities to encounter these graceful creatures.',
                'Various shark species inhabit the waters of Raja Ampat, including reef sharks, such as blacktip reef sharks and whitetip reef sharks, as well as larger species like hammerhead sharks and even the occasional tiger shark.',
                'Green turtles and hawksbill turtles are commonly sighted in Raja Ampat, with numerous dive sites offering chances to observe these magnificent creatures.',
                'Raja Ampat is frequented by several dolphin species, including spinner dolphins and bottlenose dolphins. Additionally, sightings of various whale species, such as sperm whales and pilot whales, are not uncommon in the region.'
              ]}
              subtitle1='Activities'
              subtitleDesc1={[
                'Scuba diving & Snorkeling',
                'Island Hopping',
                'Birdwatching',
                'Hiking and Trekking',
                'Sunset Cruises',
                'Photography Tours'
              ]}
            />
          </section>
          <section className='relative'>
            <h2 className='text-3xl font-bold'>Users Review</h2>
            <div id='destination-review' className='absolute -top-28' />
            <div>
              {usersReview.map(({ img, imgAlt, tag, title, username, url, score, highlight }, index) => {
                return (
                  <CardUserList
                    key={index}
                    img={img}
                    imgAlt={imgAlt}
                    tag={tag}
                    title={title}
                    username={username}
                    url={url}
                    score={score}
                    hightlight={highlight}
                  />
                )
              })}
            </div>
          </section>
        </DestinationDetailLayout>
      </Container>
    </main>
  );
}
