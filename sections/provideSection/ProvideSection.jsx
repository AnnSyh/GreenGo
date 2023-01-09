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
      image: `url('/images/icons/icon-clock.svg')`,
      iconsrc: "/images/icons/icon-electric-car-1.svg",
      desc: `Определение занятости парковочного места у зарядной станции`,
    },
    {
      image: `url('/images/icons/www.svg')`,
      iconsrc: "/images/icons/icon-electric-car-2.svg",
      desc: `Определение правомерности занятости парковочного места по типу размещенного ТС`,
    },
    {
      image: `url('/images/icons/design.svg')`,
      iconsrc: "/images/icons/icon-electric-car-3.svg",
      desc: `Уведомление уполномоченного органа о правонарушении с отправкой фотоданных (опционально)`,
    },
    {
      image: `url('/images/icons/www.svg')`,
      iconsrc: "/images/icons/icon-electric-car-2.svg",
      desc: `Интеллектуальное планирование маршрута, стоимости и бронирования станции исходя из дорожной обстановки из мобильного приложения`,
    },
    {
      image: `url('/images/icons/design.svg')`,
      iconsrc: "/images/icons/icon-electric-car-3.svg",
      desc: `Автоматическая детекция пользователя и старта сессии при подключении к ЭЗС - «подключился и ушел» (через считывание госномера или персональное мобильный гаджет)`,
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
                className="card"
                key={i}
                sx={(theme) => ({
                  borderRadius: theme.radius.default,
                })}
              >
                <Box
                  className="card-inner"
                  sx={(theme) => ({
                    backgroundColor: theme.palette.common.white,
                    borderRadius: theme.radius.default,
                    minHeight: "255px !important",
                  })}
                >
                  <CheckCircleOutlineIcon
                    sx={() => ({
                      width: 120,
                      height: 120,
                    })}
                  />

                  <Typography
                    variant="body"
                    gutterBottom
                    textAlign="center"
                    sx={() => ({
                      marginTop: "20px",
                      padding: "0 30px 30px",
                      color: "black",
                    })}
                  >
                    {t(item.desc)}
                  </Typography>
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
