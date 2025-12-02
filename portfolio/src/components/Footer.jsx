import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden max-w-full w-full">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h4 className="text-3xl font-bold mb-6 font-[Merienda]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500">
                About This Site
              </span>
            </h4>
            <p className="font-[Inter] text-slate-400 leading-relaxed text-sm">
              MERN Stack Developer passionate about frontend — clean UI,
              responsive layouts, and smooth functionality. I build intuitive
              experiences with code that speaks design. Learning every day,
              growing with every project, and striving to turn ideas into
              engaging digital realities.
            </p>

            {/* Social Icons - Mobile */}
            <div className="flex gap-4 mt-6 lg:hidden">
              <a
                href="https://www.linkedin.com/in/shubham-0q7/"
                target="_blank"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <i className="fa-brands fa-linkedin relative text-cyan-400 w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/S1540"
                target="_blank"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <i className="fa-brands fa-github relative text-slate-300 w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://wa.me/917050043530"
                target="_blank"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <i className="fa-brands fa-whatsapp relative text-green-400 w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#twitter" target="_blank" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <i className="fa-brands fa-twitter relative text-cyan-400 w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.facebook.com/Sankii70"
                target="_blank"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <i className="fa-brands fa-facebook relative text-blue-400 w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Portfolio Section */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></span>
              Portfolio
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Services", href: "#services" },
                { name: "Certifications", href: "#certifications" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-orange-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Me", href: "#about" },
                { name: "Resume", href: "/resume.pdf" },
                { name: "Blogs", href: "#blogs" },
                {
                  name: "GitHub",
                  href: "https://github.com/S1540",
                  external: true,
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com/in/shubham-0q7/",
                  external: true,
                },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-slate-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-500 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-slate-500 text-sm order-2 lg:order-1">
            © 2025{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold">
              Shubham Singh
            </span>
            . All rights reserved.
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex gap-4 order-1 lg:order-2">
            <a
              href="https://www.linkedin.com/in/shubham-0q7/"
              target="_blank"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <i className="fa-brands fa-linkedin relative text-cyan-400 w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/S1540"
              target="_blank"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <i className="fa-brands fa-github relative text-slate-300 w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://wa.me/917050043530"
              target="_blank"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <i className="fa-brands fa-whatsapp relative text-green-400 w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="#twitter" target="_blank" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <i className="fa-brands fa-twitter relative text-cyan-400 w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://www.facebook.com/Sankii70"
              target="_blank"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <i className="fa-brands fa-facebook relative text-blue-400 w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
