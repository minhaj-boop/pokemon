import React from 'react'
import Image from 'next/image';
import utilStyles from '../../../styles/utils.module.css';
const Card = () => {
  return (
    <div className={utilStyles.card}>
        <div className={utilStyles.cardInner}>
              <div className={utilStyles.imgBox}>
                <h3 className={utilStyles.id}>#010</h3>
                <Image 
                  src="/assets/images/temp/010.png"
                  width={215}
                  height={215} 
                  className={utilStyles.img}
                />
              </div>
              <h3 className={utilStyles.title}>Bulbasaur</h3>
              <div className={utilStyles.powerBox}>
                <div>grass</div>
                <div>poison</div>
              </div>
        </div>
    </div>
  )
}

export default Card