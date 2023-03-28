import React from 'react'

function GithubButton({title, text, icon}) {
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

            <div className="text-white text-sm mx-2 font-semibold hover:text-zinc-500">
                {text}
            </div>

        </div>
    )
}

export default GithubButton
