import React, { useState } from 'react'
import Image from 'next/image';
import Sidebar from '@/components/Sidebar/sidebar';
import DocButton from '@/components/DocButton/DocButton';
import InfoButtons from '@/components/ProjectInfo/InfoButtons';

import { FiCopy } from 'react-icons/fi'
import { RiAddFill } from 'react-icons/ri'
import { AiFillGithub, AiOutlineCaretDown } from 'react-icons/ai'
import { RxDotFilled } from 'react-icons/rx'


import GithubButton from '@/components/ProjectInfo/GithubButton';
import ServiceButton from '@/components/Services/ServicesButton';

import axios from 'axios';



function HomePage() {
    axios.post('http://localhost:5000/demo', {
    name: 'Ishaan',
    lname: 'Khullar'
  }).then((res) => {
    console.log(res['data']);
  }).catch((err) => {
    console.log(err);
  })


  const [ projectTitle, setProjectTitle ] = useState("Messenger clone");
  const [ showDropDownMenu, setDropDownMenu ] = useState(false);
  const dummyText = [
    {id: 1, text: 'Project1'},
    {id: 2, text: 'Project2'},
    {id: 3, text: 'Project3'},
    {id: 4, text: 'Project4'},
    {id: 5, text: 'Project5'},
    {id: 6, text: 'Project6'},
    {id: 7, text: 'Project7'},
    {id: 8, text: 'Project8'},
  ]

    return (
          <main className='h-screen w-screen bg-[#0A1F1C] grid grid-cols-8 overflow-hidden'>
            <div className='col-span-1'>
              <Sidebar />
            </div>
            
            <div className='col-span-5'>
              <div className='h-screen flex flex-col justify-between p-2'>
                  
                <div>
                  <div className='flex p-5 items-center'>
                    <h1 className="text-white text-2xl font-semibold">{projectTitle}</h1>
                    <button onClick={() => setDropDownMenu(!showDropDownMenu)}>
                      <AiOutlineCaretDown size={15} color="white" className="mx-2" />
                    </button>
                  </div>
    
                  
                      
    
                  <div className='flex flex-col w-3/5 justify-start items-center p-5 relative z-0'>
                    {/* Project Title */}
                    <div className='flex justify-center items-center relative z-50'>
                      <h1 className="text-white text-2xl font-semibold">{projectTitle}</h1>
                      <div className='h-5 w-20 border-2 rounded-full flex justify-center items-center ml-3'>
                        <p className="text-white text-xs cursor-default">Base plan</p>
                      </div>
                    </div>
    
                    <div className='flex w-85 justify-start items-center'>
                      
                        <div className='flex w-40 justify-evenly items-center mt-2'>
                          <Image src="/android.svg" height="24" width="24" alt="Loading.."/>
                          <Image src="/swift.svg" height="20" width="20" alt="Loading.."/>
                          <Image src="/web-2.svg" height="24" width="24" alt="Loading.."/>
                        </div>
                    
                      <div className='h-8 w-25 border-2 rounded-full
                        flex justify-center items-center ml-3 p-1 mt-2
                        transition ease-in-out delay-10 hover:-translate-y-1
                         duration-100
                       '>
                        <RiAddFill color='white'/>
                        <p className="text-white text-xs mx-1 cursor-pointer">Change plan</p>
                      </div>
    
                    </div>
                  </div>
    
                  {
                        showDropDownMenu && 
                        <div className="absolute top-16 h-20 w-60 z-s100 p-4 mx-3 bg-white rounded-md overflow-y-scroll">
                          {
                            dummyText.map((item) => (
                              <button key={item.id} 
                                className='text-lg font-bold 
                                 flex'
                                 onClick={() => setProjectTitle(item.text)}
                                >
                                
                                {item.text}
                              </button>
                            ))
                          }
                        </div>
                  }
                </div>
    
                <div className='flex flex-col h-1/2 mb-5'>
                  <div className='flex flex-col justify-evenly p-4'>
                    <h1 className='text-white text-2xl font-bold'>Useful Documentation to read</h1>
                    <p className='text-white text-sm font-semibold'>BuildX integrates smoothly with all of the frameworks you already know</p>
                  </div>
    
                  <div className='h-full flex  items-center'>
                    <DocButton title="Next.js" description="BuildX helps you to build with Next.js" img="/next.svg" tag="https://nextjs.org/docs/getting-started"/>
                    <DocButton title="Vue.js" description="Quickstart for Vue.js on BuildX" img="/vue-js-icon.svg" tag="https://vuejs.org/guide/introduction.html"/>
                    <DocButton title="Angular" description="Learn how to use Angular with BuildX" img="/angular-icon.svg" tag="https://angular.io/docs"/>
                  </div>
                </div>
                    
              </div>
            </div>
    
            <div className="col-span-2 flex flex-col pt-5">
              <div>
                <h1 className="text-white text-2xl font-bold mb-5">Project Info</h1>
                <InfoButtons title="Region" text="India" icon={<FiCopy />}/>
                <InfoButtons title="Key" text="biuwbfiuewf" icon={<FiCopy />}/>
              </div>
              <hr className='m-4'/>
              <div className='mt-5'> 
                <h1 className="text-white text-2xl font-bold">Repository</h1>
                <p className="text-white text-xs mb-5">Github is connected</p>
                <GithubButton title="Ishaan9006/project1" icon={<AiFillGithub size={25}/>} text="Edit"/>
              </div>
    
              <hr className='m-4'/>
    
              <div className='mt-5'>
                <h1 className="text-white text-2xl font-bold">Services</h1>
    
    
                <div>
                  <ServiceButton icon={<RxDotFilled size={20} color='green'/>} title="Database" process="Running"/>
                  <ServiceButton icon={<RxDotFilled size={20} color='green'/>} title="Authentication" process="Running"/>
                  <ServiceButton icon={<RxDotFilled size={20} color='orange'/>} title="Hosting" process="Pause"/>
                </div>
              </div>
            </div> 
          </main>
      )
}

export default HomePage
