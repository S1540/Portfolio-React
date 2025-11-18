import React from "react";
import Particles from "./Particles";
import background from "../assets/bg5.jpg";

const HomePage = () => {
  return (
    <>
      {" "}
      <section
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
          }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={700}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="z-50 ">
          <h1 className="text-gray-200">
            Hi, I'm <b>Yash</b>
          </h1>
        </div>
      </section>
    </>
  );
};

export default HomePage;
