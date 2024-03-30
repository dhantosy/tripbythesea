import CardHighlight from '@/components/ui/CardHighlight';
import CardHorizontalNews from '@/components/ui/CardHorizontalNews'
import BannerImage from '@public/images/komodo-2.jpg';
import Container from '@/components/section/Container';

const data = [
  {
    image: BannerImage.src,
    blurDataUrl: BannerImage.blurDataURL,
    title: 'Gear Up: Diving into the World of Aquatic Equipment',
    subtitle: 'Unveiling the Essentials and Innovations for Your Underwater Adventures.',
    url: '/',
  },
  {
    image: BannerImage.src,
    blurDataUrl: BannerImage.blurDataURL,
    title: 'Exploring the Depths of Diving Equipment',
    subtitle: 'Explore the Ocean`s Mysteries Safely and Stylishly with Our Comprehensive Guide to Diving Gear Essentials.',
    url: '/',
  },
  {
    image: BannerImage.src,
    blurDataUrl: BannerImage.blurDataURL,
    title: 'Your Ultimate Dive Equipment Guide',
    subtitle: 'Dive into the Depths with Confidence: Expert Insights, Reviews, and Tips on Essential Diving Gear.',
    url: '/',
  },
];

export default function TopGuides() {

  return (
    <Container>
      <div className='mb-10'>
        <h2 className='text-4xl'>Insider Guides</h2>
        <p>Our exclusive insider guide, offering unparalleled access to off-the-beaten-path dive and snorkel spots</p>
      </div>
      <div className='flex flex-wrap -m-5'>
        <div className='flex-[50%] p-5'>
          <CardHighlight
            img={data[0].image}
            imgAlt={data[0].title}
            blurDataUrl={data[0].blurDataUrl || ''}
            title={data[0].title}
            subtitle={data[0].subtitle}
            url={data[0].url}
          />
        </div>
        <div className='flex-[50%] p-5'>
          {data.map(({ image, blurDataUrl, title, subtitle, url }) => {

            return (
              <div key={title} className='mb-9 last:mb-0'>
                <CardHorizontalNews
                  img={image}
                  imgAlt={title}
                  blurDataUrl={blurDataUrl || ''}
                  title={title}
                  subtitle={subtitle}
                  url={url}
                />
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
};
