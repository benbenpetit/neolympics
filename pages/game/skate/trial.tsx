import Navbar from '@/components/common/Navbar/Navbar'
import Background from '@/components/module/Games/Skate/Background'
import TrialFooter from '@/components/module/Games/Skate/TrialFooter'

import { NextPage } from 'next'

const TrialPage: NextPage = () => {
  return (
    <div>
      <Background />
      <TrialFooter />
      <Navbar />
    </div>
  )
}

export default TrialPage
