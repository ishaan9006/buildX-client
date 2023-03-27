import React from 'react'

function Buttons({ title, icon}) {
  return (
    <button className="h-13 w-5/6 flex flex-col justify-start 
    items-center hover:bg-[#0e2d27] rounded-lg text-white 
    p-4 sm:flex-row sm:h-12"
    >
      {icon}
      <p className="mx-2">{title}</p>
      
    </button>
  )
}

export default Buttons
