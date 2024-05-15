import Container from '@/components/section/Container';
import HeroDestination from '@/components/section/HeroDestination';
import OverviewDestinationPage from '@/components/section/OverviewDestinationPage';
import DestinationDetailLayout from '@/components/section/DestinationDetailLayout';
import CardUserList from '@/components/ui/CardUserList';
import BannerImage from '@public/images/tulamben/tulamben-1.jpg';
import { galleryTulamben } from '@/data/destinations';
import { usersReview } from './data';

export default function TulambenPage() {

  return (
    <main>
      <HeroDestination
        img={BannerImage.src}
        blurDataUrl={BannerImage.blurDataURL || ''}
        imgAlt='tulamben page background'
        pretext='Tulamben'
        title='Explore into one of Bali`s Underwater Paradise'
        gallery={galleryTulamben}
      />
      <Container>
        <DestinationDetailLayout>
          <section className='my-8 md:my-20'>
            <OverviewDestinationPage
              title='Tulamben Overview'
              description='Tulamben is a small village on Bali`s northeast coast, world-famous for its wreck diving, particularly the wreck of the USAT Liberty. This shipwreck, teeming with marine life,  is consistently ranked among the best wreck dives in the world, and Tulamben offers a variety of other dive sites to cater to all experience levels.'
              subtitle0='Wildlife'
              subtitleDesc0={[
                'Tulamben`s reefs are bustling with a myriad of colorful fish species, including angelfish, butterflyfish, clownfish, damselfish, and wrasses.',
                'Tulamben is famous for its rich macro life. Look closely among the corals and rubble for pygmy seahorses, ghost pipefish, ribbon eels, frogfish, and a plethora of nudibranch species.',
                'Octopuses and Cuttlefish are intelligent cephalopods can often be found camouflaged among the rocks and corals, or swimming in the open water.',
                'Keep an eye out for the mesmerizing sight of moray eels peering out from their hiding spots in crevices and holes along the reef.',
                'Tulamben`s reefs are home to a variety of crustaceans, including colorful crabs, shrimps, lobsters, and mantis shrimp.',
              ]}
              subtitle1='Activities'
              subtitleDesc1={[
                'Scuba Diving & Snorkeling',
                'Cycling',
                'Trekking',
                'Relaxation and Wellness',
                'Temple Visits',
                'Beach Lounging'
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
