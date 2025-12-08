import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Eye, Contact, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ReactJS from "../../assets/React.png";
import NodeJS from "../../assets/NodeJS.png";
import TailwindCSS from "../../assets/Tailwind.png";
import ExpressJS from "../../assets/Express.png";
import MongoDB from "../../assets/MongoDB.png";
import ProjectLayout from "../Cards/ProjectLayout";
import MyntraFullPage from "../../assets/ProjectThumbnail/MyntraFullPage.png";
import ScienFullPage from "../../assets/ProjectThumbnail/SceincFullPage.png";

export default function ProjectPage() {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Modern Architecture",
      subtitle: "Innovative Design Solutions",
    },
    {
      image:
        "https://images.unsplash.com/photo-1613141410593-a6c570b20ed3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sustainable Living",
      subtitle: "Eco-Friendly Spaces",
    },
    {
      image:
        "https://images.unsplash.com/photo-1564798605859-a4ab4a561b2a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Luxury Interiors",
      subtitle: "Premium Quality Projects",
    },
  ];

  const projectDetails = [
    {
      name: "Myntra",
      image: MyntraFullPage,
      link: "https://myntra-clone-website.netlify.app/",
      tools: [ReactJS, TailwindCSS],
      description:
        " This project is a fully responsive clone of the Myntra shoppingplatform built using modern frontend technologies. It includes product listings, category filtering, and a clean UI inspired by the original website. The design focuses on a smooth user experience with optimized layouts for both mobile and desktop. I implemented reusable components, responsive grids, and interactive elements to make the interface feel dynamic. This project helped me strengthen my skills in React, Tailwind CSS, and component-based architecture. ",
    },
    {
      name: "scienc web",
      image: ScienFullPage,
      link: "https://scienc-website.netlify.app/",
      tools: [ReactJS, TailwindCSS],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nesciunt dolorem debitis ea quae et esse velit aspernatur, sunt ducimus quasi possimus perferendis eos hic ipsa dolore error illo laborum!",
    },
  ];

  return (
    <>
      <section className="bg-[#020718] min-h-screen">
        <div className="w-full max-w-full mx-auto py-4 md:py-8 relative ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              enabled: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-96 sm:h-[450px] md:h-[500px] lg:h-[600px] shadow-2xl rounded-lg overflow-hidden"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index} className="w-full h-full relative">
                <img
                  src={item.image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-10"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-6 sm:px-8 md:px-12">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 text-center drop-shadow-2xl leading-tight">
                    {item.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 md:mb-10 text-center drop-shadow-lg font-light">
                    {item.subtitle}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 w-full max-w-lg">
                    <button className="group relative px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-base sm:text-lg font-semibold rounded-xl shadow-lg shadow-blue-600/40 hover:shadow-blue-600/60 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Eye className="w-5 h-5" />
                        View Project
                      </span>
                      <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button className="group px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 bg-transparent border-2 border-purple-500 hover:bg-purple-500/10 text-purple-400 hover:text-purple-300 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 hover:border-purple-400">
                      <span className="flex items-center justify-center gap-2">
                        <Contact className="w-5 h-5" />
                        Contact Us
                      </span>
                    </button>
                  </div>
                </div>

                {/* Custom Navigation Arrows */}
                <button
                  onClick={() =>
                    document.querySelector(".swiper-button-prev")?.click()
                  }
                  className="absolute left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    document.querySelector(".swiper-button-next")?.click()
                  }
                  className="absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Custom Pagination Dots */}
                <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-2.5 md:gap-3">
                  {images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`transition-all duration-300 rounded-full ${
                        idx === index
                          ? "w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3 bg-white"
                          : "w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white/50 hover:bg-white/70"
                      }`}
                    ></div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Project Content */}
        <div>
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
                Find All Project Details
              </span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </motion.div>

          {/* Project Cards */}
          <div className="max-w-7xl w-full mx-auto flex flex-col gap-10 items-center bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 py-8  rounded-lg hover:bg-slate-800/60 transition-all duration-300">
            {projectDetails.map((item, index) => (
              <ProjectLayout
                key={index}
                image={item.image}
                name={item.name}
                link={item.link}
                description={item.description}
                tools={item.tools}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
