import Navbar from '@/components/common/Navbar/Navbar'
import { Jump } from '@/components/module/Games/Skate/Models/Jump'
import TrialFooter from '@/components/module/Games/Skate/TrialFooter'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Ground from '@/components/module/Games/Skate/Models/Ground'
import Skate from '@/components/module/Games/Skate/Skate'
import PatternLock from '@/components/common/PatternLock/PatternLock'

const TrialPage: NextPage = () => {
  const [time, setTime] = useState(0)
  const [isPatternDone, setIsPatternDone] = useState(false)
  const [isStop, setIsStop] = useState(false)
  const [displayPattern, setDisplayPattern] = useState(false)
  const [points, setPoints] = useState(0)
  const totalTime = 45
  const [playAnim, setPlayAnim] = useState(false)

  useEffect(() => {
    if (time < totalTime && !isStop) {
      setTimeout(() => setTime(time + 0.1), 100)
    }
  }, [time, isStop])

  useEffect(() => {
    if (isStop) {
      setTimeout(() => {
        setDisplayPattern(true)
        // setPlayAnim(true)
      }, 4000)
    } else {
      setDisplayPattern(false)
    }
  }, [isStop])

  const shouldOpenModal = () => {
    const shouldOpen = Number(time.toFixed(1)) === 11.3 && !isPatternDone
    if (shouldOpen && !isStop) {
      setIsStop(true)
    }

    return shouldOpen
  }

  return (
    <div>
      <Navbar />
      <div className='o-container --vertical --screen'>
        <Skate playAnim={playAnim} />
        <AnimatePresence>
          {shouldOpenModal() && (
            <motion.div
              key='modal'
              initial={{ opacity: 0, x: '-50%', y: '-40%' }}
              animate={{ opacity: 1, y: '-50%' }}
              exit={{ opacity: 0, y: '-40%' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0, 1] }}
              className='c-skate-popup'
            >
              {!displayPattern ? (
                <Image
                  src={'/img/skate/figures/figure-kickflip.gif'}
                  alt='Schema animé du Kickflip'
                  width={1000}
                  height={800}
                />
              ) : (
                <motion.div
                  key='pattern'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0, 1] }}
                  style={{ width: '100%' }}
                >
                  <PatternLock
                    numCols={5}
                    numRows={3}
                    correctPattern={[0, 5, 10, 11, 2, 8, 14]}
                    handleWin={() =>
                      setTimeout(() => {
                        setIsPatternDone(true)
                        setPoints(23)
                        setIsStop(false)
                        setPlayAnim(true)
                      }, 1000)
                    }
                  />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <TrialFooter time={time} totalTime={totalTime} points={points} />
      </div>
    </div>
  )
}

export default TrialPage
