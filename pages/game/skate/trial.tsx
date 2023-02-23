import Navbar from '@/components/common/Navbar/Navbar'
import Background from '@/components/module/Games/Skate/Background'
import TrialFooter from '@/components/module/Games/Skate/TrialFooter'

import { NextPage } from 'next'
import { useState } from 'react'

const TrialPage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Background />
      <TrialFooter />
    </div>
  )
}

export default TrialPage
