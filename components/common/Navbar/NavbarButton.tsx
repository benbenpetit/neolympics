import clsx from 'clsx'
import { FC, MouseEventHandler, ReactNode } from 'react'
import Image from 'next/image'

interface Props {
  children: ReactNode
  handleClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

const NavbarButton: FC<Props> = ({ children, handleClick, className }) => {
  return (
    <button onClick={handleClick} className={clsx('c-navbarbutton', className)}>
      {children}
    </button>
  )
}

export default NavbarButton
