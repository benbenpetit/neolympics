import { useEffect, useRef, useState } from 'react'

interface Props {
  numRows: number
  numCols: number
}

interface DotPosition {
  x: number
  y: number
}

const LockScreenPattern = ({ numRows, numCols }: Props) => {
  const dotRadius = 3
  const patternRef = useRef<SVGSVGElement>(null)
  const [selectedDots, setSelectedDots] = useState<number[]>([])
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastMousePosition, setLastMousePosition] = useState<DotPosition>({
    x: 0,
    y: 0,
  })

  const handleDotMouseDown = (dotIndex: number) => {
    setIsDrawing(true)
    setSelectedDots([dotIndex])
  }

  const handleDotMouseEnter = (dotIndex: number) => {
    if (isDrawing && !selectedDots.includes(dotIndex)) {
      setSelectedDots((prevSelectedDots) => [...prevSelectedDots, dotIndex])
    }
  }

  const handleDotMouseUp = () => {
    setIsDrawing(false)
  }

  const isDotSelected = (dotIndex: number) => {
    return selectedDots.includes(dotIndex)
  }

  const getDotPosition = (dotIndex: number): DotPosition => {
    const row = Math.floor(dotIndex / numCols)
    const col = dotIndex % numCols
    const rowPercentage = 100 / numRows
    const colPercentage = 100 / numCols
    const x = col * colPercentage + colPercentage / 2
    const y = row * rowPercentage + rowPercentage / 2
    return { x, y }
  }

  const dotPositions = Array.from({ length: numRows * numCols }, (_, i) =>
    getDotPosition(i),
  )

  const getLineCoords = (startDot: number, endDot: number) => {
    const startDotPosition = getDotPosition(startDot)
    const endDotPosition = getDotPosition(endDot)
    const startX = startDotPosition.x
    const startY = startDotPosition.y
    const endX = endDotPosition.x
    const endY = endDotPosition.y
    return `M ${startX},${startY} L ${endX},${endY}`
  }

  function getRelativeMousePosition(svg: SVGSVGElement, event: MouseEvent) {
    const point = svg.createSVGPoint()
    point.x = event.clientX
    point.y = event.clientY
    const { x, y } = point.matrixTransform(svg.getScreenCTM()?.inverse())
    return { x, y }
  }

  const handleMouseMove = (event: MouseEvent) => {
    const { left, top } = patternRef.current!.getBoundingClientRect()
    const mouseX = event.clientX - left
    const mouseY = event.clientY - top
    setLastMousePosition({ x: mouseX, y: mouseY })
  }

  useEffect(() => {
    if (isDrawing && selectedDots.length > 0) {
      const handleMouseMove = (e: MouseEvent) => {
        setLastMousePosition(getRelativeMousePosition(patternRef, e))
      }
      const handleMouseUp = () => {
        setDrawing(false)
        setLastMousePosition(null)
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDrawing, selectedDots])

  return (
    <div className='lock-screen-pattern'>
      <svg ref={patternRef}>
        {dotPositions.map((dot, index) => (
          <circle
            key={index}
            cx={`${dot.x}%`}
            cy={`${dot.y}%`}
            r={dotRadius}
            className={isDotSelected(index) ? 'selected' : ''}
            onMouseDown={() => handleDotMouseDown(index)}
            onMouseEnter={() => handleDotMouseEnter(index)}
            onMouseUp={handleDotMouseUp}
          />
        ))}
        {selectedDots.length > 0 && isDrawing && (
          <path
            d={`M ${getDotPosition(selectedDots[selectedDots.length - 1]).x},${
              getDotPosition(selectedDots[selectedDots.length - 1]).y
            } L ${lastMousePosition.x},${lastMousePosition.y}`}
          />
        )}
        {selectedDots.length > 1 &&
          selectedDots.map((dotIndex, i) =>
            i < selectedDots.length - 1 ? (
              <path key={i} d={getLineCoords(dotIndex, selectedDots[i + 1])} />
            ) : null,
          )}
      </svg>
    </div>
  )
}
