import clsx from 'clsx'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  label?: string
}

const Popup: FC<Props> = ({ children, label, className }) => {
  return (
    <div className={clsx('c-popup', className)}>
      <div className='c-popup__label'>{label}</div>
      <div className='c-popup__content'>{children}</div>
    </div>
  )
}

export default Popup
