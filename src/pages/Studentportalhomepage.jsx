import React from 'react'
import NavbarStudentPortal from '../components/NavbarStudentPortal'
import SidePanel from '../components/SidePanel'
import { bgImage, strathBanner } from '../assets'

const Studentportalhomepage = () => {

  const profileData = [
    {
      title: "Student No.",
      content: "DITNRB242622"
    },

    {
      title: "Full Name",
      content: "Martin Maina"
    },

    {
      title: "Full Name",
      content: "3rd March 2023"
    },

    {
      title: "Full Name",
      content: "0700000000"
    },

    {
      title: "Full Name",
      content: "Martinmmbote@gmail.com"
    },

    {
      title: "Full Name",
      content: "St. Pauls"
    },

    {
      title: "Full Name",
      content: "Christian"
    },
  ]

  return (
    <div>
        <NavbarStudentPortal />

        <div className='fixed left-[15vw]'>
          <div className='w-full h-[43.8vw] opacity-50 bg-nav-blue absolute'></div>
          <img src={bgImage} className='h-[43.85vw] w-[85vw]' />
        </div>

        <SidePanel />

        <div className='absolute left-[30vw] top-[7vw] flex'>
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

          <div className='w-[15vw] bg-nav-blue text-[1vw] text-white pl-[0.5vw]'>
            {profileData.map((word, index) => (
              <p className='my-[0.1vw]'>
                {word.content}
              </p>
            ))}
          </div>
          
          <img src={strathBanner} className='h-[12vw]' />
        </div>

        <div className='absolute left-[30vw] top-[20vw] w-[60vw] pt-[0.5vw] bg-white flex justify-center rounded-[1vw]'>
          <div>
            <p className='font-bold text-[1.2vw] mb-[1vw] text-center text-strathmore-red'>
              ACADEMIC PROGRAMES
            </p>

            <table className='text-center'>
              <tr className='bg-strathmore-yellow'>
                <th>PROGRAMME/S</th>
                <th>SYLLABUS</th>
                <th>STATUS</th>
                <th>YEAR</th>
                <th>GRADE</th>
                <th>REMARKS</th>
              </tr>

              <tr>
                <td>Bachelor of Law, LLB</td>
                <td>LLB</td>
                <td>INTERRUPTED</td>
                <td>2022</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
            </table>
          </div>
        </div>
    </div>
  )
}

export default Studentportalhomepage