import CanvasLayout from '@/components/common/Layout/CanvasLayout/CanvasLayout'
import Skate from '@/components/module/Games/Skate/Skate'
import { NextPage } from 'next'

const ThreePage: NextPage = () => {
  return (
    <div>
      <CanvasLayout>
        <Skate />
      </CanvasLayout>
    </div>
  )
}

export default ThreePage
