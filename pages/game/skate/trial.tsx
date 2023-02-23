import Navbar from '@/components/common/Navbar/Navbar'
import Board from '@/components/module/Games/Skate/Models/Board'
import { Jump } from '@/components/module/Games/Skate/Models/Jump'
import TrialFooter from '@/components/module/Games/Skate/TrialFooter'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const TrialPage: NextPage = () => {
  const [time, setTime] = useState(0)
  const totalTime = 45

  useEffect(() => {
    if (time < totalTime) {
      setTimeout(() => setTime(time + 0.1), 100)
    }
  }, [time])

  const shouldDraw = () => {
    return time > 1 && time <= 16
  }

  return (
    <div>
      <Navbar />
      <div className='o-container --vertical --screen'>
        <Canvas>
          <OrbitControls />
          <directionalLight intensity={0.5} />
          <ambientLight intensity={0.2} />
          <Jump />
          <Board />
        </Canvas>
        <AnimatePresence>
          {shouldDraw() && (
            <motion.div
              key='key'
              initial={{ opacity: 0, x: '-50%', y: '-40%' }}
              animate={{ opacity: 1, y: '-50%' }}
              exit={{ opacity: 0, y: '-40%' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0, 1] }}
              className='c-skate-popup'
            >
              <Image
                src={'/img/skate/figures/figure-kickflip.gif'}
                alt='Schema animé du Kickflip'
                width={1000}
                height={800}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <TrialFooter time={time} totalTime={totalTime} />
      </div>
    </div>
  )
}

export default TrialPage
