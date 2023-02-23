import clsx from 'clsx'
import { FC } from 'react'
import Timecode from './Timecode'

interface Props {
  time: number
  totalTime: number
  className?: string
}

const ProgressBar: FC<Props> = ({ time, totalTime, className }) => {
  const NB_DOTS = 5

  const getCurrentTimePercentage = () => {
    return (time / totalTime) * 100
  }

  const shouldIsActive = (index: number) => {
    const progress = getCurrentTimePercentage()

    return progress > (index / (NB_DOTS - 1)) * 100
  }

  return (
    <div className={clsx('c-progress-bar', className)}>
      <Timecode
        time={time}
        className='c-progress-bar__timecode'
        offsetLeft={`${getCurrentTimePercentage()}%`}
      />
      <div className='c-progress-bar__outside'>
        <span
          className='c-progress-bar__outside__inside'
          style={{
            transform: `translate3d(${-100 + getCurrentTimePercentage()}%, 0, 0)`,
          }}
        />
      </div>
      <div className='c-progress-bar__dots-container || c-dots-container'>
        {Array.from({ length: NB_DOTS }).map((_, index) => (
          <span
            className={clsx('dot', shouldIsActive(index) && '--active')}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
