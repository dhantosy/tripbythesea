import HeroBannerTop from '@/components/section/HeroBannerTop';
import BannerImage from '@public/images/komodo-2.jpg';
import PopularDestinations from '@/components/section/PopularDestinations';

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
        btnUrl='/'
        btnSecondaryText='Explore'
        btnSecondaryUrl='/'
      />
      <section className='py-24'>
        <PopularDestinations />
      </section>
    </main>
  );
}
