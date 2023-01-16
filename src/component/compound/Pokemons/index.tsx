import Card from '@/component/_root/Card'
import Link from 'next/link'
import React from 'react'

const Pokemons = () => {
  return (
    <div>
      <Link href="/details"><Card/></Link>
    </div>
  )
}

export default Pokemons