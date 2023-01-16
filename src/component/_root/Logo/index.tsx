import Image from 'next/image'
import React from 'react'
import utilStyles from '../../../styles/utils.module.css';

const Logo = () => {
  return (
    <div className={utilStyles.container}>
      <div className={utilStyles.logo}>
      <Image
        src="/assets/images/Logo.png"
        width={265}
        height={96}
      />
      </div>
    </div>
  )
}

export default Logo