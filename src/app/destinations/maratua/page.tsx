import Container from '@/components/section/Container';
import HeroDestination from '@/components/section/HeroDestination';
import OverviewDestinationPage from '@/components/section/OverviewDestinationPage';
import DestinationDetailLayout from '@/components/section/DestinationDetailLayout';
import CardUserList from '@/components/ui/CardUserList';
import BannerImage from '@public/images/maratua/maratua-1.jpg';
import { galleryMaratua } from '@/data/destinations';
import { usersReview } from './data';

export default function TulambenPage() {

  return (
    <main>
      <HeroDestination
        img={BannerImage.src}
        blurDataUrl={BannerImage.blurDataURL || ''}
        imgAlt='Maratua page background'
        pretext='Maratua'
        title='A Breathtaking Escape to Pristine Beaches and Tranquil Seas'
        gallery={galleryMaratua}
      />
      <Container>
        <DestinationDetailLayout>
          <section className='my-8 md:my-20'>
            <OverviewDestinationPage
              title='Maratua Overview'
              description='Maratua Island, a hidden gem off the coast of East Kalimantan, Borneo, boasts some of Indonesia`s most spectacular diving. Renowned for its pristine coral reefs, thrilling currents, and encounters with majestic marine life, Maratua offers an unforgettable underwater adventure.'
              subtitle0='Wildlife'
              subtitleDesc0={[
                'The star attraction of Maratua`s underwater world is undoubtedly the majestic manta ray.These gentle giants can grow up to wingspans of 7 meters and are often encountered gracefully gliding along the currents.',
                'Several shark species call Maratua`s waters home, including the awe - inspiring thresher shark, easily identified by its elongated upper tail lobe.Divers might also encounter reef sharks and occasionally even hammerhead sharks.',
                'Maratua`s currents attract a dazzling array of schooling fish.Divers can expect to see barracuda, jackfish, snapper, and even large schools of tuna.',
                'For those with a keen eye, Maratua`s reefs and muck diving sites are teeming with fascinating macro life. Look out for nudibranchs, shrimp, crabs, and even pygmy seahorses!',
                'Maratua`s surrounding islands provide habitat for a variety of birdlife. Keep an eye out for hornbills, eagles, and seabirds soaring over the crystal-clear waters.',
              ]}
              subtitle1='Activities'
              subtitleDesc1={[
                'Scuba Diving & Snorkeling',
                'Island Hopping',
                'Unwind on Pristine Shores',
                'Delve into the Rainforest',
                'Dolphin Encounters',
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
