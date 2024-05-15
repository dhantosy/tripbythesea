// komodo
import BannerImageKomodo from '@public/images/komodo-2.jpg';
import GalleryKomodoTwo from '@public/images/komodo/komodo-1.jpg';
import GalleryKomodoThree from '@public/images/komodo/komodo-3.jpg';
import GalleryKomodoFour from '@public/images/komodo/komodo-4.jpg';

// raja ampat
import BannerImageRajaAmpat from '@public/images/raja-ampat/raja-ampat-1.jpg';
import GalleryRajaAmpatTwo from '@public/images/raja-ampat/raja-ampat-2.jpg';
import GalleryRajaAmpatThree from '@public/images/raja-ampat/raja-ampat-3.jpg';
import GalleryRajaAmpatFour from '@public/images/raja-ampat/raja-ampat-4.jpg';

// tulamben
import BannerImageTulamben from '@public/images/tulamben/tulamben-1.jpg';
import GalleryTulambenTwo from '@public/images/tulamben/tulamben-2.jpg';
import GalleryTulambenThree from '@public/images/tulamben/tulamben-3.jpg';
import GalleryTulambenFour from '@public/images/tulamben/tulamben-4.jpg';

// maratua
import BannerImageMaratua from '@public/images/maratua/maratua-1.jpg';
import GalleryMaratuaTwo from '@public/images/maratua/maratua-2.jpg';
import GalleryMaratuaThree from '@public/images/maratua/maratua-3.jpg';
import GalleryMaratuaFour from '@public/images/maratua/maratua-4.jpg';

export const destinations = [
  {
    image: BannerImageKomodo.src,
    blurDataUrl: BannerImageKomodo.blurDataURL,
    title: 'Komodo',
    topText: 'Indonesia',
    url: '/destinations/komodo',
    reviews: '1 Review',
  },
  {
    image: BannerImageTulamben.src,
    blurDataUrl: BannerImageTulamben.blurDataURL,
    title: 'Tulamben',
    topText: 'Indonesia',
    url: '/destinations/tulamben',
    reviews: '3 Reviews',
  },
  {
    image: BannerImageRajaAmpat.src,
    blurDataUrl: BannerImageRajaAmpat.blurDataURL,
    title: 'Raja Ampat',
    topText: 'Indonesia',
    url: '/destinations/raja-ampat',
    reviews: '2 Reviews',
  },
  {
    image: BannerImageMaratua.src,
    blurDataUrl: BannerImageMaratua.blurDataURL,
    title: 'Maratua',
    topText: 'Indonesia',
    url: '/destinations/maratua',
    reviews: '1 Review',
  },
];

export const galleryKomodo = [
  {
    src: GalleryKomodoTwo.src,
    srcBlurData: GalleryKomodoTwo.blurDataURL,
    alt: 'Komodo',
  },
  {
    src: GalleryKomodoThree.src,
    srcBlurData: GalleryKomodoThree.blurDataURL,
    alt: 'Komodo',
  },
  {
    src: GalleryKomodoFour.src,
    srcBlurData: GalleryKomodoFour.blurDataURL,
    alt: 'Komodo',
  },
]

export const galleryRajaAmpat = [
  {
    src: GalleryRajaAmpatThree.src,
    srcBlurData: GalleryRajaAmpatTwo.blurDataURL,
    alt: 'Raja Ampat Photos',
  },
  {
    src: GalleryRajaAmpatTwo.src,
    srcBlurData: GalleryRajaAmpatThree.blurDataURL,
    alt: 'Raja Ampat Photos',
  },
  {
    src: GalleryRajaAmpatFour.src,
    srcBlurData: GalleryRajaAmpatFour.blurDataURL,
    alt: 'Raja Ampat Photos',
  },
]

export const galleryTulamben = [
  {
    src: GalleryTulambenFour.src,
    srcBlurData: GalleryTulambenTwo.blurDataURL,
    alt: 'Tulamben Photos',
  },
  {
    src: GalleryTulambenTwo.src,
    srcBlurData: GalleryTulambenThree.blurDataURL,
    alt: 'Tulamben Photos',
  },
  {
    src: GalleryTulambenThree.src,
    srcBlurData: GalleryTulambenFour.blurDataURL,
    alt: 'Tulamben Photos',
  },
]

export const galleryMaratua = [
  {
    src: GalleryMaratuaThree.src,
    srcBlurData: GalleryMaratuaTwo.blurDataURL,
    alt: 'Maratua Photos',
  },
  {
    src: GalleryMaratuaTwo.src,
    srcBlurData: GalleryMaratuaThree.blurDataURL,
    alt: 'Maratua Photos',
  },
  {
    src: GalleryMaratuaFour.src,
    srcBlurData: GalleryMaratuaFour.blurDataURL,
    alt: 'Tulamben Photos',
  },
]
