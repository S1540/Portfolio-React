"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import Myntra from "../../assets/projectThumbnail/myntra.png";
import Myntra2 from "../../assets/projectThumbnail/myntra2.png";
import ScenicWeb from "../../assets/projectThumbnail/scenicWeb.png";
import ScenicWeb2 from "../../assets/projectThumbnail/scenicWeb2.png";
import Calculetor from "../../assets/projectThumbnail/calculetor.png";
import KeyStrike from "../../assets/projectThumbnail/KeyStrike.png";
import ShopiVibe from "../../assets/projectThumbnail/ShopiVibe.png";

export function ProjectUI() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Myntra",
    link: "https://cool-lamingto-edc51b.netlify.app/",
    thumbnail: Myntra,
  },
  {
    title: "Myntra ",
    link: "https://cool-lamingto-edc51b.netlify.app/",
    thumbnail: Myntra2,
  },
  {
    title: "Scenic Web",
    link: "https://prismatic-gingersnap-2bdf3f.netlify.app",
    thumbnail: ScenicWeb,
  },

  {
    title: "Scenic Web ",
    link: "https://prismatic-gingersnap-2bdf3f.netlify.app",
    thumbnail: ScenicWeb2,
  },
  {
    title: "Calculator App",
    link: "https://calculetor-index-002.netlify.app",
    thumbnail: Calculetor,
  },
  {
    title: "Key Strike",
    link: "https://typing-speed-shubhamsingh0007.netlify.app",
    thumbnail: KeyStrike,
  },

  {
    title: "ShopiVibe",
    link: "#",
    thumbnail: ShopiVibe,
  },
  {
    title: "Calculator App",
    link: "https://calculetor-index-002.netlify.app",
    thumbnail: Calculetor,
  },
  {
    title: "Key Strike",
    link: "https://typing-speed-shubhamsingh0007.netlify.app",
    thumbnail: KeyStrike,
  },
  // {
  //   title: "Aceternity UI",
  //   link: "https://ui.aceternity.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  // },
  // {
  //   title: "Tailwind Master Kit",
  //   link: "https://tailwindmasterkit.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  // },
  // {
  //   title: "SmartBridge",
  //   link: "https://smartbridgetech.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  // },
  // {
  //   title: "Renderwork Studio",
  //   link: "https://renderwork.studio",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  // },

  // {
  //   title: "Creme Digital",
  //   link: "https://cremedigital.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  // },
  // {
  //   title: "Golden Bells Academy",
  //   link: "https://goldenbellsacademy.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  // },
  // {
  //   title: "Invoker Labs",
  //   link: "https://invoker.lol",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  // },
  // {
  //   title: "E Free Invoice",
  //   link: "https://efreeinvoice.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  // },
];
