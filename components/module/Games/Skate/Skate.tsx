import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { FC, useRef } from 'react'
import { Camera } from 'three'
import Ground from './Models/Ground'
import Board from './Models/Ground'
import { Jump } from './Models/Jump'

interface Props {
  playAnim: boolean
}

const Skate: FC<Props> = ({ playAnim }) => {
  return (
    <Canvas style={{ height: '80vh' }} camera={{ position: [-2.3, 2, 1.4] }}>
      {/* <OrbitControls /> */}
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.2} />
      <Jump playAnim={playAnim} />
      <Ground />
    </Canvas>
  )
}

export default Skate
