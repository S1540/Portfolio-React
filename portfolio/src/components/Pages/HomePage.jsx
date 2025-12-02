import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {
  Code,
  Layers,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  CornerDownRight,
} from "lucide-react";
import HTML5 from "../../assets/HTML5.png";
import CSS from "../../assets/CSS.png";
import TailwindCSS from "../../assets/Tailwind.png";
import JavaScript from "../../assets/JavaScript.png";
import ReactJS from "../../assets/React.png";
import NodeJS from "../../assets/NodeJS.png";
import ExpressJS from "../../assets/Express.png";
import MongoDB from "../../assets/MongoDB.png";
import GitHub from "../../assets/GitHub.png";
import Programer from "../../assets/Programer.png";
import CleanCode from "../../assets/CleanCode.png";
import Responsive from "../../assets/Responsive.png";
import AI from "../../assets/AI.png";
import LandingPage from "../LandingPage";
import SkillGauge from "../Cards/SkillGauge";
import AnimatedCounter from "../Cards/AnimatedCounter";
import animationLottie from "../../assets/email sent.json";
import ServiceCard from "../Cards/ServiceCard";
import ProjectUI from "../Cards/ProjectUI";
import MyntraFullPage from "../../assets/ProjectThumbnail/MyntraFullPage.png";
import ScienFullPage from "../../assets/ProjectThumbnail/SceincFullPage.png";
import Button from "../Cards/Button";
import Tea from "../../assets/Welcome Tea.jpg";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <>
      <LandingPage />

      <section className="h-auto bg-[#020718] relative py-14 overflow-hidden">
        {/* linear Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/5 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
              <span className="text-gray-400 text-sm sm:text-base font-medium uppercase tracking-wider">
                Get to know me
              </span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Left Column */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 px-6 sm:px-8 py-8 sm:py-10 rounded-lg hover:bg-slate-800/60"
            >
              {/* Top linear Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-t-2xl"></div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 bg-opacity-10">
                  <Code className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  I'm a MERN Stack Developer
                </h3>
              </div>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                I'm a Modern MERN Stack Developer with a growing focus on
                AI-powered development. I build fast, intuitive, and visually
                polished digital experiences that balance clean design with
                solid engineering. My approach combines modern web technologies,
                attention to detail, and a passion for solving real-world
                problems through code.
              </p>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Target className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-white">
                  My Development Style
                </h4>
              </div>

              <ul className="space-y-3">
                {[
                  "Pixel-perfect UI + Responsive Design",
                  "Clean folder structure & scalable code",
                  "Performance-first mindset",
                  "User-centric design decisions",
                  "Passion for building meaningful digital products",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-400 text-sm sm:text-base"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-400 to-cyan-400 shrink-0"></div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 px-6 sm:px-8 py-8 sm:py-10 rounded-lg hover:bg-slate-800/60"
            >
              {/* Top linear Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-t-2xl"></div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 bg-opacity-10">
                  <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  What I Do
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  {
                    icon: Code,
                    text: "Modern Frontend Development using React, Tailwind CSS, HTML, CSS & JavaScript.",
                    color: "text-blue-400",
                  },
                  {
                    icon: Layers,
                    text: "Backend Foundations with Node.js, Express & MongoDB to build full-stack applications.",
                    color: "text-green-400",
                  },
                  {
                    icon: Zap,
                    text: "AI-enhanced development using intelligent tools, automation, and smart features.",
                    color: "text-yellow-400",
                  },
                  {
                    icon: Sparkles,
                    text: "Responsive & Clean UI design optimized for performance, accessibility & UX.",
                    color: "text-purple-400",
                  },
                  {
                    icon: Target,
                    text: "Reusable, maintainable code following modular & scalable patterns.",
                    color: "text-cyan-400",
                  },
                  {
                    icon: TrendingUp,
                    text: "Continuous improvement with new technologies & best practices.",
                    color: "text-pink-400",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-gray-400 text-sm sm:text-base group/item"
                  >
                    <div
                      className={`mt-1 p-2 rounded-lg bg-slate-700/50 group-hover/item:bg-slate-700 transition-colors shrink-0`}
                    >
                      <item.icon
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`}
                      />
                    </div>
                    <span className="leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 sm:mt-16"
          >
            {[
              {
                endValue: 50,
                label: "Projects Completed",
                color: "from-blue-400 to-cyan-400",
              },
              {
                endValue: 2,
                label: "Years Experience",
                color: "from-purple-400 to-pink-400",
              },
              {
                endValue: 30,
                label: "Happy Clients",
                color: "from-green-400 to-emerald-400",
              },
              {
                endValue: 100,
                label: "Satisfaction Rate",
                color: "from-orange-400 to-red-400",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.6 }}
                className="text-center p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:bg-slate-800/60 hover:border-slate-600 transition-transform duration-200 hover:scale-101"
              >
                <div
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  <AnimatedCounter endValue={stat.endValue} />
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <section className="h-auto bg-[#020718] relative pb-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-ping"></div>
          <div className="absolute bottom-1/5 right-1/4 w-[420px] h-96 bg-purple-500/20 rounded-full blur-3xl animate-bounce "></div>
        </div>
        {/* Skills Section */}
        <div className="pt-14 px-4">
          <div className="text-center mb-16  animate-fadeIn">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
              <span className="text-gray-400 text-sm sm:text-base font-medium uppercase tracking-wider">
                Explore My Skillset
              </span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
          </div>
          {/* Skills Circles */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 sm:px-6 lg:px-8 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-8 rounded-lg hover:bg-slate-800/60"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-t-2xl"></div>
            {[
              {
                skillName: "HTML",
                skillValue: 90,
                skillColor: "#E34F26",
                skillIcon: HTML5,
              },
              {
                skillName: "CSS",
                skillValue: 85,
                skillColor: "#2965F1",
                skillIcon: CSS,
              },
              {
                skillName: "Tailwind",
                skillValue: 80,
                skillColor: "#38B2AC",
                skillIcon: TailwindCSS,
              },
              {
                skillName: "JavaScript",
                skillValue: 75,
                skillColor: "#F7DF1E",
                skillIcon: JavaScript,
              },
              {
                skillName: "React",
                skillValue: 80,
                skillColor: "#61DAFB",
                skillIcon: ReactJS,
              },
              {
                skillName: "Node.js",
                skillValue: 70,
                skillColor: "#339933",
                skillIcon: NodeJS,
              },
              {
                skillName: "Express.js",
                skillValue: 65,
                skillColor: "#000000",
                skillIcon: ExpressJS,
              },
              {
                skillName: "MongoDB",
                skillValue: 60,
                skillColor: "#47A248",
                skillIcon: MongoDB,
              },
              {
                skillName: "GitHub",
                skillValue: 85,
                skillColor: "#181717",
                skillIcon: GitHub,
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <SkillGauge
                  key={index}
                  skillName={skill.skillName}
                  skillIcon={skill.skillIcon}
                  skillValue={skill.skillValue}
                  skillColor={skill.skillColor}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* My Services */}
      <section className="h-auto bg-[#020718] relative py-14 overflow-hidden">
        <div className="px-4">
          <div className="text-center mb-16  animate-fadeIn">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
              <span className="text-gray-400 text-sm sm:text-base font-medium uppercase tracking-wider">
                What I Offer
              </span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Service Overview
              </span>
            </h2>
          </div>
          {/* Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto gap-4"
          >
            {[
              {
                image: Programer,
                heading: "Web Development",
                discription:
                  "Building responsive and modern websites using latest technologies. ",
              },
              {
                image: CleanCode,
                heading: "Clean Code",
                discription:
                  "writing clean and scalable code for real-world projects ",
              },
              {
                image: Responsive,
                heading: "Responsive Design",
                discription:
                  "Creating fully responsive and user-friendly layouts for all screen size. ",
              },
              {
                image: AI,
                heading: "AI Integration",
                discription:
                  "Incorporating AI features to enhance user experience and functionality. ",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.6 }}
              >
                <ServiceCard
                  key={index}
                  image={service.image}
                  heading={service.heading}
                  discription={service.discription}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Project ShowCase */}
      <section className="min-h-screen bg-[#020718] relative py-14 px-4 overflow-hidden text-white">
        <div className="text-center mb-16  animate-fadeIn">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
            <span className="text-gray-400 text-sm sm:text-base font-medium uppercase tracking-wider">
              Explore Project
            </span>
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Project Showcase
            </span>
          </h2>
        </div>
        <div className="max-w-7xl w-full mx-auto flex flex-col gap-10 items-center bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 py-8  rounded-lg hover:bg-slate-800/60 transition-all duration-300">
          <motion.div
            // key={index}
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
              <ProjectUI image={MyntraFullPage} />
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
                  Myntra Clone
                </h3>
              </div>

              <div className="flex gap-4 justify-center items-center py-3 px-6 bg-slate-900/50 rounded-full w-fit mx-auto border border-slate-700/30">
                <img
                  src={ReactJS}
                  alt="React"
                  className="w-9 h-9 object-cover hover:scale-110 transition-transform duration-200"
                />
                <img
                  src={TailwindCSS}
                  alt="Tailwind"
                  className="w-9 h-9 object-cover hover:scale-110 transition-transform duration-200"
                />
                <img
                  src={NodeJS}
                  alt="Node"
                  className="w-9 h-9 object-cover hover:scale-110 transition-transform duration-200"
                />
                <img
                  src={MongoDB}
                  alt="MongoDB"
                  className="w-9 h-9 object-cover hover:scale-110 transition-transform duration-200"
                />
              </div>

              <p className="text-gray-200 text-base leading-relaxed font-semibold text-center px-4 tracking-wide">
                This project is a fully responsive clone of the Myntra shopping
                platform built using modern frontend technologies. It includes
                product listings, category filtering, and a clean UI inspired by
                the original website. The design focuses on a smooth user
                experience with optimized layouts for both mobile and desktop. I
                implemented reusable components, responsive grids, and
                interactive elements to make the interface feel dynamic. This
                project helped me strengthen my skills in React, Tailwind CSS,
                and component-based architecture.
              </p>
              <Button
                name="View Project"
                link="https://cool-lamingto-edc51b.netlify.app/"
              />
            </div>
          </motion.div>
          {/* Project 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-t-slate-700/50 pt-8"
          >
            <div className="md:order-2 flex items-center justify-center">
              <ProjectUI image={ScienFullPage} />
            </div>
            <div className="md:order-1 flex flex-col justify-center gap-6">
              <div className="flex items-center justify-center gap-3">
                <img
                  src="https://c8.alamy.com/comp/TCFC7N/creative-palm-holding-beaker-science-logo-design-symbol-illustration-TCFC7N.jpg"
                  alt="Myntra Logo"
                  className="w-14 h-14 object-cover rounded-full ring-2 ring-pink-500/50"
                />
                <h3
                  className="text-3xl sm:text-4xl font-extrabold tracking-tight"
                  style={{ color: "#ff3f6c" }}
                >
                  Sceinc Web
                </h3>
              </div>

              <div className="flex gap-4 justify-center items-center py-3 px-6 bg-slate-900/50 rounded-full w-fit mx-auto border border-slate-700/30">
                <img
                  src={ReactJS}
                  alt="React"
                  className="w-9 h-9 object-cover hover:scale-110 transition-transform duration-200"
                />
                <img
                  src={TailwindCSS}
                  alt="Tailwind"
                  className="w-9 h-9 object-cover hover:scale-110 transition-transform duration-200"
                />
                <img
                  src={NodeJS}
                  alt="Node"
                  className="w-9 h-9 object-cover hover:scale-110 transition-transform duration-200"
                />
                <img
                  src={MongoDB}
                  alt="MongoDB"
                  className="w-9 h-9 object-cover hover:scale-110 transition-transform duration-200"
                />
              </div>

              <p className="text-gray-200 text-base leading-relaxed font-semibold text-center px-4 tracking-wide">
                Myntra is an Indian e-commerce website that offers a wide range
                of fashion products, including clothing, footwear, accessories,
                and lifestyle items. The website is known for its user-friendly
                interface, extensive product selection, and secure payment
                options.
              </p>
              <div className="flex justify-center gap-2">
                <Button
                  name="View Project"
                  link="https://prismatic-gingersnap-2bdf3f.netlify.app/"
                />
                <button className="group px-4 sm:px-10 mr-2 md:px-12 py-4 sm:py-4.5 bg-transparent border-2 border-purple-500 hover:bg-purple-500/10 text-purple-400 hover:text-purple-300 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 hover:border-purple-400">
                  <span className="flex items-center justify-center gap-2">
                    <CornerDownRight className="w-5 h-5" />
                    Explore More
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="h-auto bg-cover bg-center bg-no-repeat bg-fixed relative pb-14  overflow-hidden text-white ">
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Form Container */}
        <div className="bg-[#020718] relative z-10 w-full max-w-full px-4 ">
          <div className="text-center mb-16  animate-fadeIn">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
              <span className="text-gray-400 text-sm sm:text-base font-medium uppercase tracking-wider">
                24/7 Reachable
              </span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Contact Me
              </span>
            </h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-900/50 border-slate-700/30 backdrop-blur-md rounded-lg px-2 py-8 shadow-2xl border hover:border-slate-600 transition-all duration-300 ease-in-out relative"
          >
            {/* linier effect */}
            <div className="absolute top-1/2 left-1/4 bg-linear-to-l from-purple-500/30 to-cyan-400/30 h-64 w-44 blur-2xl animate-pulse"></div>
            <div className="absolute top-20 left-1/5 bg-linear-to-l from-purple-500/50 to-cyan-400/50 h-64 w-44 blur-2xl animate-pulse"></div>

            <form className="order-2 sm:order-1 max-w-md w-full mx-auto h-full bg-slate-900/50 border-slate-700/30 backdrop-blur-md rounded-lg p-8 shadow-2xl border hover:border-slate-600 transition-all duration-300 ease-in-out">
              <h2 className="text-3xl font-bold text-center mb-8 bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>

              <div className="space-y-6">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold tracking-wide"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="bg-slate-700/30 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none 
        focus:border-0
        focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ease-in-out"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold tracking-wide"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="bg-slate-700/30 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message..."
                    rows="4"
                    className="bg-slate-700/30 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-white text-gray-900 font-bold py-3 rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* second col */}
            <div className="order-1 sm:order-2 flex items-center justify-center h-full">
              <Lottie
                animationData={animationLottie}
                loop={true}
                style={{ width: "100%", height: "100%", maxHeight: "600px" }}
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* footer */}
      <section
        style={{ backgroundImage: `url(${Tea})` }}
        className="min-h-screen max-w-full w-full bg-fixed bg-no-repeat bg-center bg-cover"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.85 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="flex items-center justify-center h-full py-20"
        >
          <Button name={"Hire Me"} />
        </motion.div>
        <div className="flex items-center justify-center pt-20">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default HomePage;
