import React, { useState } from 'react';
import { Menu, X } from 'react-feather';
import { useSpring, animated } from 'react-spring';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuAnimation = useSpring({
    transform: isMenuOpen ? 'translateX(-0%)' : 'translateX(100%)', 
  });

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className='w-full h-20 bg-dark-gray z-10 fixed top-0 '>
      <h1 className='text-bold text-3xl fixed top-5 left-20 font-cursive '>John</h1>
     <div>
      <h1> <Menu onClick={handleMenuToggle} className='fixed right-20 top-5 h-10 w-9 opacity-65 cursor-pointer hover:opacity-90 hover:text-hover-color '/></h1>
     
         
      <animated.div style={menuAnimation} className="fixed top-0 right-0 bg-dark-gray w-4/5 md:w-2/5 h-screen z-50 p-12 ">
        <div className='flex justify-between'>
          <h1 className='text-2xl font-bold text-white opacity-90'>John</h1>
        <div className="flex justify-end"><h1> <X onClick={handleMenuToggle} className='h-8 w-10 cursor-pointer text-white opacity-80 hover:text-hover-color ' /></h1>
         
        </div>
        </div>
      
      <div className='flex flex-col w-full justify-center items-center pt-16 opacity-75 '>
        <a href="#" className='text-xl font-semibold hover:text-hover-color' >HOME</a>
        <a href="#Skills" className='text-xl font-semibold hover:text-hover-color mt-6' >SKILLS</a>
        <a href="#Services" className='text-xl font-semibold hover:text-hover-color mt-6' >SERVICES</a>
        <a href="#Resume" className='text-xl font-semibold hover:text-hover-color mt-6' >RESUME</a>
        <a href="#portfolio" className='text-xl font-semibold hover:text-hover-color mt-6' >PORTFOLIO</a>
        <a href="#contact" className='text-xl font-semibold hover:text-hover-color mt-6' >CONTACT US</a>
      </div>
      <div className='mt-20'>
        <h1 className='text-xl opacity-80'>My Address : </h1><p className='pl-5 text-md opacity-50'>Los Angeles , America</p>
        
        <h4 className='pt-6 text-xl opacity-80'>Urgent issue? call us at</h4>
        <p className='pt-2 text-xl text-hover-color pl-5'>+91-9212321321</p>
      </div>
      </animated.div>
    </div>
    </div>
    </>
  );
};

export default Navbar;