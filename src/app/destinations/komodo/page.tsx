import Container from '@/components/section/Container';
import HeroDestination from '@/components/section/HeroDestination';
import OverviewDestinationPage from '@/components/section/OverviewDestinationPage';
import DestinationDetailLayout from '@/components/section/DestinationDetailLayout';
import CardUserList from '@/components/ui/CardUserList';
import BannerImage from '@public/images/komodo-2.jpg';
import { galleryKomodo } from '@/data/destinations';
import { usersReview } from './data';

export default function KomodoIslandPage() {

  return (
    <main>
      <HeroDestination
        img={BannerImage.src}
        blurDataUrl={BannerImage.blurDataURL || ''}
        imgAlt='Komodo ssland page background'
        pretext='Komodo'
        title='A Journey to One of Indonesia`s Natural Treasures'
        gallery={galleryKomodo}
      />
      <Container>
        <DestinationDetailLayout>
          <section className='my-8 md:my-20'>
            <OverviewDestinationPage
              title='Komodo Overview'
              description='Komodo Island is a renowned destination located in the Indonesian archipelago, specifically within the Lesser Sunda Islands. It is a UNESCO World Heritage Site and a designated biosphere reserve, recognized for its exceptional biodiversity and unique ecosystems. Sustainable tourism practices are encouraged to minimize the ecological impact on the fragile island ecosystems. Komodo Island is a must-visit destination for nature lovers and adventure seekers, offering a rare opportunity to encounter the iconic Komodo dragon in its natural environment, explore stunning landscapes, and discover the rich marine biodiversity of the region. With its unique wildlife, pristine beaches, and immersive experiences, Komodo Island continues to captivate travelers from around the world.'
              subtitle0='Wildlife'
              subtitleDesc0={[
                'The Island is the natural habitat of the Komodo dragon, the world`s largest lizard species.These giant reptiles, known for their predatory behavior, roam freely on the island.',
                'The island is also home to diverse flora and fauna, including deer, water buffalo, wild boar, monkeys, snakes, and various bird species.',
                'The surrounding marine environment is rich in biodiversity, featuring coral reefs, colorful fish, sharks, manta rays, and sea turtles.'
              ]}
              subtitle1='Activities'
              subtitleDesc1={[
                'Komodo Dragon Tours',
                'Hiking and Trekking',
                'Snorkeling and Diving',
                'Beach Relaxation'
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
