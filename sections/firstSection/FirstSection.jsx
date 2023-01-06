import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function FirstSection({}) {
  const { t } = useTranslation("common");

  return (
    <section id="intro" className="section">
      <Box
        sx={(theme) => ({
          minHeight: "100vh",
          backgroundColor: theme.palette.grey.background,
          width: "100%",
          display: "flex",
        })}
      >
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="center"
        >
          <video autoPlay muted loop id="video">
            <source src={"../../images/car-6mb.mp4"} type="video/mp4" />
          </video>
          <Box
            className="container-box"
            sx={{
              height: "100%",
            }}
          >
            <Box
              className="fadeIn"
              sx={{
                maxWidth: "452px",
                position: "relative",
                bottom: "-10%",
                left: 0,
                height: "90%",
                // border: "10px solid blue",
              }}
            >
              {/* <h1> {t("welcome")} </h1> */}
              <Typography
                variant="subtitleCompany"
                component="div"
                textTransform="uppercase"
                sx={() => ({
                  color: "white",
                  marginTop: {
                    xs: "none",
                    lg: "46px",
                  },
                  textAlign: "left",
                })}
              >
                {/* Software development */}
                {t("software_development")}
              </Typography>

              <Box
                sx={(heme) => ({
                  backgroundImage: `url('/images/logo-1.png')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  height: 150,
                  textAlign: {
                    xs: "left",
                    lg: "left",
                  },
                  margin: {
                    xs: "auto",
                    lg: "10px 0",
                    md: "auto",
                  },
                })}
              ></Box>

              <Typography variant="body2">
                {t("provides_stable_technical_solutions")}
              </Typography>
              <Typography variant="body2">
                {t("provide_most_effective_service")}
              </Typography>
              <Typography variant="body2">{t("simplify_process")}</Typography>
              {/* <Typography
                variant="caption"
                display="block"
                sx={() => ({
                  color: "white",
                  margin: "18px 0 0",
                  textAlign: {
                    xs: "left",
                    lg: "left",
                  },
                })}
              >
                {t("caption_text")}
                <Typography
                  variant="caption"
                  component="span"
                  sx={{ textDecoration: "underline", color: "white" }}
                >
                  {" "}
                  {t("caption_text")}
                </Typography>
              </Typography> */}
              <Box
                sx={() => ({
                  width: "100%",
                  display: "flex",
                  flexFlow: "row nowrap",
                  justifyContent: {
                    xs: "start",
                    lg: "start",
                  },
                })}
              >
                <Link href="/contacts">
                  <Button className="btn-contacts" variant="contained">
                    {t("contacts")}
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </section>
  );
}
