import { Grid, Typography } from "@mui/material";
import { Box, fontSize, padding } from "@mui/system";
import * as React from "react";
import { useTranslation } from "next-i18next";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import imgUrl from "../../public/images/icons/icon-clock.svg";
// import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Image } from "@mui/material";

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
          backgroundColor: theme.palette.common.white,
          position: "relative",
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
                    <Box
                      className="front"
                      sx={{
                        backgroundImage: `${item.image}`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    ></Box>
                    <Box className="back">
                      <CheckCircleOutlineIcon />

                      <Typography
                        variant="body"
                        gutterBottom
                        textAlign="center"
                        fontSize={{ xs: "12px", md: "18px" }}
                        sx={() => ({
                          marginTop: "20px",
                          padding: "0 13px 30px",
                          color: "black",
                        })}
                      >
                        {t(item.desc)}
                      </Typography>
                    </Box>
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
