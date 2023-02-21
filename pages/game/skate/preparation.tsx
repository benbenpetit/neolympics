import Button from '@/components/common/Button/Button'
import DifficultySelector from '@/components/common/DifficultySelector/DifficultySelector'
import Wrapper from '@/components/common/Layout/Wrapper/Wrapper'
import PodiumPreview from '@/components/common/PodiumPreview/PodiumPreview'
import { IDifficulty } from '@/core/types/IDifficulty'
import { NextPage } from 'next'

const SkatePreparationPage: NextPage = () => {
  const SKATE_DIFFICULTIES: IDifficulty[] = [
    {
      image: '/img/skate/difficulties/difficulty1.svg',
      alt: 'Skate bleu quadrillé',
      subtitle: '5 sec. pour compléter ce move !',
    },
    {
      image: '/img/skate/difficulties/difficulty1.svg',
      alt: 'Skate orange quadrillé',
      subtitle: '5 sec. pour compléter ce move !',
    },
    {
      image: '/img/skate/difficulties/difficulty1.svg',
      alt: 'Skate rouge en feu',
      subtitle: '5 sec. pour compléter ce move !',
    },
  ]

  return (
    <div>
      <Wrapper col={12} isCenter fullHeight>
        <div className='o-container --vertical --padding'>
          <h1 className='c-heading --uppercase --giant'>Skate</h1>
          <PodiumPreview />
          <div className='o-container__full-element u-flex u-align-end u-justify-center'>
            <DifficultySelector difficulties={SKATE_DIFFICULTIES} />
          </div>
          <div className='u-px-4 u-mt-2'>
            <Button variant='primary' fullWidth onClick={() => console.log('start')}>
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
      </Wrapper>
    </div>
  )
}

export default SkatePreparationPage
