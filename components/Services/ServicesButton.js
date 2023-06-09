import React from 'react'

function ServiceButton({icon, title, process}) {
    return (
        <div className="bg-[#0e2d27] flex rounded-xl p-3 m-2 justify-between items-center">
            <div className="flex w-1/2 justify-start items-center mx-2">
                <div className="text-white text-sm">
                    {icon}
                </div>
                <div className="flex w-1/2 justify-start text-white font-semibold mx-2">
                    {title}
                </div>
            </div>

            <div className="text-gray-400 text-sm mx-2 font-semibold hover:text-zinc-500">
                {process}
            </div>
        </div> 
    )
}

export default ServiceButton
