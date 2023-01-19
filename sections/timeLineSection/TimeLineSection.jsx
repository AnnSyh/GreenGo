import * as React from "react";
import { Box, Button, Grid, Typography, Paper } from "@mui/material";
import { useTranslation } from "next-i18next";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import imgUrl from "../../public/images/icons/icon-clock.svg";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Image } from "@mui/material";
import ParticlesBackground from "../../components/particlesBackground";

const list = [
  {
    id: 1,
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    id: 2,
    label: "Create an ad group",
    description: `Create an ad group For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
];

const TimeLineSection = ({}) => {
  const { t } = useTranslation("common");

  return (
    <section id="provide-section" className="section bg-light-gray">
      <Box
        sx={{
          backgroundColor: "#fff",
          position: "relative",
          paddingTop: "30px",
          overflow: "hidden",
          paddingLeft: {
            xs: "0px",
            md: "15px",
          },
        }}
      >
        <Box className="container-box">
          <Typography
            variant="h1"
            sx={{ textAlign: "center", width: "100%", marginBottom: "60px" }}
            fontSize={{ xs: "25px", md: "52px" }}
          >
            timeLineSection
          </Typography>

          <ol className="stepper">
            <li className="stepper-item complete">
              <span className="stepper-counter"></span>
              <a href="#" className="stepper-link">
                <span>Learn proper HTML</span>
              </a>
              <span className="stepper-line"></span>
              <span>
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which
                networks and geographical locations you want your ads to show
                on, and more.
              </span>
            </li>

            <li className="stepper-item complete">
              <span className="stepper-counter"></span>
              <a href="#" className="stepper-link">
                <span>Dive into the world of CSS</span>
              </a>
              <span className="stepper-line"></span>
            </li>
            <li className="stepper-item">
              <span className="stepper-counter"></span>
              <a href="#" className="stepper-link">
                <span>Fiddle with some JS</span>
              </a>
              <span className="stepper-line"></span>
            </li>
            <li className="stepper-item">
              <span className="stepper-counter"></span>
              <a href="#" className="stepper-link">
                <span>Build with a SSG</span>
              </a>
              <span className="stepper-line"></span>
            </li>
            <li className="stepper-item">
              <span className="stepper-counter"></span>
              <a href="#" className="stepper-link">
                <span>Use a headless CMS</span>
              </a>
              <span className="stepper-line"></span>
            </li>
          </ol>
        </Box>
        <ParticlesBackground />
      </Box>
    </section>
  );
};

export { TimeLineSection };
