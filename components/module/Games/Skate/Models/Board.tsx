import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import type { Mesh } from 'three'
import * as THREE from 'three'

interface Props {
  color?: THREE.ColorRepresentation
}

const Board = ({ color = 0xffff00 }: Props) => {
  const mesh = useRef<Mesh>(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={new THREE.Color(color)} opacity={1} />
      <ambientLight
        intensity={1}
        position={[0, 5, 0]}
        color={new THREE.Color(0xffffff)}
      />
    </mesh>
  )
}

export default Board
