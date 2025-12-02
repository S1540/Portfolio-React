import React from "react";
import { Eye } from "lucide-react";

const Button = ({ link, name }) => {
  return (
    <div className="mx-auto">
      <button className="group relative px-4 sm:px-10 md:px-12 py-4 sm:py-4.5 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-base sm:text-lg font-semibold rounded-xl shadow-lg shadow-blue-600/40 hover:shadow-blue-600/60 transition-all duration-300 transform hover:scale-105 overflow-hidden mx-auto">
        <span className="relative z-10 flex items-center justify-center gap-2">
          <Eye className="w-5 h-5" />
          <a href={link} target="_blank">
            {name}
          </a>
        </span>
        <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );
};

export default Button;
