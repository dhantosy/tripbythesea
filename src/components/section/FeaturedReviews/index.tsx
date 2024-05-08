import CardHighlightReview from '@/components/ui/CardHighlightReview'
import Container from '@/components/section/Container';
import { featuredReviews } from '@/data/featuredReviews';

export default function FeaturedReviews() {

  return (
    <div className='relative py-16 overflow-hidden after:content-[""] after:w-full after:from-neutral-800 after:to-rose-900 after:bg-gradient-to-b after:from-40% after:h-full after:absolute after:top-0 after:left-0'>
      <Container>
        <div className='relative z-10'>
          <div className='mb-10 text-neutral-50'>
            <h2 className='text-3xl md:text-5xl font-semibold'>Featured User Reviews</h2>
            <p className='text-xl mt-1 md:text-2xl font-playfair italic'>Hand-picked by our experts</p>
          </div>
          <div className='flex flex-col md:flex-row flex-wrap -m-5'>
            {featuredReviews.map((item) => {
              const { image, blurDataUrl, title, user, url, score, destination, imgAlt } = item;

              return (
                <div className='flex-[25%] p-5' key={item.title}>
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
      </Container>
    </div>
  )
};
