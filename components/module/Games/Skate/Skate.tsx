import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { FC, useRef } from 'react'
import { Camera } from 'three'
import Ground from './Models/Ground'
import Board from './Models/Ground'
import { Jump } from './Models/Jump'

const Skate: FC = () => {
  return (
    <Canvas style={{ height: '80vh' }} camera={{ position: [0, 2, 3] }}>
      {/* <OrbitControls /> */}
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.2} />
      <Jump />
      <Ground />
    </Canvas>
  )
}

export default Skate
