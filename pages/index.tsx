import BaseButton from '@/components/common/Button/BaseButton'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, iusto!</p>
      <BaseButton label='Click' fullWidth />
    </>
  )
}

export default Home
