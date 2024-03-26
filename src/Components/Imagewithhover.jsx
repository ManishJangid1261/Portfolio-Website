import React, { useState } from "react";

function ImageWithHoverText({ imageSrc, hoverText , headtext }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} className="w-full h-full object-cover" />
      {isHovered && (
        <div>
<div>
  
</div>
        <div className="absolute inset-0 flex flex-col items-start pl-3 pb-3 xl:pl-8 xl:pb-8 justify-end bg-black opacity-80">
          <h1 className="text-2xl xl:text-4xl font-bold text-hover-color">{headtext}</h1>
          <p className="text-white text-md xl:text-xl "> {hoverText}</p>
        </div>
        </div>
      )}
    </div>
  );
}

export default ImageWithHoverText;