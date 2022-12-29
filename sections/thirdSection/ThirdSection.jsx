import { Grid, Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
import * as React from "react";
import { useTranslation } from "next-i18next";

const ThirdSection = ({}) => {
  const { t } = useTranslation("common");

  return (
    <section id="about-section" data-scroll-section>
      <Box
        component="section"
        sx={(theme) => ({
          backgroundColor: theme.palette.common.white,
          width: "100%",
          position: "relative",
        })}
      >
        <Box
          id="about"
          sx={() => ({
            width: "100%",
            maxWidth: "1140px",
            margin: "0 auto",
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "flex-top",
            position: "relative",
          })}
        >
          <Grid container>
            <Grid
              item
              md={5}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-1"
            >
              <div
                className="text-5xl font-extrabold"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#about"
              >
                <Typography variant="h1">{t("products")}</Typography>
              </div>
            </Grid>
            <Grid
              item
              md={7}
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="1"
            >
              <p>{t("lorem_ipsum")}</p>
              <p>{t("lorem_ipsum")}</p>
              <p>{t("lorem_ipsum")}</p>
              <p>{t("lorem_ipsum")}</p>
              <p>{t("lorem_ipsum")}</p>
              <p>{t("lorem_ipsum")}</p>
              <p>{t("lorem_ipsum")}</p>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export { ThirdSection };
