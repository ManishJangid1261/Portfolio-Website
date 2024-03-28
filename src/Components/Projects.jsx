import React, { useContext, useState } from 'react';
import { UserContext } from '../Portfolio';
import ProjectModal from './CustomFile';

function Projects() {
  const { projectData } = useContext(UserContext);
  const [selectedTech, setSelectedTech] = useState('All');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
  const limitedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id='portfolio' className='pb-20 lg:flex flex-col justify-center items-center'>
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
          onClick={() => {
            setSelectedTech('All');
            setShowAllProjects(false);
          }}
        >
          All
        </button>
        {filteredButtons.map((techName) => (
          <button
            key={techName}
            className={`${
              selectedTech === techName ? 'bg-gray-900 text-white' : 'bg-gray-700'
            } px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-hover-color mb-2 md:mb-0`}
            onClick={() => {
              setSelectedTech(techName);
              setShowAllProjects(false);
            }}
          >
            {techName}
          </button>
        ))}
      </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 xl:w-4/5'>
        {limitedProjects.map((project, index) => (
          <div key={project._id} className='text-white rounded-lg shadow-lg relative'>
            <div className='p-4 flex items-center'>
              <div className='project-details bg-white text-black p-4 rounded-xl'>
                <img
                  src={project.image.url}
                  alt={`Project ${index + 1}`}
                  className='cursor-pointer hover:brightness-75 project-image rounded-lg'
                  onClick={() => openModal(project)}
                />
                <p className='mb-1 mt-1 font-semibold text-hover-color'>
                  {project.techStack.map((tech, techIndex, array) => (
                    <span key={tech.name}>
                      {tech.name}
                      {techIndex !== array.length - 1 && ', '}
                    </span>
                  ))}
                </p>
                <h2
  onClick={() => openModal(project)}
  className='text-2xl font-bold mb-6 cursor-pointer hover-underline'
>
  {`Project ${index + 1}`}

</h2>

                
                <p className='tracking-wider opacity-80 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestiae cumque esse porro quisquam. Exercitationem neque deleniti vero animi eum aliquam dolor fugiat.</p>
                <button className='view-details-btn font-bold py-2 tracking-wider hover:text-hover-color' onClick={() => openModal(project)}>
                  View Project
                </button>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      <ProjectModal isOpen={!!selectedProject} onClose={closeModal} project={selectedProject} />

      {!showAllProjects && filteredProjects.length > 3 && (
        <div className='text-center w-full'>
          <button
            className='bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-hover-color mb-2 md:mb-0'
            onClick={() => setShowAllProjects(true)}
          >
            Show All
          </button>
        </div>
      )}
      {showAllProjects && (
        <div className='text-center w-full'>
          <button
            className='bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-hover-color mb-2 md:mb-0'
            onClick={() => setShowAllProjects(false)}
          >
            <a href="#portfolio">Close All</a>
          </button>
        </div>
      )}
       <ProjectModal isOpen={!!selectedProject} onClose={closeModal} project={selectedProject} />
     
    </section>
  );
}

export default Projects;


