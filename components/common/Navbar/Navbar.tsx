import clsx from 'clsx'
import { FC, use, useState } from 'react'
import NavbarButton from './NavbarButton'
import Image from 'next/image'
import volumeIcon from '@/public/img/sound-on.svg'
import muteIcon from '@/public/img/sound-off.svg'

interface Props {
  className?: string
}

const Navbar: FC<Props> = ({ className }) => {
  const [isVolume, setIsVolume] = useState(true)
  const click2 = () => {
    console.log('accueil clicked')
  }

  return (
    <div className={clsx('c-navbar', className)}>
      <NavbarButton handleClick={() => setIsVolume(!isVolume)}>
        <Image
          src={isVolume ? volumeIcon : muteIcon}
          alt='logo'
          height='15'
          width='15'
          className='o-picto'
        />
      </NavbarButton>
      <NavbarButton handleClick={click2}>
        <Image
          src={'/img/logo-jo.svg'}
          alt='logo'
          height='15'
          width='15'
          className='o-picto'
        />
        <span>Accueil</span>
      </NavbarButton>
    </div>
  )
}

export default Navbar
