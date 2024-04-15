import Container from '@/components/section/Container'
import { HeroTitleTextProp } from './types'

export default function HeroTitleText({ title, subtitle }: HeroTitleTextProp) {

  return (
    <div className='bg-neutral-800 h-80 flex flex-col'>
      <Container>
        <div className='flex flex-col h-full justify-end py-10'>
          <h1 className='text-neutral-50 text-6xl'>{title}</h1>
          {subtitle && (
            <p className='text-neutral-300 text-xl mt-4'>{subtitle}</p>
          )}
        </div>
      </Container>
    </div>
  )
};
