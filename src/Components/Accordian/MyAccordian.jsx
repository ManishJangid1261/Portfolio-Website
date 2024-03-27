import React, { useContext, useState } from 'react';
import { UserContext } from '../../Portfolio';

function MyAccordion() {
  const { userData } = useContext(UserContext);
  const [expandedEducation, setExpandedEducation] = useState(null);
  const [expandedExperience, setExpandedExperience] = useState(null);

  const handleEducationClick = (companyName) => {
    setExpandedEducation((prevExpanded) =>
      prevExpanded === companyName ? null : companyName
    );
  };

  const handleExperienceClick = (companyName) => {
    setExpandedExperience((prevExpanded) =>
      prevExpanded === companyName ? null : companyName
    );
  };

  const renderEducationDetails = (company) => (
    <div
      className="bg-gray-100 text-black p-4 rounded-lg pl-6 w-4/5"
      style={{
        maxHeight: expandedEducation === company.company_name ? '1000px' : '0',
        opacity: expandedEducation === company.company_name ? '1' : '0',
        transition: 'max-height 500ms ease-out, opacity 500ms ease-out',
        overflow: 'hidden',
      }}
    >
      <p className="pt-2 text-2xl font-some font-extrabold">{company.jobTitle}</p>
      <p className="font-semibold text-sm">
        {new Date(company.startDate).toLocaleDateString()} -{' '}
        {new Date(company.endDate).toLocaleDateString()}, {company.jobLocation}
      </p>
      {company.summary ? (
        <p className="py-5 opacity-90 tracking-wider">{company.summary}</p>
      ) : (
        <p className="py-5 opacity-90 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, doloribus..</p>
      )}
      <ul className="list-disc list-inside text-md tracking-wide pb-4">
        {company.bulletPoints.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );

  const renderExperienceDetails = (company) => (
    <div
      className="bg-gray-100 text-black p-4 rounded-lg  pl-6 w-4/5"
      style={{
        maxHeight: expandedExperience === company.company_name ? '1000px' : '0',
        opacity: expandedExperience === company.company_name ? '1' : '0',
        transition: 'max-height 500ms ease-out, opacity 500ms ease-out',
        overflow: 'hidden',
      }}
    >
      <p className="pt-2 text-2xl font-some font-extrabold">{company.jobTitle}</p>
      <p className="font-semibold text-sm">
        {new Date(company.startDate).toLocaleDateString()} -{' '}
        {new Date(company.endDate).toLocaleDateString()}, {company.jobLocation}
      </p>
      {company.summary ? (
        <p className="py-5 opacity-90 tracking-wider">{company.summary}</p>
      ) : (
        <p className="py-5 opacity-90 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, modi.</p>
      )}
      <ul className="list-disc list-inside text-md tracking-wide pb-4">
        {company.bulletPoints.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id='Resume'>

  
    <div className="container mx-auto mt-28 flex flex-col items-center">
      <div className="text-center">
        <h1 id="Skills" className="text-5xl font-semibold pt-4">
          RESUME
        </h1>
        <p className="text-md pt-2 mb-20">
          MY<b className="text-hover-color pl-3 font-some text-3xl">Story</b>
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:items-start items-center justify-evenly">
        <div className="lg:w-1/2 w-full text-center pr-2">
          <h2 className="text-3xl font-bold mb-10">Experience</h2>
          {userData.user.timeline.map((company, index) =>
            company.forEducation ? (
              <div
                key={index}
                className="w-full flex items-center text-start flex-col"
              >
                <button
                  className="hover:bg-white bg-hover-color text-white hover:text-hover-color font-bold py-2 px-4 w-5/6 rounded transition-all duration-300"
                  onClick={() => handleEducationClick(company.company_name)}
                >
                  {company.company_name}
                </button>
                {renderEducationDetails(company)}
              </div>
            ) : null
          )}
        </div>
        <div className="lg:w-1/2 w-full text-center">
          <h2 className="text-3xl font-bold mb-10 mt-8 lg:mt-0">Education</h2>
          {userData.user.timeline.map((company, index) =>
            !company.forEducation ? (
              <div
                key={index}
                className="w-full flex items-center text-start flex-col"
              >
                <button
                  className="hover:bg-white bg-hover-color text-white hover:text-hover-color font-bold py-2 px-4 w-5/6 rounded transition-colors duration-300"
                  onClick={() => handleExperienceClick(company.company_name)}
                >
                  {company.company_name}
                </button>
                {renderExperienceDetails(company)}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
    </section>
  );
}

export default MyAccordion;