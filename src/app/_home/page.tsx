import HeroBannerTop from '@/components/section/HeroBannerTop';
import BannerImage from '@public/images/komodo-2.jpg';
import PopularDestinations from '@/components/section/PopularDestinations';
import TopGuides from '@/components/section/TopGuides';
import Container from '@/components/section/Container';

export default function Home() {

  return (
    <main>
      <HeroBannerTop 
        img={BannerImage.src}
        blurDataUrl={BannerImage.blurDataURL || ''}
        imgAlt='Komodo island beautiful photo'
        pretext='Indonesia'
        title='Komodo Island'
        subtitle='Exploring the Enchanting Wonders of Komodo Island: Indonesia`s Natural Treasure'
        btnText='Check Now'
        btnUrl='/destinations/komodo-island'
        btnSecondaryText='Other Destinations'
        btnSecondaryUrl='/destinations'
      />
      <section className='pt-24'>
        <PopularDestinations />
      </section>
      <section className='pt-24'>
        <TopGuides />
      </section>
      <section className='pt-24'>
        <Container>
          <div className='max-w-[70%]'>
            <h2>Hello from trip by the sea!</h2>
            <p>Our mission is to bring the wonders of the underwater world to the surface through insightful journalism. We strive to promote environmental awareness, conservation efforts, and a deeper understanding of marine ecosystems. Through our articles, videos, and photography, we aim to ignite curiosity, foster appreciation, and encourage responsible exploration of the ocean realm.</p>
          </div>
        </Container>
      </section>
    </main>
  );
}
