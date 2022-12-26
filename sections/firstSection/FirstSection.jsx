import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function FirstSection({}) {
  return (
    <section
      id="intro"
      className="h-screen flex items-center justify-center text-center bg-green-200"
      data-scroll-section
    >
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
            {/* <source src={"../../images/electric-car.mp4"} type="video/mp4" /> */}
          </video>
          <Box
            className="fadeIn"
            sx={{
              position: "fixed",
              bottom: 0,
              height: "90%",
              padding: {
                xs: "30px 10px",
                lg: "30px 50px",
              },
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
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              })}
            >
              Software development
            </Typography>

            <Box
              sx={(theme) => ({
                backgroundImage: `url('/images/profile.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: 200,
                width: 200,
                textAlign: {
                  xs: "center",
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
                  xs: "center",
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
                  xs: "center",
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
                  xs: "center",
                  lg: "start",
                },
              })}
            >
              <Button
                variant="contained"
                sx={(theme) => ({
                  margin: {
                    xs: "45px auto",
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
