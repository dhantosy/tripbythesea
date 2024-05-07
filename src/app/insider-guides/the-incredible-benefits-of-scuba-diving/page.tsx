import Container from '@/components/section/Container';
import HeroTitleText from '@/components/section/HeroTitleText';
import BannerImage from '@public/images/komodo-2.jpg';
import CardVerticalNews from '@/components/ui/CardVerticalNews';
import { insiderGuidesData } from '@/data/insiderGuides';

export default function BenefitsScubaDiving() {

  return (
    <main>
      <HeroTitleText title='The Incredible Benefits of Scuba Diving' img={BannerImage.src} imgAlt='Insider guides banner image' blurDataUrl={BannerImage.blurDataURL} />
      <Container>
        <div className='flex flex-col md:flex-row -mx-5'>
          <div className='px-5 mt-8 flex-[75%]'>
            <h2 className='font-medium text-lg md:text-xl mb-5'>Scuba diving offers a unique opportunity to immerse yourself in this mesmerizing realm, where vibrant coral reefs, majestic marine life, and hidden treasures await. Beyond the thrill of exploration, scuba diving offers a myriad of benefits for both body and mind. In this article, we`ll delve into the remarkable advantages of diving into the depths and why it`s more than just a recreational activity.</h2>
            <div>
              <div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Physical Fitness</h3>
                  <p>Scuba diving is a full-body workout that engages muscles you may not typically use in day-to-day activities. Swimming against currents, carrying gear, and maintaining buoyancy all contribute to improved strength, endurance, and cardiovascular health. Plus, the weightlessness of water reduces strain on joints, making diving a low-impact exercise suitable for individuals of all ages and fitness levels.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Stress Relief</h3>
                  <p>The serene underwater environment has a tranquilizing effect on the mind, offering a welcome escape from the stresses of everyday life. As you descend into the depths, the rhythmic sound of your breath and the mesmerizing sights of marine life create a sense of calm and relaxation. Scuba diving promotes mindfulness and mental clarity, helping to alleviate anxiety, reduce stress levels, and promote overall well-being.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Connection with Nature</h3>
                  <p>Few experiences compare to the thrill of encountering marine creatures in their natural habitat. From graceful sea turtles to playful dolphins, scuba diving provides a front-row seat to the wonders of the ocean. Immersing yourself in this biodiverse ecosystem fosters a deep appreciation for marine conservation and environmental stewardship. By witnessing the beauty and fragility of underwater ecosystems, divers are inspired to protect and preserve our oceans for future generations.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Sense of Adventure</h3>
                  <p>Exploring uncharted reefs, uncovering hidden wrecks, and venturing into underwater caves evoke a sense of adventure and exploration unlike any other. Scuba diving allows you to push the boundaries of your comfort zone, conquer fears, and embrace new challenges. Whether you`re diving with sharks or exploring a mysterious shipwreck, each dive offers an opportunity for discovery and self-discovery.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Social Connection</h3>
                  <p>Scuba diving is a social activity that fosters camaraderie and connection among like-minded individuals. Whether you`re diving with friends, joining a dive club, or meeting fellow enthusiasts on a dive trip, the shared experience of exploring the underwater world creates bonds that last a lifetime. Divers come from all walks of life, united by their passion for adventure and their love of the ocean.</p>
                </div>
                <div className='my-8'>
                  <p>From physical fitness to mental well-being, scuba diving offers a wealth of benefits for body, mind, and soul. Whether you`re seeking adventure, relaxation, or a deeper connection with nature, diving into the depths promises an unforgettable journey of exploration and discovery. So grab your gear, take the plunge, and embark on an underwater adventure that will leave you breathless in more ways than one.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='px-5 mt-8 flex-[25%]'>
            <div className='sticky top-24'>
              <h2 className='font-semibold text-2xl mb-2'>Related Guides</h2>
              {insiderGuidesData.slice(1, 3).map(({ image, blurDataUrl, title, subtitle, url }) => {
                return (
                  <div className='basis-[100%] md:basis-[33.33%] py-5 grow-0' key={title}>
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
          </div>
        </div>
      </Container>
    </main>
  );
}
