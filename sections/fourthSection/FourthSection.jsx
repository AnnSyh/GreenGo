import { Grid, Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
import * as React from "react";

const FourthSection = ({}) => {
  return (
    <section
      id="services"
      className="relative py-60 bg-green-50"
      data-scroll-section
    >
      <Box
        component="div"
        sx={(theme) => ({
          backgroundColor: theme.palette.common.white,
          width: "100%",
          position: "relative",
        })}
      >
        <Box
          sx={(theme) => ({
            width: "100%",
            maxWidth: "1140px",
            margin: "0 auto",
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "flex-top",
            position: "relative",
          })}
        >
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -skew-x-12 whitespace-nowrap text-6xl sm:text-9xl font-extrabold py-4">
            <span
              className="inline-block"
              data-scroll
              data-scroll-repeat
              data-scroll-speed="3"
              data-scroll-call="randomizeTextColor"
            >
              S
            </span>
            <span
              className="inline-block"
              data-scroll
              data-scroll-repeat
              data-scroll-speed="2"
              data-scroll-call="randomizeTextColor"
            >
              e
            </span>
            <span
              className="inline-block"
              data-scroll
              data-scroll-repeat
              data-scroll-speed="3"
              data-scroll-call="randomizeTextColor"
            >
              r
            </span>
            <span
              className="inline-block"
              data-scroll
              data-scroll-repeat
              data-scroll-speed="2"
              data-scroll-call="randomizeTextColor"
            >
              v
            </span>
            <span
              className="inline-block"
              data-scroll
              data-scroll-repeat
              data-scroll-speed="3"
              data-scroll-call="randomizeTextColor"
            >
              i
            </span>
            <span
              className="inline-block"
              data-scroll
              data-scroll-repeat
              data-scroll-speed="2"
              data-scroll-call="randomizeTextColor"
            >
              c
            </span>
            <span
              className="inline-block"
              data-scroll
              data-scroll-repeat
              data-scroll-speed="3"
              data-scroll-call="randomizeTextColor"
            >
              e
            </span>
            <span
              className="inline-block"
              data-scroll
              data-scroll-repeat
              data-scroll-speed="2"
              data-scroll-call="randomizeTextColor"
            >
              s
            </span>
          </h2>
          <div className="transform rotate-6 skew-x-12">
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="20"
              data-scroll-target="#services"
            >
              <span className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl bg-green-400 p-5 whitespace-nowrap">
                Social Media — Email Marketing — Digital Advertising
              </span>
            </div>
          </div>
          <div className="transform -rotate-6 -skew-x-12 mt-40">
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-20"
              data-scroll-target="#services"
            >
              <span className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl bg-green-400 p-5 whitespace-nowrap">
                Web Development - Motion Design - Graphic Design
              </span>
            </div>
          </div>
        </Box>
      </Box>
    </section>
  );
};

export { FourthSection };
