import CardHorizontalDestination from '@/components/ui/CardHorizontalDestination'
import Container from '@/components/section/Container';
import { destinations } from '@/data/destinations';

export default function PopularDestinations() {

  return (
    <Container>
      <div className='mb-10'>
        <h2 className='text-4xl'>Top Destinations</h2>
        <p>The most popular destinations</p>
      </div>
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
  )
};
