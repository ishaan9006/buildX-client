import React from 'react'

function Buttons({ title, icon}) {
  return (
    <button className="h-12 w-5/6 flex flex-row justify-start items-center hover:bg-[#0e2d27] rounded-lg text-white p-4 sm:flex-row">
      {icon}
      <p className="mx-2">{title}</p>
      
    </button>
  )
}

export default Buttons
