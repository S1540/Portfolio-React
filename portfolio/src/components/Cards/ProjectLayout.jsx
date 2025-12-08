import React from "react";
import Button from "./Button";
import ProjectUI from "./ProjectUI";
import { motion } from "framer-motion";

const ProjectLayout = ({ image, link, name, description, tools }) => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.85 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="flex items-center justify-center ">
          <ProjectUI image={image} />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-L2_hvNjcMysNA1DKWVpUAF5qtyn5wI_jYg&s"
              alt="Myntra Logo"
              className="w-14 h-14 object-cover rounded-full ring-2 ring-pink-500/50"
            />
            <h3
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: "#ff3f6c" }}
            >
              {name}
            </h3>
          </div>

          <div className="flex gap-4 justify-center items-center py-3 px-6 bg-slate-900/50 rounded-full w-fit mx-auto border border-slate-700/30">
            <img
              src={tools[0]}
              alt="React"
              className="w-9 h-9 object-cover hover:scale-110 transition-transform duration-200"
            />
            <img
              src={tools[1]}
              alt="Tailwind"
              className="w-9 h-9 object-cover hover:scale-110 transition-transform duration-200"
            />
            <img
              src={tools[2]}
              alt="Node"
              className="w-9 h-9 object-cover hover:scale-110 transition-transform duration-200"
            />
            <img
              src={tools[3]}
              alt="MongoDB"
              className="w-9 h-9 object-cover hover:scale-110 transition-transform duration-200"
            />
          </div>

          <p className="text-gray-200 text-base leading-relaxed font-semibold text-center px-4 tracking-wide">
            {description}
          </p>
          <Button name="View Project" link={link} />
        </div>
      </motion.div>
    </>
  );
};

export default ProjectLayout;
