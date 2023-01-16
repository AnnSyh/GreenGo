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
            <source src={"../../images/electric-car-8.mp4"} type="video/mp4" />
          </video>
          <Box
            className="container-box fadeIn"
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
              <Typography
                variant="body2"
                component="div"
                textTransform="uppercase"
                sx={() => ({
                  color: "white",
                  marginTop: {
                    lg: "46px",
                  },
                  textAlign: "left",
                })}
              >
                {t("software_development")}
              </Typography>

              <Box
                sx={{
                  backgroundImage: `url('/images/logo.svg')`,
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
                    md: "auto",
                    lg: "10px 0",
                  },
                }}
              ></Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexFlow: "row nowrap",
                  justifyContent: {
                    xs: "start",
                    lg: "start",
                  },
                }}
              >
                <Link href="/contacts">
                  <Button
                    className="btn-contacts"
                    variant="contained"
                    sx={{
                      marginTop: "0px",
                      // marginTop: {
                      //   xs: "345px",
                      //   md: "160px",
                      // },
                    }}
                  >
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
