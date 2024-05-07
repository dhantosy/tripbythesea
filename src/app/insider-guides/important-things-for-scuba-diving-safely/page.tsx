import Container from '@/components/section/Container';
import HeroTitleText from '@/components/section/HeroTitleText';
import BannerImage from '@public/images/komodo-2.jpg';
import CardVerticalNews from '@/components/ui/CardVerticalNews';
import { insiderGuidesData } from '@/data/insiderGuides';

export default function ImportantThingsScubaDivingSafely() {

  return (
    <main>
      <HeroTitleText title='Important Things for Scuba Diving Safely' img={BannerImage.src} imgAlt='Insider guides banner image' blurDataUrl={BannerImage.blurDataURL} />
      <Container>
        <div className='flex flex-col md:flex-row -mx-5'>
          <div className='px-5 mt-8 flex-[75%]'>
            <h2 className='font-medium text-lg md:text-xl mb-5'>Scuba diving opens up a world of wonders beneath the waves, but it`s essential to approach this exhilarating activity with careful consideration and preparation. We`ll explore the crucial things to consider before, during, and after your scuba diving adventures.</h2>
            <div>
              <div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Training and Certification</h3>
                  <p>Before donning your wetsuit and fins, ensure you`ve received proper training and certification from a reputable scuba diving organization. Completing a certified course not only teaches you essential diving skills but also emphasizes safety protocols and emergency procedures, equipping you to handle various underwater situations confidently.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Dive Planning</h3>
                  <p>Proper dive planning is crucial for a safe and enjoyable experience. Consider factors such as dive site location, depth, currents, visibility, and marine life. Create a dive plan outlining entry and exit points, maximum dive time, and emergency procedures. Review your plan with your dive buddy or dive master before entering the water.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Equipment Inspection</h3>
                  <p>Before each dive, thoroughly inspect your scuba diving equipment to ensure everything is in proper working order. Check your dive mask for cracks or leaks, ensure your regulator is functioning correctly, and verify that your buoyancy compensator device (BCD) inflates and deflates smoothly. Never skip equipment checks, as a malfunctioning piece of gear could compromise your safety underwater.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Buddy System</h3>
                  <p>The buddy system is a fundamental safety practice in scuba diving. Always dive with a buddy, and maintain close communication throughout the dive. Keep an eye on each other`s air supply, buoyancy, and general well-being. In the event of an emergency, your dive buddy is your first line of defense, so choose someone you trust and communicate effectively with.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Dive Safety Protocols</h3>
                  <p>Familiarize yourself with standard dive safety protocols, including ascent rates, safety stops, and emergency procedures such as buddy breathing and controlled buoyant lifts. Follow established diving rules and guidelines to minimize risks and ensure a safe return to the surface after each dive.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Environmental Awareness</h3>
                  <p>Respect the marine environment and practice responsible diving behaviors to minimize your impact on fragile underwater ecosystems. Avoid touching or disturbing marine life, refrain from littering or polluting the ocean, and adhere to local conservation regulations. By diving responsibly, you can help preserve the beauty and biodiversity of our oceans for future generations.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Post-Dive Care</h3>
                  <p>After surfacing from a dive, take time to rest, hydrate, and debrief with your dive buddy or dive master. Monitor yourself for any signs of decompression sickness or other dive-related illnesses, and seek medical attention if necessary. Rinse your equipment thoroughly with freshwater to remove salt and debris, and store it properly to ensure longevity and performance.</p>
                </div>
                <div className='my-8'>
                  <p>Scuba diving is an exhilarating adventure that offers unparalleled opportunities for exploration and discovery. By considering these essential factors before, during, and after your dives, you can enjoy a safe and rewarding underwater experience. Remember to dive within your limits, stay vigilant, and always prioritize safety. Happy diving!</p>
                </div>
              </div>
            </div>
          </div>
          <div className='px-5 mt-8 flex-[25%]'>
            <div className='sticky top-24'>
              <h2 className='font-semibold text-2xl mb-2'>Related Guides</h2>
              {insiderGuidesData.slice(2, 4).map(({ image, blurDataUrl, title, subtitle, url }) => {
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
