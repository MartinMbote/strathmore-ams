import React from 'react'
import { bgImage } from '../assets'

const Background = () => {
  return (
    <div>
        <div className='fixed top-[5vw] left-[15vw]'>
          <div className='w-full h-[43.8vw] opacity-50 bg-nav-blue absolute'></div>
          <img src={bgImage} className='h-[43.85vw] w-[85vw]' />
        </div>
    </div>
  )
}

export default Background