import Image from 'next/image'
import Container from '@/components/section/Container'
import { HeroBannerTopProp } from './types'
import styles from './styles.module.css';

export default function HeroBannerTop({
  img,
  imgAlt,
  title,
  subtitle,
  blurDataUrl
}: HeroBannerTopProp) {

  return (
    <section className={styles.section}>
      <div className={styles.overlay}>
        <Image
          src={img}
          alt={imgAlt}
          sizes='100vw, 33vw'
          style={{ objectFit: 'cover' }}
          fill
          priority
          placeholder='blur'
          blurDataURL={blurDataUrl}
        />
      </div>
      <div className={styles.contentContainer}>
        <Container>
          <div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </Container>
      </div>
    </section>
  )
};
