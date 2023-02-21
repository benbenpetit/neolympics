import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  className?: string
}

const Score: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('c-score', className)}>
      <div className='c-score__label'>
        <strong>SCORE</strong>
      </div>
      <div className='c-score__points'>100 pts</div>
    </div>
  )
}

export default Score
