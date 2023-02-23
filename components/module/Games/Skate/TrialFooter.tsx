import ProgressBar from '@/components/module/Games/Skate/ProgressBar'
import Score from '@/components/module/Games/Skate/Score'
import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  time: number
  totalTime: number
  className?: string
}

const TrialFooter: FC<Props> = ({ time, totalTime, className }) => {
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
