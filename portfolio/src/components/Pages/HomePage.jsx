import React from "react";
import LandingPage from "../LandingPage";

const HomePage = () => {
  return (
    <>
      <LandingPage />
      <section className="min-h-screen bg-[#090A21] relative py-20">
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
      `,
            backgroundSize: "50px 50px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        ></div>

        {/* About Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-gray-200">
          <h2 className="text-4xl font-bold text-gray-200 mb-8 tracking-wider uppercase main-heading px-2">
            About Me
          </h2>
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="border border-gray-900 bg-indigo-500/10 px-2 py-2 rounded-md">
              <p className="text-heading text-2xl mb-6">
                I'M a MERN Stack Developer
              </p>
              <p className="text-zinc-300 px-2">
                I’m a Modern MERN Stack Developer with a growing focus on
                AI-powered development. I build fast, intuitive, and visually
                polished digital experiences that balance clean design with
                solid engineering. My approach combines modern web technologies,
                attention to detail, and a passion for solving real-world
                problems through code.
              </p>
              <h3 className="text-heading text-2xl py-4">
                My Development Style
              </h3>
              <ul className="list-disc list-inside pb-4 text-zinc-300">
                <li>Pixel-perfect UI + Responsive Design</li>
                <li>Clean folder structure & scalable code</li>
                <li>Performance-first mindset</li>
                <li>User-centric design decisions</li>
                <li>Passion for building meaningful digital products</li>
              </ul>
            </div>
            {/* Right Column */}
            <div className="border border-gray-900 bg-indigo-500/10 px-2 py-2 rounded-md">
              <h3 className="text-heading text-2xl py-4">What I Do</h3>
              <ul className="list-disc list-inside pb-4 text-zinc-300  ">
                <li>
                  Modern Frontend Development using React, Tailwind CSS, HTML,
                  CSS & JavaScript.
                </li>
                <li>
                  Backend Foundations with Node.js, Express & MongoDB to create
                  functional full-stack applications.
                </li>
                <li>
                  AI-Enhanced Development exploring AI tools, automation &
                  intelligent features to power smarter apps
                </li>
                <li>
                  Responsive & Clean UI Design optimized for performance,
                  accessibility & user experience.
                </li>
                <li>
                  Reusable, Maintainable Code following modular, scalable
                  architecture for long-term growth.
                </li>
                <li>
                  Continuous Improvement always learning, experimenting &
                  pushing myself with new technologies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
