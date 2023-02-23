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
        <Skate />
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
function deg2rad(arg0: number): number {
  throw new Error('Function not implemented.')
}
