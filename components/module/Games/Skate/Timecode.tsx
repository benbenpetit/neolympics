import Image from 'next/image'
import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  time: number
  offsetLeft: string
  className?: string
}

const Timecode: FC<Props> = ({ time = 0, offsetLeft = '0', className }) => {
  const getLeadingZeroTime = (seconds: number) => {
    const fixedSeconds = seconds.toFixed(1)

    return fixedSeconds.length <= 3 ? `0${fixedSeconds}` : fixedSeconds
  }

  return (
    <div className={clsx('c-timecode', className)} style={{ left: offsetLeft }}>
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
        <span className='c-timecode__timer'>{getLeadingZeroTime(time)}</span>
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
