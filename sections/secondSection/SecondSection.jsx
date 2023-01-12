import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { Box, fontSize, padding } from "@mui/system";
import * as React from "react";
import { useTranslation } from "next-i18next";
import { AnimationOnScroll } from "react-animation-on-scroll";

import imgUrl from "../../public/images/icons/icon-clock.svg";
// import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Image } from "@mui/material";
import { auto } from "@popperjs/core";

const SecondSection = ({}) => {
  const { t } = useTranslation("common");

  const items = [
    {
      title: `web_development`,
      image: `url('/images/icons/icon-clock.svg')`,
      iconsrc: "/images/icons/icon-electric-car-1.svg",
      desc: `web_development_txt`,
    },
    {
      title: `devops`,
      image: `url('/images/icons/www.svg')`,
      iconsrc: "/images/icons/icon-electric-car-2.svg",
      desc: `devops_txt`,
    },
    {
      title: `design`,
      image: `url('/images/icons/design.svg')`,
      iconsrc: "/images/icons/icon-electric-car-3.svg",
      desc: `design_txt`,
    },
  ];

  return (
    <section id="products-section" className="section">
      <Box className="container-box-wrapper">
        <Box className="container-box">
          <Grid
            container
            sx={{
              justifyContent: "center",
              position: "relative",
              top: "-30px",
              width: "calc(100% + 56px)",
            }}
          >
            {items.map((item) => (
              // <AnimationOnScroll animateOnce={true} animateIn="animate">
              <Card
                className="lab__card"
                key={item.title}
                sx={{
                  width: { xs: "80%", sm: "40%", md: "31%" },
                  borderRadius: "15px",
                  margin: "1% 1% 30px 1%",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    sx={{ height: 240 }}
                    image="/images/car.png"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      component="h2"
                      sx={{
                        marginBottom: "0px !important",
                        paddingBottom: "0px !important",
                      }}
                    >
                      {t(item.title)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "black", marginTop: auto }}
                    >
                      {t(item.desc)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              // {/* </AnimationOnScroll> */}
            ))}
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export { SecondSection };
