import Button from '@/components/common/Button/Button'
import DifficultySelector from '@/components/common/DifficultySelector/DifficultySelector'
import PodiumPreview from '@/components/common/PodiumPreview/PodiumPreview'
import { GameContext } from '@/core/contexts/gameContext'
import { IDifficulty } from '@/core/types/IDifficulty'
import { IGame } from '@/core/types/IGame'
import clsx from 'clsx'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SkatePreparationPage: NextPage = () => {
  const router = useRouter()
  const [gameState, setGameState] = useState<IGame>({ difficulty: 0, score: 0 })
  const SKATE_DIFFICULTIES: IDifficulty[] = [
    {
      image: '/img/skate/difficulties/difficulty1.svg',
      alt: 'Skate bleu quadrillé',
      subtitle: '5 sec. pour compléter ce move !',
      theme: 'blue',
      bigImage: '/img/skate/athletes/athlete1.png',
      pseudo: 'Benoît',
    },
    {
      image: '/img/skate/difficulties/difficulty2.svg',
      alt: 'Skate orange quadrillé',
      subtitle: '3 sec. pour compléter ce move !',
      theme: 'orange',
      bigImage: '/img/skate/athletes/athlete1.png',
      pseudo: 'Yuto',
    },
    {
      image: '/img/skate/difficulties/difficulty3.svg',
      alt: 'Skate rouge en feu',
      subtitle: '2 sec. pour compléter ce move !',
      theme: 'red',
      bigImage: '/img/skate/athletes/athlete1.png',
      pseudo: 'Arthur',
    },
  ]

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      <div className='c-preparation'>
        <div className='o-container --vertical --padding'>
          <h1 className='c-heading --uppercase --giant'>Skate</h1>
          <PodiumPreview />
          <div className='o-container__full-element u-flex u-align-end u-justify-center'>
            <DifficultySelector difficulties={SKATE_DIFFICULTIES} />
          </div>
          <div className='u-px-4 u-mt-2'>
            <Button
              variant='primary'
              fullWidth
              onClick={() => router.push('/game/skate/trial')}
            >
              <span>Commencer l'épreuve olympique</span>
            </Button>
            <Button
              className='u-mt-1'
              variant='secondary'
              fullWidth
              onClick={() => console.log('entraînement')}
            >
              <span>Commencer l'entraînement</span>
            </Button>
          </div>
        </div>
        <div className='o-container --vertical c-preparation__right'>
          {SKATE_DIFFICULTIES.map(
            (difficulty, index) =>
              index === gameState.difficulty && (
                <div
                  className={clsx('c-preparation-preview', `--theme-${difficulty.theme}`)}
                  key={index}
                >
                  <Image
                    src={difficulty.bigImage}
                    alt=''
                    width='350'
                    height='800'
                    priority
                    quality={100}
                    className='c-preparation-preview__athlete'
                  />
                  <div className='c-preparation-preview__pseudo'>
                    <span>{difficulty.pseudo}</span>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </GameContext.Provider>
  )
}

export default SkatePreparationPage
