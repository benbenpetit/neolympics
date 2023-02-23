import ProgressBar from '@/components/module/Games/Skate/ProgressBar'
import Score from '@/components/module/Games/Skate/Score'
import Timecode from '@/components/module/Games/Skate/Timecode'
import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  className?: string
}

const TrialFooter: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('c-trial-footer', className)}>
      <Timecode className='c-trial-footer__timecode' />
      <div className='c-trial-footer__progress'>
        <ProgressBar className='c-trial-footer__progess-bar' />
        <Score className='c-score' />
      </div>
    </div>
  )
}

export default TrialFooter
