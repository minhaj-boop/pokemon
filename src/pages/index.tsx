import CharacterDetails from '@/component/view/CharaterDetails'
//import Homepage from '@/component/view/HomePage'
import React from 'react'

const index = () => {
  return (
    <div>
      {/* here just need to declare the view component */}
      {/*<Homepage name='shopnil'/>*/}
      <CharacterDetails/>
    </div>
  )
}

//HERE YOU NEED TO USE getStaticProps or getServerSideProps

export default index