import React, { useState, useEffect } from 'react';

const PageTimeline = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(Math.round(scrolled));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="w-14 h-14 bg-gray-600 rounded-full relative overflow-hidden">
        <div className="h-full bg-hover-color transition-transform duration-500 transform origin-bottom absolute bottom-0 left-0  "
          style={{ width: `${scrollPercentage}%` }}>

          <div className="absolute w-full h-full border-4 border-transparent border-dashed rounded-full animate-outline"></div>
        </div>
        <div className="flex justify-center items-center h-full text-white font-bold z-40 absolute inset-0 text-center">
          {scrollPercentage}%
        </div>
      </div>
    </div>
  );
};

export default PageTimeline;