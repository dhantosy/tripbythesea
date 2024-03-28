import { ContainerProp } from './types';

export default function Container({ children }: ContainerProp) {

  return (
    <div className='flex justify-center h-full'>
      <div className='px-5 w-full max-w-[1260px]'>
        {children}
      </div>
    </div>
  )
};
