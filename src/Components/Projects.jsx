import React, { useContext } from 'react';
import ImageWithHoverText from './Imagewithhover';
import { UserContext } from '../Portfolio';

function Projects() {
  const { projectData } = useContext(UserContext);

  return (
    <section id='portfolio' className='pb-20'>
      <div className='text-center mt-20 lg:mt-28'>
        <h1 id='Skills' className='text-5xl font-semibold pt-4'>PORTFOLIO</h1>
        <p className='text-md pt-2 mb-20'>MY <b className='text-hover-color font-some text-3xl'>Projects</b></p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10'>
        {projectData.map((project, index) => (
          <div key={project._id} className="text-white rounded-lg shadow-lg relative">
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