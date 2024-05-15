import Image from 'next/image';
import Container from '@/components/section/Container';
import HeroTitleText from '@/components/section/HeroTitleText';
import BannerImage from '@public/images/destination-banner.jpg';
import HeroImage from '@public/images/about.jpg';

export default function AboutUs() {

  return (
    <main>
      <HeroTitleText title='About Us' img={HeroImage.src} imgAlt='Insider guides banner image' blurDataUrl={HeroImage.blurDataURL} />
      <Container>
        <div>
          <div className='py-10'>
            <p className='text-xl md:text-3xl leading-normal'>Welcome to trip by the sea! Your ultimate destination for immersive journalism in the world of diving and snorkeling. At trip by the sea, we are passionate about exploring the depths of the ocean, uncovering its mysteries, and sharing captivating stories that inspire and educate.</p>
          </div>
          <div className='relative mt-0 mb-6 md:mt-6 md:mb-12'>
            <div className='relative rounded-2xl overflow-hidden w-full pb-[50%] md:pb-[30%] after:content-[""] after:w-full after:bg-black after:opacity-30 after:h-full after:absolute'>
              <Image
                src={BannerImage.src}
                alt='about us image'
                sizes='100vw'
                style={{ objectFit: 'cover' }}
                fill
                priority
                placeholder='blur'
                blurDataURL={BannerImage.blurDataURL}
              />
            </div>
          </div>
          <div className='mb-8 text-lg'>
            <h2 className='text-2xl font-semibold text-rose-500 mb-4'>Our Mission</h2>
            <p>Our mission at trip by the sea is to bring the wonders of the underwater world to the surface through insightful journalism. We strive to promote environmental awareness, conservation efforts, and a deeper understanding of marine ecosystems. Through our articles, videos, and photography, we aim to ignite curiosity, foster appreciation, and encourage responsible exploration of the ocean realm.</p>
          </div>
          <div className='mb-8 text-lg'>
            <h2 className='text-2xl font-semibold text-rose-500 mb-4'>Who We Are</h2>
            <p>trip by the sea is a team of dedicated divers, snorkelers, photographers, and writers who are united by a common love for the ocean. Our diverse backgrounds and expertise enable us to deliver engaging content that captures the essence of underwater experiences from around the globe.</p>
          </div>
          <div className='mb-8 text-lg'>
            <h2 className='text-2xl font-semibold text-rose-500 mb-4'>What We Offer</h2>
            <p className='mb-4'><span className='font-semibold'>In-Depth Features:</span> trip by the sea brings you thought-provoking articles and features that delve into various aspects of diving and snorkeling. From profiles of marine species to explorations of underwater caves, our content is designed to inform and inspire.</p>
            <p className='mb-4'><span className='font-semibold'>Travel Guides:</span> Whether you`re a seasoned diver or a novice snorkeler, trip by the sea provides comprehensive travel guides to help you plan your next aquatic adventure. Discover the best dive sites, learn about local marine life, and find tips for eco-friendly travel.</p>
            <p className='mb-4'><span className='font-semibold'>Gear Reviews:</span> Choosing the right equipment is essential for a safe and enjoyable diving or snorkeling experience. trip by the sea offers unbiased reviews and recommendations for gear ranging from masks and fins to underwater cameras, helping you make informed decisions.</p>
            <p><span className='font-semibold'>Conservation Coverage:</span> At trip by the sea, we believe in the importance of preserving our oceans for future generations. We shine a spotlight on conservation initiatives, marine protected areas, and efforts to combat pollution and climate change.</p>
          </div>
          <div className='mb-8 text-lg'>
            <h2 className='text-2xl font-semibold text-rose-500 mb-4'>Join the trip by the sea Community</h2>
            <p className='mb-4'>Whether you`re a seasoned diver, an aspiring snorkeler, or simply a curious observer of the marine world, trip by the sea invites you to join our community. Follow us on social media, subscribe to our newsletter, and dive into a world of endless fascination beneath the waves.</p>
            <p className='mb-4'>At trip by the sea, were not just reporting on the ocean – were diving in, headfirst, and inviting you to come along for the journey. Let`s explore, discover, and protect the wonders of the deep together.</p>
          </div>
        </div>
      </Container>
    </main>
  );
}
