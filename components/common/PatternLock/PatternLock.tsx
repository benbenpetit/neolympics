import clsx from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'

interface Props {
  numRows: number
  numCols: number
  correctPattern: number[]
  handleWin: Function
}

const PatternLock: FC<Props> = ({ numRows, numCols, correctPattern, handleWin }) => {
  const [selectedDots, setSelectedDots] = useState<number[]>([])
  const [hasWon, setHasWon] = useState<boolean>(false)
  const [isDrawing, setIsDrawing] = useState<boolean>(false)
  const [startDot, setStartDot] = useState<number | null>(null)
  const patternRef = useRef<SVGSVGElement>(null)
  const dotRadius = 5

  useEffect(() => {
    if (isDrawing && patternRef.current) {
      patternRef.current.classList.add('drawing')
    } else if (patternRef.current) {
      patternRef.current.classList.remove('drawing')
    }
  }, [isDrawing])

  const handleStartDrawing = (dot: number) => {
    setIsDrawing(true)
    setStartDot(dot)
    setSelectedDots([dot])
  }

  const handleContinueDrawing = (dot: number) => {
    if (isDrawing) {
      setSelectedDots((prevSelectedDots) => {
        if (prevSelectedDots.indexOf(dot) === -1) {
          return [...prevSelectedDots, dot]
        } else {
          return prevSelectedDots
        }
      })
    }
  }

  const handleEndDrawing = () => {
    setIsDrawing(false)
    checkIfWon(selectedDots)

    setTimeout(() => {
      setSelectedDots([])
      setHasWon(false)
    }, 1000)
  }

  const handleDotMouseDown = (dot: number) => {
    handleStartDrawing(dot)
  }

  const handleDotMouseEnter = (dot: number) => {
    handleContinueDrawing(dot)
  }

  const handleDotMouseUp = () => {
    handleEndDrawing()
  }

  const checkIfWon = (patternToCheck: number[]) => {
    if (areEqual(patternToCheck, correctPattern)) {
      setHasWon(true)
      handleWin()
    } else {
      setHasWon(false)
    }
  }

  const compareArrays = (array1: number[], array2: number[]) => {
    if (array1.length !== array2.length) {
      return false
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      }
    }
    return true
  }

  const areEqual = (array1: number[], array2: number[]) => {
    return compareArrays(array1, array2)
  }

  const isDotSelected = (dot: number) => selectedDots.includes(dot)

  const getDotCoords = (dot: number): { x: number; y: number } => {
    const dotEl = patternRef.current?.querySelector(
      `.lock-screen-zone-dot[data-dot="${dot}"]`,
    ) as HTMLElement
    const { x, y, width, height } = dotEl?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    }
    const offsetTop = patternRef.current?.getBoundingClientRect().top || 0
    const offsetLeft = patternRef.current?.getBoundingClientRect().left || 0

    return {
      x: x + width / 2 - offsetLeft,
      y: y + height / 2 - offsetTop,
    }
  }

  const getLineCoords = (dot1: number, dot2: number): string => {
    const { x: x1, y: y1 } = getDotCoords(dot1)
    const { x: x2, y: y2 } = getDotCoords(dot2)
    return `M ${x1},${y1} L ${x2},${y2}`
  }

  return (
    <div className='lock-screen-container'>
      <svg
        className={clsx('lock-screen-pattern', hasWon ? 'is-correct' : 'is-not-correct')}
        ref={patternRef}
        onMouseUp={handleDotMouseUp}
        // onMouseLeave={handleDotMouseUp}
      >
        {selectedDots.map((dot, index) => {
          if (index < selectedDots.length - 1) {
            return (
              <path
                key={`${dot}-${selectedDots[index + 1]}`}
                d={getLineCoords(dot, selectedDots[index + 1])}
                className='lock-screen-line'
              />
            )
          } else {
            return null
          }
        })}
        <g className='zoneDots'>
          {Array.from({ length: numRows }).map((_, rowIndex) => {
            const rowPercentage = 100 / numRows
            const rowY = rowIndex * rowPercentage
            return Array.from({ length: numCols }).map((_, colIndex) => {
              const colPercentage = 100 / numCols
              const colX = colIndex * colPercentage
              const dotIndex = rowIndex * numCols + colIndex
              return (
                <circle
                  key={dotIndex}
                  className='lock-screen-zone-dot'
                  data-dot={dotIndex}
                  cx={`${colX + colPercentage / 2}%`}
                  cy={`${rowY + rowPercentage / 2}%`}
                  r={`${dotRadius * 4}px`}
                  onMouseDown={() => handleDotMouseDown(dotIndex)}
                  onMouseEnter={() => handleDotMouseEnter(dotIndex)}
                  onMouseUp={handleDotMouseUp}
                  data-selected={isDotSelected(dotIndex)}
                />
              )
            })
          })}
        </g>
        <g className='realDots'>
          {Array.from({ length: numRows }).map((_, rowIndex) => {
            const rowPercentage = 100 / numRows
            const rowY = rowIndex * rowPercentage
            return Array.from({ length: numCols }).map((_, colIndex) => {
              const colPercentage = 100 / numCols
              const colX = colIndex * colPercentage
              const dotIndex = rowIndex * numCols + colIndex
              return (
                <circle
                  key={dotIndex}
                  className='lock-screen-dot'
                  data-dot={dotIndex}
                  cx={`${colX + colPercentage / 2}%`}
                  cy={`${rowY + rowPercentage / 2}%`}
                  r={`${dotRadius}px`}
                  onMouseDown={() => handleDotMouseDown(dotIndex)}
                  onMouseEnter={() => handleDotMouseEnter(dotIndex)}
                  onMouseUp={handleDotMouseUp}
                  data-selected={isDotSelected(dotIndex)}
                />
              )
            })
          })}
        </g>
      </svg>
      {/* <h2>Pattern à faire : {winingSelectedDots.join(',')}</h2>
      <h2>Pattern fait : {selectedDots.join(',')}</h2>
      <h2>Pattern resultat : {hasWon ? 'Gagné' : 'Perdu'}</h2> */}
    </div>
  )
}

export default PatternLock
