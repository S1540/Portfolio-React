import React from "react";
import LaptopFrame from "../../assets/ProjectThumbnail/Laptop-Frame.png";
// import Myntra from "../../assets/ProjectThumbnail/MyntraFullPage.png";

const ProjectUI = ({ image }) => {
  return (
    <div className="relative w-full max-w-[550px] mx-auto">
      {/* Laptop Frame */}
      <img
        src={LaptopFrame}
        alt="Laptop Frame"
        className="w-full h-auto select-none pointer-events-none"
      />

      {/* Screen Content (Your Project) */}
      <div
        className="
          absolute 
          top-[20%]     
          left-[20%]   
          w-[60%]       
          h-[55%]      
          rounded-xs
          overflow-hidden
          shadow-inner
          group
        "
      >
        <img
          src={image}
          alt="Project"
          className="
            w-full 
            h-auto 
            object-cover 
            transition-transform 
            duration-[2500ms] 
            ease-linear 
            group-hover:-translate-y-[65%]
          "
        />
      </div>
    </div>
  );
};

export default ProjectUI;
