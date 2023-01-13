import { Grid, Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
import * as React from "react";
import { useTranslation } from "next-i18next";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import style from "../../styles/SymmetricalTextSection.module.css";

import { AnimationOnScroll } from "react-animation-on-scroll";

const SymmetricalTextSection = ({}) => {
  const { t } = useTranslation("common");

  return (
    <section id="about-section" className="section">
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.common.white,
          width: "100%",
          position: "relative",
        })}
      >
        <Box
          id="about"
          className="container-box"
          sx={() => ({
            alignItems: "flex-top",
          })}
        >
          <Grid
            container
            sx={{
              flexDirection: {
                xs: "column-reverse",
                md: "column",
              },
            }}
          >
            <Grid item md={6}>
              <Box
                sx={() => ({
                  margin: {
                    xs: "0px 0px 15px 0px",
                    sm: "0px 30px 30px 0px",
                  },
                  color: "#000",
                })}
              >
                <AnimationOnScroll
                  animateOnce={true}
                  animateIn="animate__fadeInLeftBig"
                >
                  <Typography
                    variant="body"
                    className={style.p}
                    sx={{ marginTop: "0px !important" }}
                  >
                    Качественных полнофункциональных развитых сервисов по работе
                    с электрозаправочными станциями почти нет
                  </Typography>
                  <Box className={style.listItem}>
                    <CheckCircleOutlineIcon />
                    Мало зарядных станций
                  </Box>
                  <Box className={style.listItem}>
                    <CheckCircleOutlineIcon />
                    Мало электромобилей
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
                </AnimationOnScroll>
              </Box>
            </Grid>
            <Grid item md={6}>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInRightBig"
              >
                <div className="text-5xl font-extrabold">
                  <Typography
                    variant="h1"
                    fontSize={{ xs: "20px", sm: "40px", lg: "52px" }}
                    marginBottom={{ xs: "30px" }}
                  >
                    {/* {t("products")} */}
                    РЫНОК <br />
                    СЕРВИСОВ УПРАВЛЕНИЯ
                  </Typography>
                </div>
              </AnimationOnScroll>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export { SymmetricalTextSection };
