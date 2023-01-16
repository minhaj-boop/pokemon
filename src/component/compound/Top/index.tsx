import Logo from '@/component/_root/Logo'
import React from 'react'
import utilStyles from '../../../styles/utils.module.css';
import Pokemons from '../Pokemons';
const Top = () => {
  return (
    <div className={utilStyles.bgImage}>
      <div className={utilStyles.bgTexture}>
        <Logo/>
        <Pokemons/>
      </div>      
    </div>
  )
}

export default Top