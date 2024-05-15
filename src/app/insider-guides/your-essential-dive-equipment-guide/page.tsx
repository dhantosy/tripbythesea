import Container from '@/components/section/Container';
import HeroTitleText from '@/components/section/HeroTitleText';
import BannerImageBenefit from '@public/images/blog/blog-dive-benefit.jpg';
import CardVerticalNews from '@/components/ui/CardVerticalNews';
import { insiderGuidesData } from '@/data/insiderGuides';

export default function EssentialDiveEquipmentGuide() {

  return (
    <main>
      <HeroTitleText title='Your Essential Dive Equipment Guide' img={BannerImageBenefit.src} imgAlt='Insider guides banner image' blurDataUrl={BannerImageBenefit.blurDataURL} />
      <Container>
        <div className='flex flex-col md:flex-row -mx-5'>
          <div className='px-5 mt-8 flex-[75%]'>
            <h2 className='font-medium text-lg md:text-xl mb-5'>Whether you`re a seasoned diver or just dipping your toes into the underwater realm, having the right equipment is crucial for safety, comfort, and enjoyment. In this comprehensive guide, we`ll explore the essential gear you need for your underwater adventures.</h2>
            <div>
              <div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Dive Mask</h3>
                  <p>Your window to the underwater world, a dive mask is essential for clear vision beneath the waves. Look for a mask that fits snugly yet comfortably on your face, with a wide field of vision and a skirt made of high-quality silicone for a reliable seal.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Snorkel</h3>
                  <p>A snorkel allows you to breathe while floating on the surface, conserving precious air in your scuba tank. Choose a snorkel with a comfortable mouthpiece and a streamlined design to minimize drag in the water.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Fins</h3>
                  <p>Fins are your underwater propulsion system, allowing you to move efficiently through the water with minimal effort. Look for fins that fit snugly yet comfortably, providing ample propulsion without causing discomfort or fatigue.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Wetsuit or Drysuit</h3>
                  <p>Protecting your body from the elements, a wetsuit or drysuit is essential for maintaining warmth and comfort during dives. Choose a wetsuit for warm water diving and a drysuit for colder conditions, ensuring the perfect balance of insulation and mobility.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Buoyancy Compensator (BC) or Buoyancy Control Device (BCD)</h3>
                  <p>Your buoyancy control device is your lifeline underwater, allowing you to maintain neutral buoyancy at any depth. Look for a BC or BCD that fits comfortably and offers intuitive controls for easy adjustment underwater.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Regulator</h3>
                  <p>The regulator is your connection to your scuba tank, delivering air to your lungs at the perfect pressure. Invest in a high-quality regulator from a reputable manufacturer, and make sure to service it regularly to ensure peak performance.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Dive Computer</h3>
                  <p>A dive computer is your dive buddy, providing real-time information on depth, time, and decompression limits to help you dive safely. Look for a dive computer with intuitive controls, a clear display, and features like air integration and dive logging for added convenience.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Dive Knife or Cutting Tool</h3>
                  <p>A dive knife or cutting tool is an essential safety device, allowing you to free yourself from entanglements or cut through lines and ropes in an emergency. Choose a knife or tool that is corrosion-resistant and easy to access, either strapped to your leg or attached to your BC.</p>
                </div>
                <div className='my-8'>
                  <p>Equipped with the right gear, you`re ready to embark on unforgettable underwater adventures. Whether you`re exploring vibrant coral reefs, mysterious wrecks, or tranquil kelp forests, having the right equipment ensures a safe, comfortable, and enjoyable diving experience. So gear up, dive in, and discover the wonders that await beneath the waves. Happy diving!</p>
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
