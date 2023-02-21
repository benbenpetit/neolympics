import { IDifficulty } from '@/core/types/IDifficulty'
import clsx from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'
import Button from '../Button/Button'

interface Props {
  difficulties: IDifficulty[]
}

const DifficultySelector: FC<Props> = ({ difficulties }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0)

  const handleDifficultyClick = (index: number) => {
    if (index === selectedIndex || index === selectedIndex) {
      setSelectedIndex(null)
    } else {
      setSelectedIndex(index)
    }
  }

  return (
    <div className='c-difficulty-selector'>
      <ul className='c-difficulty-selector__list'>
        {difficulties.map((difficulty, index) => (
          <li
            className={clsx(
              'c-difficulty-selector__illu || c-difficulty-illu',
              index === selectedIndex && '--is-selected',
            )}
            key={index}
          >
            <Button
              onClick={() => handleDifficultyClick(index)}
              className='c-difficulty-illu__button'
              active={index === selectedIndex}
              thick
            >
              Athlète niv.{index + 1}
            </Button>
            <div className='c-difficulty-illu__over'>
              <Image
                className='c-difficulty-illu__over__image'
                src={difficulty.image}
                alt={difficulty.alt}
                width={200}
                height={60}
              />
              <span className='c-difficulty-illu__over__subtitle'>
                {difficulty.subtitle}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DifficultySelector
