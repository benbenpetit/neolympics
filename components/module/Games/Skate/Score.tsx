import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  className?: string
}

const Score: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('c-score', className)}>
      <span className='c-score__label'>Score</span>
      <span className='c-score__points'>100 pts</span>
    </div>
  )
}

export default Score
