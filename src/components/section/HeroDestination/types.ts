interface GalleryDestinationProp {
  src: string;
  srcBlurData?: string;
  alt: string;
}

export interface HeroDestinationProp {
  img: string;
  imgAlt: string;
  blurDataUrl: string;
  pretext: string;
  title: string;
  gallery: GalleryDestinationProp[];
}
