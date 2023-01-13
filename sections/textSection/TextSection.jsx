import { Grid, Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
import * as React from "react";
import { useTranslation } from "next-i18next";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import style from "../../styles/TextSection.module.css";

import { AnimationOnScroll } from "react-animation-on-scroll";

const TextSection = ({}) => {
  const { t } = useTranslation("common");

  return (
    <section id="about-section" className="section">
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.common.white,
          width: "100%",
          position: "relative",
          paddingTop: "60px",
        })}
      >
        <Box
          id="about"
          className="container-box"
          sx={() => ({
            alignItems: "flex-top",
          })}
        >
          <Grid container>
            <Grid item md={6}>
              <div className="text-5xl font-extrabold">
                <AnimationOnScroll
                  animateOnce={true}
                  animateIn="animate__fadeInLeftBig"
                >
                  <Typography
                    variant="h1"
                    fontSize={{ xs: "20px", sm: "40px", lg: "52px" }}
                  >
                    {/* {t("products")} */}
                    РЫНОК ЗАРЯДНОЙ ИНФРАСТРУТУРЫ
                  </Typography>
                </AnimationOnScroll>
              </div>
            </Grid>
            <Grid item md={6}>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInRightBig"
              >
                <Box
                  sx={() => ({
                    margin: {
                      xs: "0px 0px 15px 0px",
                      sm: "0px 30px 30px 0px",
                    },
                    color: "#000",
                  })}
                >
                  <Typography
                    variant="body"
                    className={style.p}
                    sx={{ marginTop: "0px !important" }}
                  >
                    В Российской Федерации по состоянию 2022 год, рынок по
                    созданию инфраструктуры ЭЗС можно разделить на 3 основных
                    сегмента:
                  </Typography>
                  <Box className={style.listItem}>
                    <CheckCircleOutlineIcon />
                    Производители станций
                  </Box>
                  <Box className={style.listItem}>
                    <CheckCircleOutlineIcon />
                    Поставщики IT-услуг
                  </Box>
                  <Box className={style.listItem}>
                    <CheckCircleOutlineIcon />
                    Инжиниринговые компании
                  </Box>
                  <Typography variant="body" className={style.p}>
                    Существующие сервисы для оплаты зарядных сессий разрознены и
                    сложны в пользовании
                  </Typography>
                  <ul>
                    <li>
                      Разные приложения производителей станций и интеграторов
                      станций
                    </li>
                    <li>Мало способов оплаты</li>
                    <li>Отсутствует и плохо работает техподдержка</li>
                  </ul>
                  <h2>ПРОБЛЕМА</h2>
                  <blockquote className="quote">
                    В настоящее время на рынке нет сервиса одновременно
                    упрощающего жизнь владельцам электромобилей и объединяющего
                    производителей, операторов и владельцев зарядных станций
                  </blockquote>
                </Box>
              </AnimationOnScroll>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export { TextSection };
