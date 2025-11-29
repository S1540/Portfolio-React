import React from "react";
import { Code, Layers, Sparkles, Zap, Target, TrendingUp } from "lucide-react";
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
import ServiceCard from "../Cards/ServiceCard";
import { ProjectUI } from "../Cards/ProjectUI";

const HomePage = () => {
  return (
    <>
      <LandingPage />
      <section className="h-auto bg-[#020718] relative py-14 overflow-hidden">
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
            linear-linear(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-linear(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            maskImage:
              "radial-linear(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-linear(ellipse at center, black 40%, transparent 80%)",
          }}
        ></div>

        {/* linear Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/5 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* About Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16 sm:mb-20 animate-fadeIn">
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
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 px-6 sm:px-8 py-8 sm:py-10 rounded-lg hover:bg-slate-800/60">
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
            </div>

            {/* Right Column */}
            <div className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 px-6 sm:px-8 py-8 sm:py-10 rounded-lg hover:bg-slate-800/60">
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
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 sm:mt-16 ">
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
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
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
          <div className="max-w-7xl w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 sm:px-6 lg:px-8 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-8 rounded-lg hover:bg-slate-800/60">
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
              <SkillGauge
                key={index}
                skillName={skill.skillName}
                skillIcon={skill.skillIcon}
                skillValue={skill.skillValue}
                skillColor={skill.skillColor}
              />
            ))}
          </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto gap-4">
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
              <ServiceCard
                key={index}
                image={service.image}
                heading={service.heading}
                discription={service.discription}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Project ShowCase */}
      <section className="min-h-screen bg-[#020718] relative py-14 overflow-hidden text-white">
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
        <div className="max-w-7xl w-full mx-auto bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-8 rounded-lg hover:bg-slate-800/60 ">
          <ProjectUI />
        </div>
      </section>
    </>
  );
};

export default HomePage;
