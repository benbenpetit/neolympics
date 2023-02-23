import { useFrame, useLoader } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { DoubleSide, Mesh } from 'three'
import * as THREE from 'three'

interface Props {
  color?: THREE.ColorRepresentation
}

const Ground = ({ color = 0xffff00 }: Props) => {
  const mesh = useRef<Mesh>(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const texture = useLoader(THREE.TextureLoader, '/img/concrete-texture.jpg')

  // useFrame(() => {
  //   if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  // })

  return (
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, Math.PI, 0]} scale={[30, 30, 30]}>
      <planeBufferGeometry />
      <meshBasicMaterial attach='material' map={texture} toneMapped={false} />
    </mesh>
  )
}

export default Ground
