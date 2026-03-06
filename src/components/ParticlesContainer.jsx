import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 90,
          density: { enable: true, area: 800 },
        },
        color: { value: "#00ff0a" },
        shape: {
          type: "polygon",
          stroke: { width: 0, color: "#000000" },
          polygon: { sides: 5 },
        },
        opacity: {
          value: 0.4,
          random: true,
        },
        size: {
          value: 1.5,
          random: true,
        },
        links: { 
          enable: true,
          distance: 150,
          color: "#13bd1a",
          opacity: 0.6,
          width: 2,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          outModes: {
            default: "bounce",
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 200,
            size: 3,
            duration: 2,
            opacity: 0.4,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
  <div
    style={{
      position: "absolute",
      width: "100%",
      height: "10vh",
      overflow: "hidden",
      left: 0,
      top: 0,
    }}
  >
    {init && (
      <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
    )}
  </div>
);
};

export default ParticlesContainer;
