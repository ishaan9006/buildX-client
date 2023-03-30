import React from 'react'
import { SiBackendless } from 'react-icons/si'
import { AiOutlineCaretDown } from 'react-icons/ai'


function Navbar() {
    return (
        <nav className='h-16 w-screen bg-[#091B18] p-4 flex sticky top-0 z-50'>
            <div className='flex justify-start items-center w-1/3'>
                <SiBackendless color='white' size={28} />
                <h1 className='text-2xl text-white font-bold mx-2'>BuildX</h1>
            </div>

            <div className='w-2/3 flex justify-around'>
                <div className='flex justify-center items-center'>
                    <h1 className='text-white mx-2 text-md font-semibold'>Product</h1>
                    <AiOutlineCaretDown color='white'/>
                </div>
                <div className='flex justify-center items-center'>
                    <h1 className='text-white mx-2 text-md font-semibold'>Docs & Resources</h1>
                    <AiOutlineCaretDown color='white'/>
                </div>
                <div className='flex justify-center items-center'>
                    <h1 className='text-white mx-2 text-md font-semibold'>Company</h1>
                    <AiOutlineCaretDown color='white'/>
                </div>
                <div className='flex justify-center items-center'>
                    <h1 className='text-white mx-2 text-md font-semibold'>Pricing</h1>
                    <AiOutlineCaretDown color='white'/>
                </div>

                <button className='h-10 w-30 bg-white p-2 rounded-xl border-2 border-zinc-600'>
                    <p className='font-semibold text-sm'>Sign up</p>
                </button>

                <button className='h-10 w-30 p-2 rounded-xl bg-[#2e5ad2] hover:bg-[#184ad4] '>
                    <p className='font-semibold text-sm text-white'>Contact Sales</p>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
