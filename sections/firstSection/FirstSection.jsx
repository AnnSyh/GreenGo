import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function FirstSection({}) {
  return (
    <section id="intro" data-scroll-section>
      <Box
        sx={(theme) => ({
          minHeight: "691px",
          backgroundColor: theme.palette.grey.background,
        })}
      >
        <Box
          sx={(theme) => ({
            width: "100%",
          })}
          m={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        ></Box>
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="center"
        >
          <video autoPlay muted loop id="video">
            <source src={"../../images/electric-car.mp4"} type="video/mp4" />
          </video>
          <Box
            className="fadeIn"
            sx={{
              // border: "1px solid red",
              position: "fixed",
              bottom: 0,
              left: 0,
              height: "90%",
              padding: "30px 10px",
            }}
          >
            <Typography
              variant="subtitleCompany"
              component="div"
              textTransform="uppercase"
              sx={(theme) => ({
                color: "white",
                marginTop: {
                  xs: "none",
                  lg: "46px",
                },
                textAlign: "left",
              })}
            >
              Software development
            </Typography>

            <Box
              sx={(theme) => ({
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

            <Typography
              variant="body1"
              sx={(theme) => ({
                color: "white",
                marginTop: "18px",
                textAlign: {
                  xs: "left",
                  lg: "left",
                },
              })}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
              <br />
              tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography
              variant="caption"
              display="block"
              sx={(theme) => ({
                color: "white",
                margin: "18px 0 0",
                textAlign: {
                  xs: "left",
                  lg: "left",
                },
              })}
            >
              caption text{" "}
              <Typography
                variant="caption"
                component="span"
                sx={{ textDecoration: "underline", color: "white" }}
              >
                {" "}
                caption text{" "}
              </Typography>
            </Typography>
            <Box
              sx={(theme) => ({
                width: "100%",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: {
                  xs: "start",
                  lg: "start",
                },
              })}
            >
              <Button
                variant="contained"
                sx={(theme) => ({
                  margin: {
                    xs: "45px 0",
                    lg: "45px 0",
                  },
                })}
              >
                <Link href="/contacts">Contacts</Link>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    </section>
  );
}
