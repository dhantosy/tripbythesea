import HeroBannerTop from '@/components/section/HeroBannerTop';
import BannerImage from '@public/images/komodo-2.jpg';
import PopularDestinations from '@/components/section/PopularDestinations';
import TopGuides from '@/components/section/TopGuides';
import Container from '@/components/section/Container';
import FeaturedReviews from '@/components/section/FeaturedReviews';

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
      <section className='pt-12 md:pt-16'>
        <PopularDestinations />
      </section>
      <section className='pt-8 md:pt-12'>
        <FeaturedReviews />
      </section>
      <section className='pt-12 md:pt-16'>
        <TopGuides />
      </section>
      <section className='pt-16 md:pt-20'>
        <Container>
          <div className='max-w-[100%] md:max-w-[70%]'>
            <h2 className='text-3xl md:text-5xl font-semibold mb-3 font-playfair italic'>Hello from trip by the sea!</h2>
            <p className='text-xl mt-1 md:text-2xl '>Welcome to trip by the sea! Your ultimate destination for immersive journalism in the world of diving and snorkeling. At trip by the sea, we are passionate about exploring the depths of the ocean, uncovering its mysteries, and sharing captivating stories that inspire and educate.</p>
          </div>
        </Container>
      </section>
    </main>
  );
}
