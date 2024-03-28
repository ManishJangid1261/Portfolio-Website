import React, { createContext,useState, useEffect } from 'react';
import loader from './Components/loader.svg'
const UserContext = createContext()

const UserProvider = ({children}) => {
  const [userData, setUserData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  useEffect(() => {
    fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

 
  if (!userData) {
    return <div className='w-full h-screen bg-black flex items-center justify-center text-center'><img src={`${loader}`} className="w-20" alt="" /></div>;
  }

  const about = {
    username: userData.user.about.name,
    title:userData.user.about.title,
    subtitle:userData.user.about.subTitle,
    description:userData.user.about.description,
    quote:userData.user.about.quote,
    exp_year:userData.user.about.exp_year,
    phoneNumber:userData.user.about.phoneNumber,
    address:userData.user.about.address,
    userimage:userData.user.about.avatar.url,
    totalprojects:userData.user.about.some_total
  }

  const skillsData = userData.user.skills.map(skill => ({

    enabled: skill.enabled,
    name: skill.name,
    sequence: skill.sequence,
    percentage: skill.percentage,
    image: {
      url: skill.image.url,
    },
    _id: skill._id,
  }));
  const serviceData = userData.user.services.map(service => ({
    name: service.name,
    charge: service.charge,
    desc: service.desc,
    _id: service._id,
    image: {
      url: service.image.url,
    },
}));


  const SocialData = userData.user.social_handles.map(Social => ({
    name: Social.platform,
    image: {
      url: Social.image.url,
    },
}));

const projectData = userData.user.projects.map(project => ({
  enabled: project.enabled,
  sequence: project.sequence,
  title: project.title,
  description: project.description,
  techStack: project.techStack.map((tech) => ({
    name: tech,
  })),
  image: {
    url: project.image.url,
  },
  _id: project._id,
}));


const customers = userData.user.testimonials.map(project => ({
  name: project.name,
  review: project.review,
  position: project.position,
  image: {
    url: project.image.url,
  },
}));


const contextValues = {
  about,
  skillsData, 
  serviceData,
  projectData,
  SocialData,
  customers,
  userData,
};

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider , UserContext} ;