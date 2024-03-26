import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Portfolio'
function Skills() {
  const {skillsData} = useContext(UserContext)

    return (
        <section id='Skills'>
      <div className='text-center'>
            <h1 id='Skills' className='text-5xl font-semibold pt-4'>PROFESSIONAL SKILLS</h1>
             <p className='text-md pt-2 mb-20'>MY <b className='text-hover-color font-some text-3xl'>Talent</b></p>
             <div >
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10'>
    {skillsData.map(skill => (
        <div key={skill._id} className="bg-gray-800 text-white rounded-lg shadow-lg relative h-full">
            <div className='p-4 flex items-center'>
                <img src={skill.image.url} alt={skill.name} className="w-16 h-16 mr-3 object-contain" />
                <h1 className='text-lg'>{skill.name}</h1>
            </div>
            <div className='p-4'>
                <p className="text-md font-bold flex items-center">
                    <input className='w-5/6 mr-2 h-1' type="range" value={skill.percentage} disabled />
                    {skill.percentage}%
                </p>
            </div>
        </div>
    ))}
</div>
             </div>
        </div>
        </section>
    )
}

export default Skills
