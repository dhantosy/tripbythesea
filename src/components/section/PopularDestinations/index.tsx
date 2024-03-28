import CardHorizontal from '@/components/ui/CardHorizontal'
import BannerImage from '@public/images/komodo-2.jpg';
import Container from '@/components/section/Container';

const data = [
  {
    image: BannerImage.src,
    blurDataUrl: BannerImage.blurDataURL,
    title: 'Komodo Island',
    topText: 'Indonesia',
    url: '/',
    duration: '3 - 5 Days',
    price: 'from $500',
  },
  {
    image: BannerImage.src,
    blurDataUrl: BannerImage.blurDataURL,
    title: 'Nusa Penida',
    topText: 'Indonesia',
    url: '/',
    duration: '3 - 5 Days',
    price: 'from $500',
  },
];

export default function PopularDestinations() {

  return (
    <Container>
      <div className='mb-10'>
        <h2 className='text-4xl'>Top Destinations</h2>
        <p>The most popular destinations in the past months</p>
      </div>
      <div className='flex gap-12'>
        {data.map((item) => {
          const { image, blurDataUrl, title, topText, url, duration, price } = item;

          return (
            <div className='flex-1' key={item.title}>
              <CardHorizontal
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
