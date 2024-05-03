import CardHorizontalDestination from '@/components/ui/CardHorizontalDestination'
import Container from '@/components/section/Container';
import { destinations } from '@/data/destinations';

export default function PopularDestinations() {

  return (
    <Container>
      <div className='mb-5 relative md:mb-10'>
        <h2 className='text-3xl md:text-5xl font-semibold'>Top Destinations</h2>
        <p className='text-xl mt-1 md:text-2xl font-playfair italic'>The most popular diving site destinations</p>
      </div>
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
  )
};
