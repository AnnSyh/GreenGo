import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const particlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("particlesInit = ", engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  // const stats = new Stats();
  // stats.setMode(0);
  // stats.domElement.style.position = "absolute";
  // stats.domElement.style.left = "0px";
  // stats.domElement.style.top = "0px";

  // document.body.appendChild(stats.domElement);
  // count_particles = document.querySelector(".js-count-particles");
  // update = function () {
  //   stats.begin();
  //   stats.end();
  //   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
  //     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  //   }
  //   requestAnimationFrame(update);
  // };
  // requestAnimationFrame(update);

  return (
    <>
      <Particles
        sx={{ position: "absolute", border: "1px solid blue" }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: "#fff",
          // },
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 20,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#00b398",
            },
            links: {
              color: "#00b398",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              speed: 3,
              directions: "none",
              random: false,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              value: 80,
              limit: 0,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
        }}
      />
    </>
  );
};

export default particlesBackground;
