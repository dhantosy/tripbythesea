import Container from '@/components/section/Container';
import HeroDestination from '@/components/section/HeroDestination';
import BannerImage from '@public/images/komodo-2.jpg';
import { gallery } from '@/data/destinations';

export default function KomodoIslandPage() {

  return (
    <main>
      <HeroDestination
        img={BannerImage.src}
        blurDataUrl={BannerImage.blurDataURL || ''}
        imgAlt='Komodo ssland page background'
        pretext='Komodo Island'
        title='Tour to the Arctic is an exotic journey on the verge of extreme'
        gallery={gallery}
      />
      <div>
        <Container>
          asd
        </Container>
      </div>
    </main>
  );
}
