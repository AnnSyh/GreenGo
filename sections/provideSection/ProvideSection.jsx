import { Box, Button, Grid, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "next-i18next";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import imgUrl from "../../public/images/icons/icon-clock.svg";
// import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Image } from "@mui/material";
import ParticlesBackground from "../../components/particlesBackground";

const ProvideSection = ({}) => {
  const { t } = useTranslation("common");

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

  return (
    <section id="provide-section" className="section">
      <Box
        sx={(theme) => ({
          backgroundColor: "#fff",
          position: "relative",
          paddingTop: "100px",
          // border: "1px solid red",
          overflow: "hidden",
        })}
      >
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
                        fontSize={{ xs: "15px", md: "15px" }}
                        sx={() => ({
                          marginTop: "20px",
                          // padding: "0 13px 30px",
                          padding: "0 15px 0",
                          color: "black",
                          textAlign: "left",
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
        <ParticlesBackground />
      </Box>
    </section>
  );
};

export { ProvideSection };
