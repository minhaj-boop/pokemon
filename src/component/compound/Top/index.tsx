import Logo from '@/component/_root/Logo'
import React from 'react'
import utilStyles from '../../../styles/utils.module.css';
const Top = () => {
  return (
    <div className={utilStyles.bgImage}>
      <div className={utilStyles.bgTexture}>
        <Logo/>
      </div>      
    </div>
  )
}

export default Top