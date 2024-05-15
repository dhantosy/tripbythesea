import CardHighlight from '@/components/ui/CardHighlight';
import CardHorizontalNews from '@/components/ui/CardHorizontalNews'
import Container from '@/components/section/Container';
import { insiderGuidesData } from '@/data/insiderGuides';

export default function TopGuides() {

  return (
    <Container>
      <div className='mb-10'>
        <h2 className='text-3xl md:text-5xl font-semibold'>Insider Guides</h2>
        <p className='text-xl mt-1 md:text-2xl font-playfair italic md:max-w-screen-3sm'>Our exclusive insider guide, offering unparalleled access to off-the-beaten-path dive and snorkel spots</p>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap -m-5'>
        <div className='flex-[50%] p-5'>
          <CardHighlight
            img={insiderGuidesData[0].image}
            imgAlt={insiderGuidesData[0].title}
            blurDataUrl={insiderGuidesData[0].blurDataUrl || ''}
            title={insiderGuidesData[0].title}
            subtitle={insiderGuidesData[0].subtitle}
            url={insiderGuidesData[0].url}
          />
        </div>
        <div className='flex-[50%] p-5'>
          {insiderGuidesData.slice(1, 4).map(({ image, blurDataUrl, title, subtitle, url }) => {

            return (
              <div key={title} className='mb-9 last:mb-0'>
                <CardHorizontalNews
                  img={image}
                  imgAlt={title}
                  blurDataUrl={blurDataUrl || ''}
                  title={title}
                  subtitle={subtitle}
                  url={url}
                />
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
};
