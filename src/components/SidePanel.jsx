import React from 'react'
import { me, homeIcon, registrationIcon, courseWorkIcon, attendanceIcon, mentorshipIcon, progressIcon, examsIcon, feeIcon, graduationIcon } from '../assets';
import { Link } from 'react-router-dom';


const SidePanel = () => {

  const sidePanelData = [

    {
        path:'/strathmore-ams/studentportal',
        title: "Profile",
        image: [homeIcon],
    },

    {
        path:"/strathmore-ams/self",
        title: "Self Registration",
        image: [registrationIcon],
    },

    {
        path:"/strathmore-ams/coursework",
        title: "Coursework",
        image: [courseWorkIcon],
    },

    {
        path: "/strathmore-ams/attendance",
        title: "Attendance",
        image: [attendanceIcon],
    },

    {
      title: "Mentorship",
      image: [mentorshipIcon],
    },

    {
      title: "Progress Report",
      image: [progressIcon],
    },

    {
      title: "Exams",
      image: [examsIcon],
    },

    {
      path: "/strathmore-ams/feestructure",
      title: "Fee Structure",
      image: [feeIcon],
    },

    {
      title: "Graduation",
      image: [graduationIcon],
    }
  ];

  return (
    <div>
        <div className='w-[15vw] h-[43.8vw] bg-strathmore-yellow z-10 fixed pt-[1vw]'>
          <div className='ml-[0.5vw] flex gap-[0.6vw]'>
            <img src={me} className='rounded-[10vw] h-[4.5vw]' />

            <div>
              <p className='text-[1.2vw] font-semibold mt-[0.5vw]'>
                Martin Maina
              </p>

              <p className='text-[0.9vw] font-medium text-strathmore-blue mt-[-0.15vw]'>
                DITNRB242622
              </p>
            </div>
          </div>

          {/* <div className='w-[1vw] h-[0.1vw] bg-white'></div> */}

          <div className='flex justify-center mt-[1vw] mb-[0.8vw]'>
            <div className='w-[10vw] h-[0.01vw] bg-black'></div>
          </div>

          {sidePanelData.map((option, index) => (
            <Link to={option.path}  >
          
              <div key={index} className='cursor-pointer'>
                  <div className='flex gap-[0.8vw] py-[0.5vw] pl-[1vw] mb-[0.5vw] hover:bg-strathmore-red font-semibold text-[1.25vw] hover:text-white transition-colors duration-200 ease-in-out'>
                      <img src={option.image} className='h-[1.8vw]' />

                      <p>
                          {option.title}
                      </p>
                  </div>
              </div>  </Link>
            ))}
        </div>
    </div>
  )
}

export default SidePanel