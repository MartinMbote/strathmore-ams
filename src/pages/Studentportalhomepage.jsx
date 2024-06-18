import React from 'react'
import NavbarStudentPortal from '../components/NavbarStudentPortal'
import SidePanel from '../components/SidePanel'
import { bgImage } from '../assets'

const Studentportalhomepage = () => {

  const profileData = [
    {
      title: "Student No.",
      content: "DITNRB"
    }
  ]

  return (
    <div>
        <NavbarStudentPortal />

        <div className='fixed left-[15vw]'>
          <div className='w-full h-[43.8vw] opacity-50 bg-nav-blue absolute'></div>
          <img src={bgImage} className='h-[43.85vw] w-[85vw]' />
        </div>

        <SidePanel />

        <div className='absolute left-[30vw] top-[10vw] flex'>
          <div className='w-[10vw] pr-[0.5vw] pb-[0.2vw] text-[1vw] text-right bg-strathmore-red text-white'>
            <div>
              <p className='my-[0.1vw]'>
                Student No.
              </p>

              <p className='my-[0.1vw]'>
                Full Name
              </p>

              <p className='my-[0.1vw]'>
                Date of Birth
              </p>

              <p className='my-[0.1vw]'>
                Mobile Phone No.
              </p>

              <p className='my-[0.1vw]'>
                Email Address
              </p>

              <p className='my-[0.1vw]'>
                Previous School
              </p>

              <p className='my-[0.1vw]'>
                Religion
              </p>
            </div>
          </div>

          {/* <div className='w-[15vw] bg-nav-blue text-[1vw] text-white pl-[0.5vw]'>
            <p className='my-[0.1vw]'>
              DITNRB242622
            </p>

            <p className='my-[0.1vw]'>
              Martin Maina
            </p>

            <p className='my-[0.1vw]'>
              03 March 2023
            </p>
          </div> */}

          {profileData.map((word, index) => (
            <div className='w-[15vw] bg-nav-blue text-[1vw] text-white pl-[0.5vw]'>
              <p className='my-[0.1vw]'>
                DITNRB242622
              </p>

              <p className='my-[0.1vw]'>
                Martin Maina
              </p>

              <p className='my-[0.1vw]'>
                03 March 2023
              </p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Studentportalhomepage