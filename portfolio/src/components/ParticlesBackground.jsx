import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("🚀 Starting particle initialization...");

    initParticlesEngine(async (engine) => {
      try {
        console.log("📦 Loading slim package...");
        await loadSlim(engine);
        console.log("✅ Slim loaded");

        console.log("📦 Loading emitters plugin...");
        await loadEmittersPlugin(engine);
        console.log("✅ Emitters loaded");
      } catch (err) {
        console.error("❌ Error loading plugins:", err);
        setError(err.message);
        throw err;
      }
    })
      .then(() => {
        console.log("✅ Particles engine ready!");
        setInit(true);
      })
      .catch((err) => {
        console.error("❌ Initialization failed:", err);
        setError(err.message);
      });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: false,
      },
      detectRetina: true,
      fpsLimit: 60,
      particles: {
        color: {
          value: [
            "#3b82f6",
            "#8b5cf6",
            "#06b6d4",
            "#ec4899",
            "#10b981",
            "#f59e0b",
          ],
        },
        move: {
          direction: "top",
          enable: true,
          outModes: {
            default: "destroy",
            bottom: "none",
            top: "destroy",
            left: "destroy",
            right: "destroy",
          },
          speed: 3,
          straight: false,
          random: true,
        },
        number: {
          value: 0,
          density: {
            enable: false,
          },
        },
        opacity: {
          value: { min: 0.4, max: 0.9 },
          animation: {
            enable: true,
            speed: 1,
            startValue: "max",
            destroy: "min",
          },
        },
        size: {
          value: { min: 2, max: 8 },
          animation: {
            enable: true,
            speed: 4,
            startValue: "min",
            destroy: "max",
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
      },
      emitters: [
        {
          autoPlay: true,
          fill: true,
          life: {
            wait: false,
          },
          rate: {
            quantity: 2,
            delay: 0.15,
          },
          shape: {
            type: "square",
          },
          startCount: 0,
          size: {
            mode: "percent",
            height: 0,
            width: 20,
          },
          position: {
            x: 10,
            y: 100,
          },
          direction: "top",
        },
        {
          autoPlay: true,
          fill: true,
          life: {
            wait: false,
          },
          rate: {
            quantity: 3,
            delay: 0.12,
          },
          shape: {
            type: "square",
          },
          startCount: 0,
          size: {
            mode: "percent",
            height: 0,
            width: 20,
          },
          position: {
            x: 30,
            y: 100,
          },
          direction: "top",
        },
        {
          autoPlay: true,
          fill: true,
          life: {
            wait: false,
          },
          rate: {
            quantity: 3,
            delay: 0.1,
          },
          shape: {
            type: "square",
          },
          startCount: 0,
          size: {
            mode: "percent",
            height: 0,
            width: 20,
          },
          position: {
            x: 50,
            y: 100,
          },
          direction: "top",
        },
        {
          autoPlay: true,
          fill: true,
          life: {
            wait: false,
          },
          rate: {
            quantity: 3,
            delay: 0.12,
          },
          shape: {
            type: "square",
          },
          startCount: 0,
          size: {
            mode: "percent",
            height: 0,
            width: 20,
          },
          position: {
            x: 70,
            y: 100,
          },
          direction: "top",
        },
        {
          autoPlay: true,
          fill: true,
          life: {
            wait: false,
          },
          rate: {
            quantity: 2,
            delay: 0.15,
          },
          shape: {
            type: "square",
          },
          startCount: 0,
          size: {
            mode: "percent",
            height: 0,
            width: 20,
          },
          position: {
            x: 90,
            y: 100,
          },
          direction: "top",
        },
      ],
    }),
    []
  );

  console.log("Current state - Init:", init, "Error:", error);

  if (error) {
    return (
      <div className="absolute top-4 left-4 bg-red-500 text-white p-4 rounded z-50">
        <p className="font-bold">Particles Error:</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  if (!init) {
    return (
      <div className="absolute top-4 left-4 bg-blue-500 text-white p-2 rounded text-sm z-50">
        Loading particles...
      </div>
    );
  }

  console.log("🎉 Rendering Particles component!");

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Particles
        id="tsparticles"
        options={options}
        className="w-full h-full"
        particlesLoaded={(container) => {
          console.log("✨ Particles loaded successfully!", container);
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
