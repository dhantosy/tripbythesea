import Container from '@/components/section/Container';
import HeroArchive from '@/components/section/HeroArchive';
import BannerImage from '@public/images/guide-banner.jpg';
import CardHorizontalDestination from '@/components/ui/CardHorizontalDestination';
import { destinations } from '@/data/destinations';

export default function Destinations() {

  return (
    <main>
      <HeroArchive
        img={BannerImage.src}
        blurDataUrl={BannerImage.blurDataURL || ''}
        imgAlt='Destination list page background'
        title='Sea Trip Destinations'
        subtitle='Explore Our Curated Sea Destinations'
      />
      <div className='relative -mt-28 mb-32'>
        <Container>
          <div className='flex flex-wrap -mx-5'>
            {destinations.map((item) => {
              const { image, blurDataUrl, title, topText, url, reviews } = item;

              return (
                <div className='flex-[100%] md:flex-[50%] px-5' key={item.title}>
                  <CardHorizontalDestination
                    img={image}
                    imgAlt={title}
                    blurDataUrl={blurDataUrl || ''}
                    topText={topText}
                    title={title}
                    url={url}
                    reviews={reviews}
                  />
                </div>
              )
            })}
          </div>
        </Container>
      </div>
    </main>
  );
}
