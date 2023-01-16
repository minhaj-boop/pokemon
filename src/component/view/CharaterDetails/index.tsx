import Logo from '@/component/_root/Logo'
import React from 'react'
import utilStyles from '../../../styles/utils.module.css';

const CharacterDetails = () => {
  return (
    <div className={`${utilStyles.detailsContainer}`}>
        <div className={`${utilStyles.pattern}`}>
          <Logo/>
          
        </div>     
    </div>
  )
}

export default CharacterDetails