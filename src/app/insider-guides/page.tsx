import Container from '@/components/section/Container';
import HeroTitleText from '@/components/section/HeroTitleText';
import BannerImage from '@public/images/about-banner.jpg';
import CardVerticalNews from '@/components/ui/CardVerticalNews';
import { insiderGuidesData } from '@/data/insiderGuides';

export default function AboutUs() {

  return (
    <main>
      <HeroTitleText title='Insider Guides' img={BannerImage.src} imgAlt='Insider guides banner image' blurDataUrl={BannerImage.blurDataURL} />
      <Container>
        <div className='flex flex-wrap -m-5 my-10'>
          {insiderGuidesData.map(({ image, blurDataUrl, title, subtitle, url }) => {
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
