import React from 'react'
import Image from 'next/image'

function DocButton({title, description, img, tag}) {
  return (
    <div className="h-2/6 w-1/5 bg-[#0e2d27] rounded-2xl p-4 flex flex-col justify-between">
        <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center">
            <Image src={img} alt={title} height="30" width="30"/>
        </div>


        <div className='flex flex-col'>
            <div className="text-white text-lg font-bold cursor-default mb-2">
                {title}
            </div>
            <div className="text-white text-xs font-semibold cursor-default">
                {description}
            </div>

        </div>

        <a href={tag} target="_blank" 
            className="text-[#3c67df] hover:text-white
            font-semibold"
        >
            Learn More
        </a>
    </div>
  )
}

export default DocButton
