import BannerImage from '@public/images/komodo-2.jpg';
import BannerImageRajaAmpat from '@public/images/raja-ampat/raja-ampat-1.jpg';
import BannerImageMaratua from '@public/images/maratua/maratua-1.jpg';

export const featuredReviews = [
  {
    image: BannerImageRajaAmpat.src,
    blurDataUrl: BannerImageRajaAmpat.blurDataURL,
    imgAlt: 'Destination review image',
    destination: 'Raja Ampat',
    title: 'Best Diving Experience!',
    score: '100',
    user: 'Stefany A',
    url: '/destinations/raja-ampat/stefany-a',
  },
  {
    image: BannerImageRajaAmpat.src,
    blurDataUrl: BannerImageRajaAmpat.blurDataURL,
    imgAlt: 'Destination review image',
    destination: 'Raja Ampat',
    title: 'Diving Haven Achieves Near Perfection',
    score: '94',
    user: 'Edward W',
    url: '/destinations/raja-ampat/edward-w',
  },
  {
    image: BannerImage.src,
    blurDataUrl: BannerImage.blurDataURL,
    imgAlt: 'Destination review image',
    destination: 'Komodo Island',
    title: 'One of the Best Diving Area',
    score: '88',
    user: 'Sightsea Expeditions',
    url: '/destinations/komodo/sightsea-expeditions',
  },
  {
    image: BannerImageMaratua.src,
    blurDataUrl: BannerImageMaratua.blurDataURL,
    imgAlt: 'Destination review image',
    destination: 'Maratua',
    title: 'Diving Area that Offers Variety Activities',
    score: '86',
    user: 'Edward W',
    url: '/destinations/maratua/edward-w',
  },
]
