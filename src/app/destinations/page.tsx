import Container from '@/components/section/Container';
import HeroArchive from '@/components/section/HeroArchive';
import BannerImage from '@public/images/komodo-2.jpg';
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
        subtitle='Exploring the Enchanting Wonders of Komodo Island'
      />
      <div className='relative -mt-32 mb-32'>
        <Container>
          <div className='flex flex-wrap -m-5'>
            {destinations.map((item) => {
              const { image, blurDataUrl, title, topText, url, duration, price } = item;

              return (
                <div className='flex-[50%] p-5' key={item.title}>
                  <CardHorizontalDestination
                    img={image}
                    imgAlt={title}
                    blurDataUrl={blurDataUrl || ''}
                    topText={topText}
                    title={title}
                    url={url}
                    duration={duration}
                    price={price}
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
