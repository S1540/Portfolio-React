import React from "react";
import { Github, Linkedin, Mail, Twitter, ArrowDown } from "lucide-react";
import { LampContainer } from "./ui/lamp";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const HomePage = () => {
  const words = [
    { text: "Hi I'm\u00A0", className: "text-white" },
    { text: "Shubham Singh\u00A0", className: "text-blue-400" },
    { text: "Frontend Developer", className: "text-purple-400" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/shubhamsingh",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/shubhamsingh",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/shubhamsingh",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      icon: Mail,
      href: "mailto:shubham@example.com",
      label: "Email",
      color: "hover:text-purple-400",
    },
  ];

  const scrollToProjects = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#020718]">
      <section className="relative h-screen overflow-x-hidden">
        {/* Lamp Background Effect - positioned at top */}
        <div className="absolute top-0 left-0 right-0 -translate-y-48 sm:-translate-y-28 ">
          <LampContainer />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-20 md:pt-24">
          {/* Profile Image - directly under lamp light */}
          <div className="mb-8 sm:mb-10 md:mb-12 animate-fadeIn">
            <div className="relative w-52 h-52 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-[3px] border-cyan-400/40 shadow-2xl shadow-cyan-500/30 hover:scale-105 hover:border-cyan-400/60 transition-all duration-500">
              <img
                src="https://shubham-singh-007.netlify.app/assets/image%20S3.jpg"
                alt="Shubham Singh"
                className="w-full h-full object-cover bg-slate-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
            </div>
          </div>

          {/* Typewriter Text - Centered */}
          <div className="mb-6 sm:mb-7 md:mb-8 w-full max-w-7xl">
            <TypewriterEffectSmooth
              words={words}
              className="text-3xl md:text-4xl lg:text-5xl text-center flex justify-center items-center"
              cursorClassName="bg-white w-0.5 sm:w-1 h-6 sm:h-8 md:h-9 rounded ml-1"
            />
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg text-center max-w-2xl px-4 mb-7 sm:mb-8 md:mb-10 animate-fadeIn delay-100 leading-relaxed">
            Building beautiful, responsive, and user-friendly web experiences
            with modern technologies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 mb-8 sm:mb-10 animate-fadeIn delay-200">
            <button className="px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium rounded-lg shadow-lg hover:shadow-blue-600/50 transition-all duration-300 transform hover:scale-105">
              View Work
            </button>
            <button className="px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-purple-500 hover:bg-purple-500/10 text-purple-400 text-sm sm:text-base font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mb-16 sm:mb-20 animate-fadeIn delay-300">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-3 sm:p-3.5 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-current/40 hover:border-slate-600`}
              >
                <social.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToProjects}
            className="absolute bottom-8 sm:bottom-10 animate-bounce cursor-pointer group"
            aria-label="Scroll to projects"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-gray-500 text-xs hidden sm:block group-hover:text-gray-400 transition-colors">
                Scroll down
              </span>
              <ArrowDown className="w-5 h-5 text-gray-500 group-hover:text-gray-400 transition-colors" />
            </div>
          </button>

          {/* Long Lorem Text */}
          <h1 className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur ex blanditiis consequatur hic autem sapiente voluptatem
            quos cum veritatis ipsa? Quia saepe aliquam eius animi eveniet
            aliquid repudiandae. Aspernatur molestiae quaerat reprehenderit
            repellendus dolores magni magnam laborum facilis doloribus quia in
            aliquam ad exercitationem voluptates, sapiente velit veritatis ipsum
            dicta quasi. Sapiente voluptas debitis saepe laborum, similique
            nobis architecto explicabo. Repellendus officiis ab obcaecati
            asperiores sunt autem tempora id dolores dolorem eius repellat
            assumenda enim unde ea fuga, dolore modi sequi saepe hic itaque vero
            magni aspernatur rem vel! Consectetur et excepturi reiciendis
            consequuntur nihil voluptates eaque deleniti officia, aut vero,
            asperiores aliquid nobis velit iure laudantium molestiae itaque
            illum veritatis! Accusantium harum magnam sit quia in mollitia
            pariatur eius dicta rem eligendi quam consequuntur nisi deleniti,
            suscipit libero porro tempore quisquam blanditiis recusandae
            obcaecati sed! Nisi reiciendis assumenda placeat. Recusandae,
            perspiciatis, magnam dicta enim assumenda quis, facere a sunt modi
            cumque ex! Expedita natus quibusdam nobis error ullam vitae quam.
            Aliquid sequi animi ducimus fugit magnam incidunt, nulla laborum sit
            saepe. Libero incidunt architecto tempore nulla quasi eveniet!
            Distinctio repellendus, facere cumque ipsam aliquid est hic impedit
            error natus tenetur totam dolores deserunt sint quae qui ratione quo
            suscipit, dicta blanditiis voluptatibus animi reiciendis expedita.
            Cumque quisquam, distinctio placeat rerum incidunt nostrum itaque
            aut commodi debitis, culpa eaque similique laboriosam repellat
            soluta inventore consequuntur. Nemo architecto, fugiat deleniti odit
            voluptas fugit animi distinctio corporis amet expedita pariatur
            quasi doloribus alias. Quidem error suscipit quaerat soluta sunt
            dolorum ullam veritatis? Ad aspernatur suscipit optio veniam
            similique rem quidem, obcaecati nam necessitatibus quia impedit
            tempore repudiandae a iure perferendis minima ipsa accusantium!
            Aspernatur voluptas modi deleniti ex quibusdam perspiciatis amet
            similique quia, explicabo facere temporibus ipsa praesentium nihil,
            natus veritatis impedit inventore consequatur possimus distinctio
            nobis accusantium necessitatibus consectetur at. Ab quibusdam
            officia harum earum, cum cumque soluta amet, nihil atque aspernatur
            nulla! Laboriosam, omnis ea nisi iste doloremque, atque id
            reiciendis sed earum aperiam quibusdam nostrum neque accusamus
            consequuntur praesentium dignissimos cupiditate ad voluptate quidem
            similique ab tempora expedita. Doloribus distinctio provident natus
            sit consequuntur soluta nostrum, quae sapiente tenetur quasi quaerat
            a hic facere eveniet sed fugiat incidunt libero qui, odit quisquam?
            Hic aut aspernatur cumque perferendis quia quo vero nulla quae rem
            optio possimus quod odit quam, voluptates necessitatibus esse.
            Molestiae blanditiis illo sequi tempore ut sit animi dolor, vitae
            ducimus ipsum fugiat quaerat laudantium cum ullam odio similique
            eaque quis minima nobis? Minus quibusdam soluta neque error sit, eum
            odit mollitia aut minima aliquam nulla repellendus sapiente,
            doloribus eligendi atque rem molestiae quod expedita magni
            temporibus nesciunt consequuntur unde? Voluptate eveniet animi
            assumenda aliquam, molestias enim delectus eaque error quis
            inventore id dignissimos, minus distinctio! Minima eos ea eveniet
            amet dicta unde fugit soluta fugiat, officia laborum eius dolore
            provident nulla quas tenetur debitis deleniti accusantium? Maiores
            eaque ipsum sit sequi et dolor perferendis eum pariatur saepe velit
            atque, obcaecati necessitatibus nulla deleniti, consectetur enim
            amet dolorem corporis repellat laudantium vero! Illum ab architecto
            fugiat repellat laboriosam?
          </h1>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default HomePage;
