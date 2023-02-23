import ProgressBar from '@/components/module/Games/Skate/ProgressBar'
import Score from '@/components/module/Games/Skate/Score'
import Timecode from '@/components/module/Games/Skate/Timecode'
import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'

interface Props {
  className?: string
}

const TrialFooter: FC<Props> = ({ className }) => {
  const [time, setTime] = useState(0)
  const totalTime = 45

  useEffect(() => {
    if (time < totalTime) {
      setTimeout(() => setTime(time + 0.1), 100)
    }
  }, [time])

  return (
    <div className={clsx('c-trial-footer', className)}>
      <div className='c-trial-footer__progress'>
        <ProgressBar
          time={time}
          totalTime={totalTime}
          className='c-trial-footer__progess-bar'
        />
        <Score className='c-trial-footer__score' />
      </div>
    </div>
  )
}

export default TrialFooter
