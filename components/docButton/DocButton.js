import React from 'react'
import Image from 'next/image'

function DocButton({title, description, img, tag}) {
  return (
    <div className="h-full w-1/5 bg-[#0e2d27] rounded-2xl
        p-4 flex flex-col justify-between mx-3 transition ease-in-out
        delay-10 hover:-translate-y-2 duration-100     
     ">
        
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
            font-semiboldtransition ease-in-out delay-10 hover:-translate-y-1
            duration-100"
        >
            Learn More
        </a>
    </div>
  )
}

export default DocButton
