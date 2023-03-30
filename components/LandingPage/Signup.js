import React from 'react'

function Signup({handleState}) {
        return (
            <div className="h-1/2 w-3/5 rounded-2xl bg-white flex flex-col justify-center items-center">
            <h1 className="font-semibold text-sm">Signup to continue</h1>
            <div className="flex w-full justify-center">
                <input className="p-1 border-2 rounded-lg mt-2 text-md w-1/3 mr-2" placeholder="First name"/>
                <input className="p-1 border-2 rounded-lg mt-2 text-md w-1/3" placeholder="Last name"/>
            </div>

            <input className="p-1 border-2 rounded-lg mt-2 text-md" placeholder="Email"/>
            <input className="p-1 border-2 rounded-lg mt-2 text-md" placeholder="Password"/>
            <input className="p-1 border-2 rounded-lg mt-2 text-md" placeholder="Confirm Password"/>

           

            <button className="h-10 w-2/3 bg-[#2e5ad2] rounded-lg mt-4">
                <p className='text-white'>Signup</p>
            </button>

            <div className="flex justify-center items-baseline mt-2">
                <p className='text-xs font-base'>Already have an account?</p>
                <button onClick={() => handleState()}>
                    <p className='text-base font-semibold ml-1 hover:text-[#2e5ad2]'>Login</p>
                </button>
            </div>
        </div>
        )
}

export default Signup
