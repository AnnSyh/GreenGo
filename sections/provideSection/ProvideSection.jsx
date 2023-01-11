import { Box, Button, Grid, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "next-i18next";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import imgUrl from "../../public/images/icons/icon-clock.svg";
// import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Image } from "@mui/material";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ProvideSection = ({}) => {
  const { t } = useTranslation("common");

  //   const count_particles, stats, update;
  // stats = new Stats;
  // stats.setMode(0);
  // stats.domElement.style.position = 'absolute';
  // stats.domElement.style.left = '0px';
  // stats.domElement.style.top = '0px';

  const items = [
    {
      image: `url('/images/provide/img-1.jpg')`,
      desc: `Определение занятости парковочного места у зарядной станции`,
    },
    {
      image: `url('/images/provide/img-2.jpg')`,
      desc: `Определение правомерности занятости парковочного места по типу размещенного ТС`,
    },
    {
      image: `url('/images/provide/img-3.jpg')`,
      desc: `Уведомление уполномоченного органа о правонарушении с отправкой фотоданных (опционально)`,
    },
    {
      image: `url('/images/provide/img-4.jpg')`,
      desc: `Интеллектуальное планирование маршрута, стоимости и бронирования станции исходя из дорожной обстановки из мобильного приложения`,
    },
    {
      image: `url('/images/provide/img-5.jpg')`,
      desc: `Автоматическая детекция пользователя и старта сессии при подключении к ЭЗС - «подключился и ушел» (через считывание госномера или персональное мобильный гаджет)`,
    },
    {
      image: `url('/images/provide/img-6.jpg')`,
      desc: `Автоматическое уведомление при освобождении зарядной станции для планирования старта сессии`,
    },
  ];

  const particlesInit = useCallback(async (engine) => {
    console.log("particlesInit = ", engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <section id="provide-section" className="section">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      ></link>
      <Box
        sx={(theme) => ({
          backgroundColor: "#fff",
          position: "relative",
          paddingTop: "100px",
          // border: "1px solid red",
          overflow: "hidden",
        })}
      >
        <Particles
          sx={{ position: "absolute", border: "1px solid blue" }}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
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
                  area: 800,
                },
                value: 80,
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
        <Box className="container-box">
          <Typography
            variant="h1"
            sx={{ textAlign: "center", width: "100%", marginBottom: "60px" }}
            fontSize={{ xs: "35px", md: "52px" }}
          >
            Предоставляем
          </Typography>

          <Grid container>
            {items.map((item, i) => (
              <Grid
                item
                className="card card-provide"
                key={i}
                sx={(theme) => ({
                  borderRadius: theme.radius.default,
                  // borderColor: "transporent",
                })}
              >
                <Box className="wrap">
                  <Box className="card">
                    <Box className="front">
                      <CheckCircleOutlineIcon />
                      <span className="material-symbols-rounded">
                        touch_app
                      </span>

                      <Typography
                        variant="body"
                        gutterBottom
                        textAlign="center"
                        fontSize={{ xs: "12px", md: "13px" }}
                        sx={() => ({
                          marginTop: "20px",
                          padding: "0 13px 30px",
                          color: "black",
                        })}
                      >
                        {t(item.desc)}
                      </Typography>
                    </Box>

                    <Box
                      className="back"
                      sx={{
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundColor: "rgb(0, 179, 152, 0.5)",
                        backgroundImage: `${item.image}`,
                      }}
                    ></Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export { ProvideSection };
