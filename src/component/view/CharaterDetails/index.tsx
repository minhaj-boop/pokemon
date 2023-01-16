import Logo from '@/component/_root/Logo'
import Image from 'next/image';
import React from 'react'
import utilStyles from '../../../styles/utils.module.css';

const CharacterDetails = () => {
  return (
    <div className={`${utilStyles.detailsContainer}`}>
        <div className={`${utilStyles.pattern}`}>
          <Logo/>
          <div className={utilStyles.contentFlex}>
              <div>
                <h1 className={`${utilStyles.idContent} text-[48px] font-medium`}>Bulbasaur #001</h1>
                <p className={`${utilStyles.detailsContent} text-[20px] font-normal`}>There is a plant seed on its back right from the day this pokemon is born. the seed slowly grows larger.</p>
              </div>
              <div>
                card here
              </div>       
          </div>
          <div className={utilStyles.characterImgBox}>
            <Image
              src="/assets/images/image1.png"
              width={475}
              height={475} 
              className={utilStyles.characterImg}
            />
          </div>
        </div>     
    </div>
  )
}

export default CharacterDetails