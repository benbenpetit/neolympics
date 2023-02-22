import BaseButton from '@/components/common/Button/BaseButton'
import Button from '@/components/common/Button/Button'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <div className='c-home o-container --vertical u-align-center u-justify-center'>
      <h1 className='c-home__title c-heading --giant u-white'>Neolympics</h1>
      <p className='c-home__paragraph'>
        Découvrez les sports additionnels des Jeux Olympiques de 2024 et battez-vous pour
        la médaille !
      </p>
      <Button variant='secondary' onClick={() => router.push('/game/skate/preparation')}>
        Commencer l'expérience
      </Button>
    </div>
  )
}

export default Home
