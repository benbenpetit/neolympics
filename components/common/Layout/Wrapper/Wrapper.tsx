import clsx from 'clsx'
import { CSSProperties, FC, ReactNode } from 'react'

interface Props {
  isCenter?: boolean
  col?: number
  fullHeight?: boolean
  children: ReactNode
  style?: CSSProperties
}

const Wrapper: FC<Props> = ({ isCenter, col = 12, fullHeight, children, style }) => {
  const allWidth = 1240
  const gapWidth = 16
  const nbCol = 12
  const colWidth = (allWidth - gapWidth * (nbCol - 1)) / nbCol
  const maxWidth = colWidth * col + gapWidth * (col - 1)

  return (
    <div
      className={clsx(
        'o-wrapper',
        isCenter && '--is-center',
        fullHeight && '--is-full-height',
      )}
      style={{ ...style }}
    >
      <div
        className={'o-wrapper__inside'}
        style={{ maxWidth: maxWidth.toFixed() + 'px' }}
      >
        {children}
      </div>
    </div>
  )
}

export default Wrapper
