import React from 'react'

function InfoButtons({title, text, icon}) {
    return (
        <div className="bg-[#0e2d27] flex rounded-xl p-3 m-2 
            justify-between items-center          
        ">
            <div className="flex w-1/2 justify-start text-white font-semibold">
                {title}
            </div>
            <div className="flex w-1/2 justify-end items-center mx-2">
                <div className="text-white text-sm mx-2">
                    {text}
                </div>
                <div className="text-white text-sm hover:text-zinc-500
                    transition ease-in-out
                    delay-10 hover:-translate-y-1 duration-100  ">
                    {icon}
                </div>

            </div>

        </div>
    )
}
        
export default InfoButtons
