import { IBaseButton } from '@/core/types'
import clsx from 'clsx'
import { FC } from 'react'

const BaseButton: FC<IBaseButton> = ({ label, fullWidth = false, onClick }) => {
  return (
    <button
      className={clsx('c-basebutton', fullWidth && 'c-basebutton--full-width')}
      onClick={() => (onClick ? onClick() : undefined)}
    >
      {label}
    </button>
  )
}

export default BaseButton
