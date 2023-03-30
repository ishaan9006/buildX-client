import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

function StartBox({userText}) {
    const [text, count] = useTypewriter({
        words: [userText],
        loop: true,
        delaySpeed: 1000,
        deleteSpeed: 20,
        typeSpeed: 80
    });
    return (
            <div className="w-2/6 h-20 bg-white rounded-2xl mb-10 flex items-center justify-between px-4">
                <p className="text-lg font-semibold">{text}</p>
                
                <button className="h-12 w-1/4 bg-[#2e5ad2] hover:bg-[#386bf8] rounded-lg">
                    <p className="text-white font-semibold ">Get Started</p>
                    {/* Arrow Icon */}
                </button>
            </div>
    )
}

export default StartBox
