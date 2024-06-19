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

        <div className='absolute left-[20vw] top-[20vw] w-[70vw] pt-[0.5vw] bg-white flex justify-center rounded-[1vw]'>
          <div>
            <p className='font-bold text-[1.2vw] mb-[1vw] text-center text-strathmore-red'>
              ACADEMIC PROGRAMES
            </p>

            <table className='text-center text-[1vw] mb-[2.5vw]'>
              <tr className='bg-strathmore-yellow text-strathmore-blue'>
                <th className='border-white border-[0.2vw] w-[15vw]'>PROGRAMME/S</th>
                <th className='border-white border-[0.2vw] w-[10vw]'>SYLLABUS</th>
                <th className='border-white border-[0.2vw] w-[10vw]'>STATUS</th>
                <th className='border-white border-[0.2vw] w-[10vw]'>YEAR</th>
                <th className='border-white border-[0.2vw] w-[10vw]'>GRADE</th>
                <th className='border-white border-[0.2vw] w-[10vw]'>REMARKS</th>
              </tr>

              <tr className='bg-custom-grey text-white'>
                <td className='border-white border-[0.2vw]'>Bachelor of Law, LLB</td>
                <td className='border-white border-[0.2vw]'>LLB</td>
                <td className='border-white border-[0.2vw]'>INTERRUPTED</td>
                <td className='border-white border-[0.2vw]'>2022</td>
                <td className='border-white border-[0.2vw]'>N/A</td>
                <td className='border-white border-[0.2vw]'>N/A</td>
              </tr>

              <tr className='bg-custom-light-grey'>
                <td className='border-white border-[0.2vw]'>Bachelor of Law, LLB</td>
                <td className='border-white border-[0.2vw]'>LLB</td>
                <td className='border-white border-[0.2vw]'>INTERRUPTED</td>
                <td className='border-white border-[0.2vw]'>2022</td>
                <td className='border-white border-[0.2vw]'>N/A</td>
                <td className='border-white border-[0.2vw]'>N/A</td>
              </tr>
            </table>

            <p className='font-bold text-[1.2vw] mb-[1vw] text-center text-strathmore-red'>
              MENTORING
            </p>

            <table className='text-center text-[1vw] mb-[2.5vw] ml-[9vw]'>
              <tr className='bg-strathmore-yellow text-strathmore-blue'>
                <th className='border-white border-[0.2vw] w-[15vw]'>MENTOR/S</th>
                <th className='border-white border-[0.2vw] w-[10vw]'>EMAIL</th>
                <th className='border-white border-[0.2vw] w-[10vw]'>LAST SESSION</th>
                <th className='border-white border-[0.2vw] w-[10vw]'>REMARKS</th>                
              </tr>

              <tr className='bg-custom-grey text-white'>
                <td className='border-white border-[0.2vw]'>Michael Keaton</td>
                <td className='border-white border-[0.2vw]'>michael@strathmore.edu</td>
                <td className='border-white border-[0.2vw]'>06-03-2023</td>
                <td className='border-white border-[0.2vw]'>Drop Down Option</td>                
              </tr>              
            </table>
          </div>
        </div>

        <div className='flex justify-center'>
              <div className='z-20 text-[1vw] text-white mt-[41.8vw]'>
                  <p>
                      &copy; Strathmore University 2023
                  </p>
              </div> 
          </div>
    </div>
  )
}

export default Studentportalhomepage