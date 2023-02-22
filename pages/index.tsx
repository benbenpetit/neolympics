import PatternLock from '@/components/common/PatternLock/PatternLock'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, iusto!</p>
      <BaseButton label='Click' fullWidth /> */}
      <PatternLock numRows={3} numCols={5} />
    </>
  )
}

export default Home
