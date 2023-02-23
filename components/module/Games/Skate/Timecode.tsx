import Image from 'next/image'
import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  className?: string
}

const Timecode: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('c-timecode', className)}>
      <div className='c-timecode__wrapper'>
        <span className='c-timecode__picto'>
          <Image
            src={'/img/timer.svg'}
            alt='timer'
            width='15'
            height='15'
            className='o-picto'
          />
        </span>
        <span className='c-timecode__timer'>0:09</span>
      </div>
      <div className='c-timecode__cursor'>
        <Image
          src={'/img/triangle.svg'}
          alt='triangle'
          width='15'
          height='15'
          className='o-picto'
        />
      </div>
    </div>
  )
}

export default Timecode
