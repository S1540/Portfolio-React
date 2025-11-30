import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Twitter, Briefcase, Eye } from "lucide-react";
import SimpleBubbles from "./SimpleBubbles";

const TypewriterEffect = ({ words, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className={className}>
      <span className="text-purple-400">{currentText}</span>
      <span className="animate-pulse text-white">|</span>
    </div>
  );
};

const LandingPage = () => {
  const roles = [
    "Frontend Developer",
    "MERN Stack Developer",
    "UI/UX Designer",
    "AI Integration Specialist",
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/shubhamsingh",
      label: "GitHub",
      color: "hover:text-white hover:bg-white/10",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/shubham-0q7/",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:bg-blue-500/10",
    },
    {
      icon: Twitter,
      href: "https://wa.me/917050043530?text=Hii%20Shubham%20Singh,%20I%20found%20your%20profile%20on%20your%20platform%20Shubham.dev",
      label: "Twitter",
      color: "hover:text-sky-400 hover:bg-sky-500/10",
    },
    {
      icon: Mail,
      href: "mailto:shubham@example.com",
      label: "Email",
      color: "hover:text-purple-400 hover:bg-purple-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020718] relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 blur-sm" style={{ zIndex: 1 }}>
        <SimpleBubbles />
      </div>

      {/* linear Overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 3 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Elements - Left Side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-8 pl-8">
          <div className="w-1 h-16 bg-linear-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>
          <div className="w-1 h-24 bg-linear-to-b from-transparent via-purple-500 to-transparent opacity-50"></div>
          <div className="w-1 h-20 bg-linear-to-b from-transparent via-cyan-500 to-transparent opacity-50"></div>
        </div>
      </div>

      {/* Decorative Elements - Right Side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-8 pr-8">
          <div className="w-1 h-20 bg-linear-to-b from-transparent via-cyan-500 to-transparent opacity-50"></div>
          <div className="w-1 h-24 bg-linear-to-b from-transparent via-purple-500 to-transparent opacity-50"></div>
          <div className="w-1 h-16 bg-linear-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>
        </div>
      </div>

      {/* Floating Text - Left */}
      <div className="absolute left-8 xl:left-16 top-1/3 z-10 hidden xl:block">
        <div
          className="flex flex-col gap-6 text-gray-500/30 text-sm font-mono rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="hover:text-blue-400/50 transition-colors cursor-cell">
            CREATIVE
          </span>
          <span className="hover:text-purple-400/50 transition-colors cursor-cell">
            INNOVATIVE
          </span>
          <span className="hover:text-cyan-400/50 transition-colors cursor-cell">
            MODERN
          </span>
        </div>
      </div>

      {/* Floating Text - Right */}
      <div className="absolute right-8 xl:right-16 top-1/3 z-10 hidden xl:block">
        <div
          className="flex flex-col gap-6 text-gray-500/30 text-sm font-mono rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="hover:text-cyan-400/50 transition-colors cursor-cell">
            DEVELOPER
          </span>
          <span className="hover:text-purple-400/50 transition-colors cursor-cell">
            DESIGNER
          </span>
          <span className="hover:text-blue-400/50 transition-colors cursor-cell">
            ENGINEER
          </span>
        </div>
      </div>

      {/* Decorative Dots - Left */}
      <div className="absolute left-12 bottom-1/4 z-10 hidden lg:flex flex-col gap-3">
        <div className="w-2 h-2 rounded-full bg-blue-500/30"></div>
        <div className="w-2 h-2 rounded-full bg-purple-500/30"></div>
        <div className="w-2 h-2 rounded-full bg-cyan-500/30"></div>
      </div>

      {/* Decorative Dots - Right */}
      <div className="absolute right-12 bottom-1/4 z-10 hidden lg:flex flex-col gap-3">
        <div className="w-2 h-2 rounded-full bg-cyan-500/30"></div>
        <div className="w-2 h-2 rounded-full bg-purple-500/30"></div>
        <div className="w-2 h-2 rounded-full bg-blue-500/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18 md:py-22">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="mb-8 sm:mb-10 animate-fadeIn">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 animate-pulse transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 group-hover:scale-105 group-hover:border-cyan-400/70 transition-all duration-500">
                <img
                  src="https://shubham-singh-007.netlify.app/assets/image%20S3.jpg"
                  alt="Shubham Singh"
                  className="w-full h-full object-cover bg-slate-800"
                />
                <div className="absolute inset-0 bg-linear-to-t from-cyan-500/20 to-transparent"></div>
              </div>

              {/* Decorative Rings */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 scale-110 animate-ping-slow"></div>
                <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 scale-125 animate-ping-slower"></div>
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fadeIn delay-100">
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Mr. Shubham Singh
            </span>
          </h1>

          {/* Typewriter Role */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 min-h-12 sm:min-h-16 animate-fadeIn delay-200">
            <TypewriterEffect
              words={roles}
              className="inline-flex items-center gap-1"
            />
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-10 sm:mb-12 animate-fadeIn delay-300 leading-relaxed px-4">
            Transforming ideas into elegant digital solutions with cutting-edge
            technology and creative innovation
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-14 animate-fadeIn delay-400 w-full sm:w-auto px-4 sm:px-0">
            <button className="group relative px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-base sm:text-lg font-semibold rounded-xl shadow-lg shadow-blue-600/40 hover:shadow-blue-600/60 transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Eye className="w-5 h-5" />
                Explore Work
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 bg-transparent border-2 border-purple-500 hover:bg-purple-500/10 text-purple-400 hover:text-purple-300 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 hover:border-purple-400">
              <span className="flex items-center justify-center gap-2">
                <Briefcase className="w-5 h-5" />
                Hire Me
              </span>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-5 animate-fadeIn delay-500">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`group relative p-4 sm:p-4.5 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-current/20 hover:border-slate-600 hover:-translate-y-1`}
              >
                <social.icon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-6 transition-transform duration-300" />

                {/* Tooltip */}
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-700 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                  {social.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-800 border-r border-b border-slate-700"></span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes ping-slow {
          0% { 
            transform: scale(1); 
            opacity: 0.5; 
          }
          50% { 
            transform: scale(1.1); 
            opacity: 0.3; 
          }
          100% { 
            transform: scale(1.2); 
            opacity: 0; 
          }
        }
        
        @keyframes ping-slower {
          0% { 
            transform: scale(1); 
            opacity: 0.5; 
          }
          50% { 
            transform: scale(1.15); 
            opacity: 0.3; 
          }
          100% { 
            transform: scale(1.3); 
            opacity: 0; 
          }
        }
        
        .animate-fadeIn { 
          animation: fadeIn 1s ease-out forwards; 
          opacity: 0;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-ping-slower {
          animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
};

export default LandingPage;
