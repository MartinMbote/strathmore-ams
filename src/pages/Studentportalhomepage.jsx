import React from 'react'
import NavbarStudentPortal from '../components/NavbarStudentPortal'
import SidePanel from '../components/SidePanel'
import { bgImage } from '../assets'

const Studentportalhomepage = () => {
  return (
    <div>
        <NavbarStudentPortal />

        <div className='fixed left-[15vw]'>
          <div className='w-full h-[43.8vw] opacity-50 bg-nav-blue absolute'></div>
          <img src={bgImage} className='h-[43.85vw] w-[85vw]' />
        </div>

        <SidePanel />
    </div>
  )
}

export default Studentportalhomepage