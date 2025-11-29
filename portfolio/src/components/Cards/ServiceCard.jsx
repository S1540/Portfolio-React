import React from "react";

const ServiceCard = ({ image, heading, discription }) => {
  return (
    <>
      <div className="max-w-54 h-72 border border-gray-500 bg-slate-900/30 rounded-md relative group hover:scale-105 transition-transform duration-300 ease-in-out ">
        <div className="absolute top-14 left-15 w-18 h-18 bg-linear-to-r from-blue-400 via-purple-600 to-cyan-400 rounded-full blur-3xl group-hover:w-28 group-hover:h-28 group-hover:left-12 transition-all duration-300 ease-in-out "></div>
        <img src={image} alt="" className="w-32 h-32 mx-auto object-cover" />
        <div className="text-white flex flex-col items-center text-center">
          <h3 className="text-xl font-medium text-heading pb-4 tracking-wider">
            {heading}
          </h3>
          <p className="text-zinc-300">{discription}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
