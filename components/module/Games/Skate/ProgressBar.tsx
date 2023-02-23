import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  className?: string
}

const ProgressBar: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('c-progress-bar', className)}>
      <span className='c-progress-bar__blank-bar'></span>
      <span className='c-progress-bar__filled-bar'></span>
      <div className='c-progress-bar__dots-container || c-dots-container'>
        <span className='dot' />
        <span className='dot' />
        <span className='dot' />
        <span className='dot' />
        <span className='dot' />
      </div>
    </div>
  )
}

export default ProgressBar
