import Container from '@/components/section/Container';
import HeroTitleText from '@/components/section/HeroTitleText';
import BannerImageAvoid from '@public/images/blog/blog-dive-avoid.jpg';
import CardVerticalNews from '@/components/ui/CardVerticalNews';
import { insiderGuidesData } from '@/data/insiderGuides';

export default function ThingsToAvoidDuringScubaDiving() {

  return (
    <main>
      <HeroTitleText title='10 Things to Avoid During Diving' img={BannerImageAvoid.src} imgAlt='Insider guides banner image' blurDataUrl={BannerImageAvoid.blurDataURL} />
      <Container>
        <div className='flex flex-col md:flex-row -mx-5'>
          <div className='px-5 mt-8 flex-[75%]'>
            <h2 className='font-medium text-lg md:text-xl mb-5'>it`s important to approach diving with responsibility and respect for the environment. Certain actions can not only jeopardize your safety but also harm marine life and delicate ecosystems. In this article, we`ll discuss the top ten things to avoid during scuba diving to ensure a safe, enjoyable, and environmentally conscious experience.</h2>
            <div>
              <div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Skipping Pre-Dive Safety Checks</h3>
                  <p>Before descending into the depths, always perform thorough pre-dive safety checks on your equipment. Skipping this crucial step increases the risk of equipment malfunctions or failures underwater, compromising your safety and the safety of your dive buddy.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Ignoring Dive Briefings</h3>
                  <p>Dive briefings provide essential information about the dive site, including entry and exit points, depth limits, currents, and potential hazards. Pay close attention to dive briefings and follow the instructions provided by your dive guide or dive master to ensure a safe and successful dive.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Descending Too Quickly</h3>
                  <p>Rapid descents can lead to barotrauma, a painful condition caused by the rapid changes in pressure. Descend slowly and equalize your ears frequently to prevent discomfort or injury. Take your time and enjoy the gradual transition into the underwater world.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Ascending Too Quickly</h3>
                  <p>Rapid ascents increase the risk of decompression sickness, a potentially life-threatening condition caused by the formation of nitrogen bubbles in the bloodstream. Ascend slowly and make safety stops as necessary to off-gas accumulated nitrogen and minimize the risk of decompression illness.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Touching or Disturbing Marine Life</h3>
                  <p>Respect the marine environment by refraining from touching or disturbing marine life. Avoid chasing, grabbing, or harassing animals, as this can cause stress or injury to delicate species. Practice passive observation and admire marine life from a respectful distance.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Overexerting Yourself</h3>
                  <p>Underwater environments can be physically demanding, and it`s easy to overexert yourself if you`re not careful. Pace yourself during dives, conserve your energy, and avoid pushing your limits beyond your comfort zone. Remember, diving should be enjoyable, not exhausting.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Kicking Up Sediment</h3>
                  <p>Excessive finning or kicking can stir up sediment and reduce visibility underwater, spoiling the experience for yourself and other divers. Maintain good buoyancy control and fin with slow, deliberate movements to minimize disturbances to the environment.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Diving Beyond Your Certification Level</h3>
                  <p>Stay within the limits of your training and certification level when planning dives. Diving beyond your skill level or experience can increase the risk of accidents or emergencies underwater. Continue your education and training to expand your diving skills safely and responsibly.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Removing Marine Life or Artifacts</h3>
                  <p>Leave only bubbles and take only photographs when diving. Removing marine life or artifacts from the underwater environment is illegal and harmful to delicate ecosystems. Respect marine protected areas and follow local regulations regarding marine conservation.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Neglecting Dive Safety Protocols</h3>
                  <p>Dive safety protocols are in place to protect divers and minimize risks underwater. Familiarize yourself with standard safety procedures, including emergency ascent and buddy assistance techniques. Always dive with a buddy, maintain close communication, and be prepared to respond calmly and effectively in case of emergencies.</p>
                </div>
                <div className='my-8'>
                  <p>Scuba diving is a privilege that comes with a responsibility to protect and preserve the marine environment. By avoiding these ten common mistakes and practicing responsible diving behaviors, you can ensure a safe, enjoyable, and environmentally conscious diving experience. Respect the ocean, respect its inhabitants, and dive responsibly for the benefit of all.</p>
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
