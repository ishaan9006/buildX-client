import Navbar from '@/components/LandingPage/Navbar'
import StartBox from '@/components/LandingPage/StartBox'
import TextBox from '@/components/LandingPage/TextBox'
import React from 'react'

function LandingPage() {
    return (
        <div className="h-screen w-screen bg-[#0A1F1C] relative z-0">
            <Navbar />

            <div className="grid-cols-10">
                <div className="col-span-7 p-5 flex-col">
                    <h1 className='text-6xl text-white'>Secure access</h1>
                    <div className="flex mt-5 items-center">
                        <h1 className='text-6xl text-white'>for</h1>
                        <TextBox text="everyone" col="text-[#2e5ad2]"/>
                    </div>
                    <div className="flex items-center mt-5">
                        <h1 className='text-6xl text-white'>But not</h1>
                        <TextBox text="just anyone" col="text-red-600"/>
                    </div>
                    
                    <StartBox />

                </div>

                <div className="col-span-3">

                </div>
            </div>

        </div>
    )
}

export default LandingPage
