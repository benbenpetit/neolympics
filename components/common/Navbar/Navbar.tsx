import clsx from 'clsx'
import { FC, use, useState } from 'react'
import NavbarButton from './NavbarButton'
import Image from 'next/image'
import volumeIcon from '@/public/img/sound-on.svg'
import muteIcon from '@/public/img/sound-off.svg'
import Popup from '@/components/common/Navbar/Popup'
import Button from '@/components/common/Button/Button'
import { useRouter } from 'next/router'

interface Props {
  className?: string
}

const Navbar: FC<Props> = ({ className }) => {
  const router = useRouter()
  const [isVolume, setIsVolume] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const accueilClick = () => {
    setIsModalOpen(true)
  }

  const continueClick = () => {
    setIsModalOpen(false)
  }

  const exitClick = () => {
    router.replace('/')
    setIsModalOpen(false)
  }

  return (
    <div className='c-nav'>
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
        <NavbarButton handleClick={accueilClick}>
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
      {isModalOpen && (
        <Popup label='Abandonner la compétition ?'>
          Retourner à l’accueil vous fera abandonner votre épreuve actuelle. <br /> Êtes
          vous sur de vouloir quitter ?
          <div className='c-popup__button-wrapper'>
            <Button onClick={exitClick} variant='secondary'>
              Oui
            </Button>
            <Button onClick={continueClick} variant='secondary'>
              Non
            </Button>
          </div>
        </Popup>
      )}
    </div>
  )
}

export default Navbar
