import React, { useContext } from 'react'
import { UserContext } from '../Portfolio'
import {Plus} from 'react-feather'

function Home() {

    const {about , SocialData} = useContext(UserContext)

    return (
        <section id='home'>
        <div className='mt-28 lg:flex-row flex-col flex items-center  lg:items-start md:justify-between lg:justify-evenly mb-24 md:mb-20 px-2'>
            <div className='md:mt-10 text-center md:mb-20 md:-ml-10 lg:text-start lg:w-1/3'><h3 className='text-sm lg:text-md'>HELLO, <b >MY NAME IS</b></h3>
            <h1 className='text-hover-color pt-2 text-6xl lg:text-7xl font-bold' >{about.username}</h1>
            <h2 className='mt-5 opacity-80'>I AM <b className='font-bold opacity-100 font-some text-2xl lg:text-3xl pl-2 '>{about.title}</b></h2>
            <div className='text-start hidden lg:flex'>
                <h2 className='pt-20 lg:pt-12 tracking-wide opacity-50 text-xl  '>{about.subtitle}{about.description}</h2>
                </div>
                <div className='lg:flex hidden mt-6 gap-4'>
                {SocialData.map(social => (
        <div className='w-12 text-center '>
            <img src={social.image.url} />
            <h1 className='text-xs pt-1 hover:text-gray-600'>{social.name}</h1>
        </div>
    ))}
                </div>
            </div>
            <div className='h-screen mt-16 md:mt-1 relative md:mr-20 '>
                
                <img  className="md:h-5/6  h-4/6 rounded-full  " src={about.userimage} 
                alt="User Image"
                 />
                 <div className='bg-white text-black flex items-center absolute top-2/4 md:top-2/3 lg:-left-12 h-20 w-44 md:w-52 rounded-full text-center pl-3  border-hover-color border-2 '>
                    <h2 className='flex text-4xl font-semibold'>{about.exp_year} <b className='text-hover-color '><Plus strokeWidth={3} size={37} /></b></h2><div className='text-xs font-bold pl-2'><h2 >YEARS OF</h2>
                    <h2 className='text-hover-color mt-1'>EXPERIENCE</h2></div>
                 </div>
                 <div className='bg-white text-black flex items-center absolute top-2/4 md:top-2/3 right-0 lg:-right-16 h-20 w-44 md:w-52 rounded-full text-center pl-4 border-hover-color border-2 '>
                    <h2 className='flex text-4xl font-semibold'>{about.totalprojects}</h2><div className='text-xs font-bold pl-4'><h2 >COMPLETED</h2>
                    <h2 className='text-hover-color mt-1'>PROJECTS</h2></div>
                 </div>
               
            
            </div>
            <div className=' flex text-center md:-mt-24 justify-center -mt-48 lg:hidden'>
                <h2 className='tracking-wide opacity-50 text-xl w-3/4 '>{about.subtitle}{about.description}</h2>
                </div>
                <div className='flex  lg:hidden  mt-6 gap-4'>
                 {SocialData.map(social => (
        <div className='w-12 text-center'>
            <img src={social.image.url}  />
            <h1 className='text-xs pt-1 hover:text-gray-600'>{social.name}</h1>
        </div>
    ))}
                </div>
 
        </div>
        </section>
    )
}

export default Home
