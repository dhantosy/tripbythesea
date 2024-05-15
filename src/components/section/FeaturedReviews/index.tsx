import CardHighlightReview from '@/components/ui/CardHighlightReview'
import Container from '@/components/section/Container';
import { featuredReviews } from '@/data/featuredReviews';

export default function FeaturedReviews() {

  return (
    <div className='relative py-12 md:py-16 overflow-hidden after:content-[""] after:w-full after:from-neutral-800 after:to-rose-900 after:bg-gradient-to-b after:from-40% after:h-full after:absolute after:top-0 after:left-0'>
      <div className='relative z-10'>
        <Container>
          <div className='mb-6 md:mb-10 text-neutral-50'>
            <h2 className='text-3xl md:text-5xl font-semibold'>Featured User Reviews</h2>
            <p className='text-xl mt-1 md:text-2xl font-playfair italic'>Hand-picked by our experts</p>
          </div>
        </Container>
        <div className='flex flex-nowrap overflow-x-auto m-auto w-full max-w-[1260px] px-5 py-4 gap-6 md:gap-10'>
          {featuredReviews.map((item) => {
            const { image, blurDataUrl, title, user, url, score, destination, imgAlt } = item;

            return (
              <div className='flex flex-shrink-0 flex-[240px] md:flex-[25%]' key={item.title}>
                <CardHighlightReview
                  img={image}
                  imgAlt={imgAlt}
                  blurDataUrl={blurDataUrl || ''}
                  title={title}
                  url={url}
                  score={score}
                  destination={destination}
                  user={user}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};
