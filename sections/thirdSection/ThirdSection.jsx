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
                <Typography variant="h1" fontSize={{ xs: "35px", md: "52px" }}>
                  {t("products")}
                </Typography>
              </div>
            </Grid>
            <Grid item md={7}>
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
