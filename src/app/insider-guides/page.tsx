import Container from '@/components/section/Container';
import HeroTitleText from '@/components/section/HeroTitleText';
import BannerImage from '@public/images/komodo-2.jpg';
import CardVerticalNews from '@/components/ui/CardVerticalNews';

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

export default function AboutUs() {

  return (
    <main>
      <HeroTitleText title='Insider Guides' img={BannerImage.src} imgAlt='Insider guides banner image' blurDataUrl={BannerImage.blurDataURL} />
      <Container>
        <div className='flex flex-wrap -m-5 my-10'>
          {data.map(({ image, blurDataUrl, title, subtitle, url }) => {
            return (
              <div className='basis-[100%] md:basis-[33.33%] p-5 grow-0' key={title}>
                <CardVerticalNews
                  img={image}
                  imgAlt={title}
                  blurDataUrl={blurDataUrl || ''}
                  url={url}
                  title={title}
                  subtitle={subtitle}
                />
              </div>
            )
          })}
        </div>
      </Container>
    </main>
  );
}
