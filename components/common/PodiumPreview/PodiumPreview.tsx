import { MEDAL_IMAGES } from '@/core/data/constants'
import Image from 'next/image'
import { FC } from 'react'

const PodiumPreview: FC = () => {
  const GLOBAL_PODIUM = [
    { name: 'GitGud', score: 93.1 },
    { name: 'TonyH', score: 91.4 },
    { name: 'Trei', score: 86.8 },
  ]

  return (
    <div className='c-podium-preview'>
      <h4 className='c-podium-preview__title'>Podium mondial</h4>
      <ul className='c-podium-preview__list'>
        {GLOBAL_PODIUM.map((player, index) => (
          <li key={index} className='c-podium-preview__list__score || c-score-preview'>
            <Image
              src={MEDAL_IMAGES[index].name}
              alt={MEDAL_IMAGES[index].alt}
              width={28}
              height={28}
              className='c-score-preview__medal'
            />
            <span className='c-score-preview__name'>{player.name}</span>
            <span className='c-score-preview__score'>{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PodiumPreview
