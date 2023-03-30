import Navbar from '@/components/LandingPage/Navbar'
import React from 'react'

function LandingPage() {
    return (
        <div className="h-screen w-screen bg-[#0A1F1C] relative z-0">
            <Navbar />

            <div className="grid-cols-10">
                <div className="col-span-7">
                    <h1>Secure access</h1>
                    <div className="flex">
                        <h1>for</h1>
                    </div>
                    <div className="flex">
                        <h1>But not just anyone</h1>
                    </div>
                    
                </div>

                <div className="col-span-3">

                </div>
            </div>

        </div>
    )
}

export default LandingPage
