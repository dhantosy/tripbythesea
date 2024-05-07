import Container from '@/components/section/Container';
import HeroTitleText from '@/components/section/HeroTitleText';
import BannerImage from '@public/images/komodo-2.jpg';
import CardVerticalNews from '@/components/ui/CardVerticalNews';
import { insiderGuidesData } from '@/data/insiderGuides';

export default function TopFiveDivingEquipmentBrands() {

  return (
    <main>
      <HeroTitleText title='Top 5 Diving Equipment Brands' img={BannerImage.src} imgAlt='Insider guides banner image' blurDataUrl={BannerImage.blurDataURL} />
      <Container>
        <div className='flex flex-col md:flex-row -mx-5'>
          <div className='px-5 mt-8 flex-[75%]'>
            <h2 className='font-medium text-lg md:text-xl mb-5'>Choosing the right scuba diving equipment is essential for a safe and enjoyable underwater adventure. With a myriad of brands offering diving gear, selecting reliable and high-quality equipment can be daunting. To simplify your search, we`ve compiled a list of the top five scuba diving equipment brands renowned for their innovation, durability, and performance.</h2>
            <div>
              <div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Scubapro</h3>
                  <p>With a legacy spanning over 50 years, Scubapro is a household name in the diving community. Known for its commitment to quality and innovation, Scubapro offers a comprehensive range of diving equipment, including regulators, BCDs, dive computers, wetsuits, and accessories. From recreational divers to technical explorers, Scubapro`s products are trusted by professionals and enthusiasts alike for their reliability and performance.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Aqualung</h3>
                  <p>Aqualung has been revolutionizing the diving industry since 1943 with its pioneering designs and cutting-edge technologies. From the iconic Aqua Lung® regulator to the innovative i770R dive computer, Aqualung`s products are synonymous with quality, durability, and comfort. Whether you`re exploring coral reefs or deep wrecks, Aqualung`s extensive lineup of dive gear caters to divers of all skill levels and preferences.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Mares</h3>
                  <p>Mares has been pushing the boundaries of diving since its inception in 1949, consistently delivering innovative solutions to meet the evolving needs of divers worldwide. From masks and fins to dive computers and drysuits, Mares` products combine Italian craftsmanship with advanced engineering to provide superior performance in the water. With a focus on sustainability and environmental responsibility, Mares is committed to preserving the underwater world for future generations.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Cressi</h3>
                  <p>Founded in 1946 by two brothers passionate about diving, Cressi has grown into a global leader in the manufacturing of diving equipment. Renowned for its ergonomic designs and attention to detail, Cressi offers a diverse range of products tailored to the needs of divers of all ages and experience levels. Whether you`re snorkeling in shallow waters or embarking on a technical dive, Cressi`s gear is designed to enhance your underwater experience.</p>
                </div>
                <div className='my-5'>
                  <h3 className='font-semibold text-lg'>Oceanic</h3>
                  <p>Since 1972, Oceanic has been at the forefront of diving innovation, consistently raising the bar with its groundbreaking technologies and user-friendly designs. From the iconic Alpha 10 regulator to the feature-packed Veo 4.0 dive computer, Oceanic`s products are engineered to exceed the expectations of even the most demanding divers. With a focus on performance, durability, and customer satisfaction, Oceanic continues to inspire divers around the world to explore the ocean`s depths with confidence.</p>
                </div>
                <div className='my-8'>
                  <p>When it comes to scuba diving equipment, choosing trusted brands is paramount to your safety and enjoyment underwater. Whether you`re seeking reliability, performance, or innovation, the top five scuba diving equipment brands mentioned above have earned their reputation as industry leaders. With their extensive range of products and unwavering commitment to quality, these brands have everything you need to dive deep and explore the wonders of the underwater world.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='px-5 mt-8 flex-[25%]'>
            <div className='sticky top-24'>
              <h2 className='font-semibold text-2xl mb-2'>Related Guides</h2>
              {insiderGuidesData.slice(0, 2).map(({ image, blurDataUrl, title, subtitle, url }) => {
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
