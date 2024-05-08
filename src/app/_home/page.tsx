import HeroBannerTop from '@/components/section/HeroBannerTop';
import BannerImage from '@public/images/raja-ampat/raja-ampat-1.jpg';
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
        imgAlt='Raja ampat beautiful photo'
        pretext='Indonesia'
        title='Raja Ampat'
        subtitle='Explore the Enchanting Wonders of Raja Ampat Indonesia`s Natural Treasure'
        btnText='See Detail'
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
      <section className='pt-12 pb-40 md:pt-20 mt-12 md:mt-20 -mb-48 bg-sky-50'>
        <Container>
          <div className='max-w-[100%] md:max-w-[70%]'>
            <h2 className='text-3xl md:text-5xl font-semibold mb-3 font-playfair italic'>Hello from trip by the sea!</h2>
            <p className='text-xl mt-1 md:text-2xl '>Welcome! Your ultimate destination for immersive journalism in the world of diving and snorkeling. At trip by the sea, we are passionate about exploring the depths of the ocean, uncovering its mysteries, and sharing captivating stories that educate and inspire.</p>
          </div>
        </Container>
      </section>
    </main>
  );
}
