import clsx from 'clsx'
import { FC, MouseEventHandler, ReactNode } from 'react'

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary'
  onClick?: MouseEventHandler<HTMLButtonElement>
  active?: boolean
  fullWidth?: boolean
  thick?: boolean
  children: ReactNode
  className?: string
}

const Button: FC<Props> = ({
  variant = 'primary',
  onClick,
  active,
  fullWidth,
  thick,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'c-button',
        active && '--is-active',
        `--variant-${variant}`,
        fullWidth && '--full-width',
        thick && '--thick',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button
