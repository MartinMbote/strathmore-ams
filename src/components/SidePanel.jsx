import React from 'react'

const SidePanel = () => {

  const sidePanelData = [

    {
        title: "My Details",
    },

    {
        title: "Self Registration",
    },

    {
        title: "Coursework",
    },

    {
        title: "Attendance",
    },

    {
      title: "Mentorship",
    },

    {
      title: "Progress Report",
    },

    {
      title: "Exams",
    },

    {
      title: "Fee Structure",
    },

    {
      title: "Graduation",
    }
  ];

  return (
    <div>
        <div className='w-[15vw] h-[43.8vw] bg-light-yellow z-10 fixed pt-[4.5vw]'>
          {sidePanelData.map((option, index) => (
              <div key={index} className='cursor-pointer border-t-[0.1vw] border-black'>
                  <div className='pl-[2vw] flex gap-[0.8vw] py-[0.5vw] hover:bg-strathmore-red font-semibold text-[1.25vw] hover:text-white transition-colors duration-200 ease-in-out'>
                      <p>
                          {option.title}
                      </p>
                  </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default SidePanel