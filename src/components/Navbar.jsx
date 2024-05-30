import React from 'react'
import { strathLogo, downArrow } from '../assets'

const Navbar = () => {

  const navBarContents = [
    {
      title : "Online Resources",
      titleContent : ["University Website", "AMS Students Module", "AMS Lecturers Module", "Attachment System", "Clearance System", "University Intranet", "Safe Exam Browser", "Password Reset"]
    }
  ];

  return (
    <div className='bg-nav-blue w-full h-[5vw]'>
        <div className='flex'>
            <div className='bg-white pt-[0.6vw] pl-[2vw] w-[20vw]'>
                <img src={strathLogo} className='h-[4.1vw]' />
            </div>
            <div className="w-0 h-0 border-b-[5vw] border-b-transparent border-l-[3vw] border-l-white "></div>
          
            {navBarContents.map((section, index) => (
              <div>
                <div className='text-[1vw] font-semibold text-white flex gap-[0.3vw] mt-[3vw]' key={index}>
                  <p>
                    {section.title}
                  </p>

                  <img src={downArrow} className='w-[1.3vw] h-[1.3vw] mt-[0.3vw]' />
                </div>

                <div className='absolute z-10 mt-[0.4vw] ml-[-0.5vw] text-center rounded-[0.2vw] text-[1vw] px-[1vw] font-normal bg-white'>
                  {section.titleContent.map((content, i) => (
                    <div key={i}>
                      <p className='my-[0.4vw]'>
                        {section.titleContent[i]}
                      </p>

                      <div className='flex justify-center'>
                        <div className='w-[3vw] h-[0.05vw] bg-gray-300'></div>
                      </div>
                    </div>
                  ))}
                </div>
            
              </div>
            ))}
        </div>
    </div>
  )
}

export default Navbar