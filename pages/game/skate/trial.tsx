import Navbar from '@/components/common/Navbar/Navbar'
import Board from '@/components/module/Games/Skate/Models/Board'
import { Jump } from '@/components/module/Games/Skate/Models/Jump'
import TrialFooter from '@/components/module/Games/Skate/TrialFooter'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { NextPage } from 'next'
import { useState } from 'react'

const TrialPage: NextPage = () => {
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
        <TrialFooter />
      </div>
    </div>
  )
}

export default TrialPage
