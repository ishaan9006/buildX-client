import Navbar from '@/components/LandingPage/Navbar'
import StartBox from '@/components/LandingPage/StartBox'
import TextBox from '@/components/LandingPage/TextBox'
import Login from '@/components/LandingPage/Login'
import Signup from '@/components/LandingPage/Signup'


import React, { useState } from 'react'



function LandingPage() {
    const [ login, setLogin ] = useState(true);
    const handleState = () => {
        setLogin(!login);
    }
    return (
        <div className="h-screen w-screen  relative z-0 overflow-hidden">
            <Navbar />

            <div className="grid grid-cols-10">
                <div className="col-span-7 w-screen bg-[#0A1F1C] h-screen px-8 flex flex-col justify-around">
                    <div>
                        <h1 className='text-6xl text-white'>Secure access</h1>
                        <div className="flex mt-5 items-center">
                            <h1 className='text-6xl text-white'>for</h1>
                            <TextBox text="everyone" col="text-[#2e5ad2]"/>
                        </div>
                        <div className="flex items-center mt-5">
                            <h1 className='text-6xl text-white'>But not</h1>
                            <TextBox text="just anyone" col="text-red-600"/>
                        </div>
                    </div>
                    <StartBox userText="Start building your app now!"/>
                        


                </div>

                <div className="col-span-3 flex flex-col h-screen w-full bg-[#102c27] justify-center items-center">
                   
                    { 
                        login ? <Login handleState={handleState}/> : <Signup handleState={handleState} />
                    }
        
                </div>

            </div>



        </div>
    )
}

export default LandingPage
