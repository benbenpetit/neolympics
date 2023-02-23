import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  points: number
  className?: string
}

const Score: FC<Props> = ({ points, className }) => {
  return (
    <div className={clsx('c-score', className)}>
      <span className='c-score__label'>Score</span>
      <span className='c-score__points'>
        {points} pt{points > 0 && 's'}
      </span>
    </div>
  )
}

export default Score
