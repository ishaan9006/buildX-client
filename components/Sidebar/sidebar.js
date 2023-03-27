import React from 'react'
import Buttons from './buttons'
import { BsDatabase } from 'react-icons/bs'
import { BiTachometer, BiUser } from 'react-icons/bi'
import { HiDocumentDownload, HiOutlineHome, HiOutlinePlus } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'

function Sidebar() {
  return (
    <div className=' h-screen min-w-max w-1/6 bg-[#091B18]'>
      <h1 className='flex justify-center items-center p-2 text-white text-2xl font-semibold'>BuildX</h1>
      
      <div className='flex justify-center items-center mt-4'>
        <button className='h-12 w-5/6 flex justify-center items-center bg-[#2e5ad2] hover:bg-[#184ad4]  rounded-lg text-white p-4'>
          <HiOutlinePlus/>
          <p className='mx-2'>Create</p>
        </button>
      </div>

      
      <div className='h-1/2 flex flex-col justify-between items-center mt-9'>
        <Buttons title="Overview" icon={<HiOutlineHome/>} />
        <Buttons title="Database" icon={<BsDatabase/>} />
        <Buttons title="Auth" icon={<BiUser/>} />
        <Buttons title="Storage" icon={<HiDocumentDownload/>} />
        <Buttons title="Metrics" icon={<BiTachometer/>} />
        <Buttons title="Settings" icon={<FiSettings/>} />
      </div>
    </div>
  )
}

export default Sidebar
