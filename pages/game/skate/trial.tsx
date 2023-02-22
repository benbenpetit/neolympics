import Navbar from '@/components/common/Navbar/Navbar'
import Background from '@/components/module/Games/Skate/Background'
import TrialFooter from '@/components/module/Games/Skate/TrialFooter'
import Popup from '@/components/common/Navbar/Popup'
import Button from '@/components/common/Button/Button'

import { NextPage } from 'next'
import { useState } from 'react'

const TrialPage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <div>
      <Navbar />
      <Background />
      <TrialFooter />
      {isModalOpen && (
        <Popup label='Abandonner la compétition ?'>
          Retourner à l’accueil vous fera abandonner votre épreuve actuelle. <br /> Êtes
          vous sur de vouloir quitter ?
          <div className='c-popup__button-wrapper'>
            <Button onClick={() => setIsModalOpen(false)} variant='secondary'>
              Oui
            </Button>
            <Button onClick={() => setIsModalOpen(false)} variant='secondary'>
              Non
            </Button>
          </div>
        </Popup>
      )}
    </div>
  )
}

export default TrialPage
