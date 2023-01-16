import Bottom from '@/component/compound/Bottom/Bottom'
import Top from '@/component/compound/Top'
import { IHomePage } from '@/types/view/Homepage'
import React from 'react'


const Homepage = ({name}:IHomePage) => {
  return (
    <div>
      <Top/>
      <Bottom/>
    </div>
  )
}

export default Homepage