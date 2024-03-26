import React, { useContext, useState } from 'react';
import ImageWithHoverText from './Imagewithhover';
import { UserContext } from '../Portfolio';

function Projects() {
  const { projectData } = useContext(UserContext);
  const [selectedTech, setSelectedTech] = useState('All');

  const techStackNames = Array.from(
    new Set(projectData.flatMap((project) => project.techStack.map((tech) => tech.name)))
  );

  const filteredProjects =
    selectedTech === 'All'
      ? projectData
      : projectData.filter((project) =>
          project.techStack.some((tech) => tech.name === selectedTech)
        );

  const filteredButtons = techStackNames.filter((_, index) => index < 4 || index > 6);

  return (
    <section id='portfolio' className='pb-20'>
      <div className='text-center mt-20 lg:mt-28'>
        <h1 id='Skills' className='text-5xl font-semibold pt-4'>
          PORTFOLIO
        </h1>
        <p className='text-md pt-2 mb-20'>
          MY{' '}
          <b className='text-hover-color font-some text-3xl'>Projects</b>
        </p>
      </div>
      <div className='flex flex-wrap justify-center space-x-4 mb-10'>
        <button
          className={`${
            selectedTech === 'All' ? 'bg-gray-900 text-white' : 'bg-gray-700'
          } px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-hover-color mb-2 md:mb-0`}
          onClick={() => setSelectedTech('All')}
        >
          All
        </button>
        {filteredButtons.map((techName) => (
          <button
            key={techName}
            className={`${
              selectedTech === techName ? 'bg-gray-900 text-white' : 'bg-gray-700'
            } px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-hover-color mb-2 md:mb-0`}
            onClick={() => setSelectedTech(techName)}
          >
            {techName}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10'>
        {filteredProjects.map((project, index) => (
          <div key={project._id} className='text-white rounded-lg shadow-lg relative'>
            <div className='p-4 flex items-center'>
              <ImageWithHoverText
                imageSrc={project.image.url}
                headtext={`Project ${index + 1}`}
                hoverText={project.techStack.map((tech, techIndex, array) => {
                  if (techIndex === array.length - 1) {
                    return tech.name;
                  } else {
                    return `${tech.name}, `;
                  }
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;