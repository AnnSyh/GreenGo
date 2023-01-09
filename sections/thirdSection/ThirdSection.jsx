import { Grid, Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
import * as React from "react";
import { useTranslation } from "next-i18next";

const ThirdSection = ({}) => {
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
          <Grid container>
            <Grid item md={5}>
              <div className="text-5xl font-extrabold">
                <Typography variant="h1" fontSize={{ xs: "20px", md: "52px" }}>
                  {/* {t("products")} */}
                  РЫНОК ЗАРЯДНОЙ ИНФРАСТРУТУРЫ
                </Typography>
              </div>
            </Grid>
            <Grid item md={7}>
              <Box
                sx={() => ({
                  margin: {
                    xs: "15px 0px 15px 0px",
                    sm: "30px 30px 30px 40px",
                  },
                  color: "#454545",
                })}
              >
                <Typography variant="body">
                  В Российской Федерации по состоянию 2022 год, рынок по
                  созданию инфраструктуры ЭЗС можно разделить на 3 основных
                  сегмента:
                </Typography>
                <ul>
                  <li>Производители станций </li>
                  <li>Поставщики IT-услуг </li>
                  <li>Инжиниринговые компании</li>
                </ul>
                <Typography variant="body">
                  Существующие сервисы для оплаты зарядных сессий разрознены и
                  сложны в пользовании
                </Typography>
                <ul>
                  <li>
                    Разные приложения производителей станций и интеграторов
                    станций{" "}
                  </li>
                  <li>Мало способов оплаты</li>
                  <li>Отсутствует и плохо работает техподдержка</li>
                </ul>
                <h2>ПРОБЛЕМА</h2>
                {/* <Typography variant="body"> */}
                <blockquote className="quote">
                  В настоящее время на рынке нет сервиса одновременно
                  упрощающего жизнь владельцам электромобилей и объединяющего
                  производителей, операторов и владельцев зарядных станций
                </blockquote>
                {/* </Typography> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export { ThirdSection };
