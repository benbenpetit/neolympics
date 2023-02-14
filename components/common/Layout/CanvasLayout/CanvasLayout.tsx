import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'

interface CanvasLayoutProps {
  children: ReactNode
}

const CanvasLayout = ({ children }: CanvasLayoutProps) => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        touchAction: 'none',
        backgroundColor: '#111111',
      }}
    >
      <Preload all />
      <OrbitControls />
      {children}
      {/* <Perf position={'bottom-left'} /> */}
    </Canvas>
  )
}

export default CanvasLayout
