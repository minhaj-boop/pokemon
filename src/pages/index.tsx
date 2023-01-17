import Homepage from '@/component/view/HomePage'
import React from 'react'

const index = () => {
  return (
    <div>
      {/* here just need to declare the view component */}
      <Homepage/>
    </div>
  )
}

//USE getStaticProps or getServerSideProps

export default index