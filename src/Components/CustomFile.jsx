import React, {useState} from 'react';
import {GitHub } from 'react-feather'

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project || !project.image || !project.image.url) {
    return null;
  }

  const handleModalClose = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-3xl mx-2">
    
        {project.image && project.image.url && (
          <img src={project.image.url} alt={project.title} className="w-full rounded-lg border-hover-color border-[1px] mb-4" />
        )}
        <p className="text-gray-700 mb-4">
          <strong className='pr-2 font-semibold'>Using Tech :</strong>{' '}
          {project.techStack.map((tech, index) => `${tech.name}${index !== project.techStack.length - 1 ? ', ' : ''}`)}
        </p>
        <div className='text-black pb-4 sm:flex'>

    <div className='mr-10'>
          <h1 className='text-lg font-semibold text-gray-700'>John Doe</h1>
          <p className='pb-1'>Web Developer</p>
          </div>
          <div className='flex'>
            <div>
              <h1 className='font-semibold'>Year:</h1>
            <p>2017</p>
            </div>
          
            <div className='ml-10'>
              <h1 className='font-semibold'>Categories:</h1>
            <p>Web Developer</p>
            </div>
          </div>
          </div>
        <h1 className='text-black flex' > <h1 className='font-semibold text-gray-700'>Github URL :</h1> <a href="https://github.com/ManishJangid1261/Portfolio-Website " target="_blank" className='text-blue-800 flex'><GitHub className='mx-2'/> Github </a></h1>
        <h1 className='text-black flex' > <h1 className='font-semibold text-gray-700'>Live URL :</h1> <a href="https://portfolio-website-john-user.vercel.app/" target="_blank" className='text-blue-800 flex pl-3'>portfolio-website-john</a></h1>
        
        <p className='text-black tracking-wide opacity-80 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis minima unde enim.</p>
        <div className='text-center'>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-900" onClick={handleModalClose}>
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;