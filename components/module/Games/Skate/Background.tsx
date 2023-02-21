import Image from 'next/image'

const Background = () => {
  return (
    <Image
      src={'/img/skate-move.png'}
      alt='Picture of a skater'
      width='1920'
      height='1080'
      className='o-image o-image--full'
    />
  )
}

export default Background
