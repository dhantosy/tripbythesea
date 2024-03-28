import HeroBannerTop from '@/components/section/HeroBannerTop';
import BannerImage from '@public/images/komodo-2.jpg';

export default function Home() {

  return (
    <main>
      <HeroBannerTop 
        img={BannerImage.src}
        blurDataUrl={BannerImage.blurDataURL || ''}
        imgAlt='Komodo island beautiful photo'
        title='Komodo Island'
        subtitle='lorem ipsumd asodijow jiwj iaosinen zkuxhueq jsidjisd jiasdjijw jidsjd'
      />
    </main>
  );
}
