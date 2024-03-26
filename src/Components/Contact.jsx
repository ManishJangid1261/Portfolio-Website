import React, { useContext } from 'react'
import { UserContext } from '../Portfolio'
import {PhoneCall , Home , Mail , ArrowUp} from 'react-feather'

function Contact() {

    const {about} = useContext(UserContext)

    return (
        <section id='contact'>
            <div className='mb-28'>

            
             <div className='text-center'>
            <h1 id='Skills' className='text-5xl font-semibold pt-4'>CONTACT ME</h1>
             <p className='text-md pt-2 mb-20'>LET’S <b className='text-hover-color font-some text-3xl'>Talk About Ideas</b></p>
             </div>

            <div className='lg:flex justify-evenly w-full'>
            <div className='lg:w-1/2 px-10'>
                <form action="
                " >
                    <div className='flex flex-col gap-10'>
                        <div className='flex w-full'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="name" className='text-xs pl-5 lg:text-sm pb-2'>YOUR FULL NAME <b className='text-hover-color'>*</b></label>
                            <input type="text" className='w-11/12 h-14 rounded-3xl border-2 border-hover-color pl-4 text-black' id='name'  />
                        </div>
                        <div className='flex flex-col w-1/2'>
                        <label htmlFor="email" className='text-xs pl-3 ml-4 lg:text-sm pb-2'>YOUR EMAIL ADDRESS <b className='text-hover-color'>*</b></label>
                        <input type="text" className='w-11/12 ml-4  h-14 rounded-3xl border-2 border-hover-color pl-4 text-black' id='email'  />
                        </div>
                       </div>
                        <div className='flex flex-col w-full' >
                        <label htmlFor="subject" className='text-xs pl-5 lg:text-sm pb-2 '>YOUR SUBJECT <b className='text-hover-color'>*</b></label>
                        <input type="text" className='w-full h-14 rounded-3xl border-2 border-hover-color pl-4 text-black' id='subject'  />
                        </div>
                        <div className='flex flex-col w-full'>
                        <label htmlFor="message" className='text-xs pl-5 lg:text-sm pb-2 '>YOUR MESSAGE <b className='text-hover-color'>*</b></label>
                        <textarea  className='w-full h-40 rounded-3xl pt-2 border-2 border-hover-color pl-4 text-black' id='message'
                     
                        style={{  resize: 'none' }} />
                        </div>
                    </div>

                </form>
            </div>
            <div className='flex flex-col gap-5 tracking-wider pl-10 mt-32 lg:mt-2 '>
                <h1 className='font-serif text-4xl font-semibold pb-10'>GET IN TOUCH</h1>
               <div className='flex items-center mb-3'>
                <PhoneCall size={45} className='text-hover-color mr-3'/>
                <div>
                <h1 className='text-xl font-semibold'>Phone Number</h1>
                <p className='text-md pt-2 font-serif'>{about.phoneNumber}</p>
                    </div> 
               </div> 
               <div className='border-gray-600 w-4/5 border-[1px]'>

               </div>
               <div className='flex my-2 items-center' >
                <Home size={45} className='text-hover-color mr-3'/>
                <div>
                <p className='font-serif'>{about.address}</p>
                    </div> 
               </div> 
               <div className='border-gray-600 w-4/5 border-[1px]'>
                </div>
               <div className='flex items-center mt-3' >
                <Mail size={45} className='text-hover-color mr-3'/>
                <div>
                <h1 className='text-xl font-semibold '>Email</h1>
                <p className='font-serif pt-2'>portfolio3@gmail.com</p>
                    </div> 
               </div> 
         
              
            </div>

            </div>

             </div>
             <div className='flex lg:justify-evenly justify-between border-t-[1px] border-gray-700'>
                <div>
                <h1 className='lg:text-md text-xs font-semibold opacity-75 pt-5 pb-2 pl-12 '>Copyright & Design By John doe</h1>

                </div>
                <div className='lg:text-md text-xs border-l-[1px] border-r-[1px] border-gray-700 font-semibold opacity-75 pt-5 pb-2 px-2'> <a href="#home" className='flex '>BACK TO TOP <ArrowUp className='pb-1 mb-1'/></a> </div>
             </div>

             


        </section>
        
    )
}

export default Contact
