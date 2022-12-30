import { Grid, Typography } from "@mui/material";
import { Box, fontSize, padding } from "@mui/system";
import * as React from "react";
import { useTranslation } from "next-i18next";

const SecondSection = ({}) => {
  const { t } = useTranslation("common");

  const items = [
    {
      title: `web_development`,
      image: `url('/images/icons/linux.svg')`,
      desc: `web_development_txt`,
    },
    {
      title: `devops`,
      image: `url('/images/icons/www.svg')`,
      desc: `devops_txt`,
    },
    {
      title: `design`,
      image: `url('/images/icons/design.svg')`,
      desc: `design_txt`,
    },
  ];

  return (
    <section id="products-section" className="section">
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.common.white,
          position: "relative",
        })}
      >
        <Box className="container-box">
          <Grid
            container
            sx={() => ({
              justifyContent: "space-between",
              position: "relative",
              top: "-30px",
            })}
          >
            {items.map((item) => (
              <Grid
                item
                className="card"
                key={item.title}
                sx={(theme) => ({
                  borderRadius: theme.radius.default,
                })}
              >
                <Box
                  className="card-inner"
                  sx={(theme) => ({
                    backgroundColor: theme.palette.common.white,
                    borderRadius: theme.radius.default,
                  })}
                >
                  {/* <Box
                    sx={(theme) => ({
                      position: "relative",
                      backgroundColor: theme.palette.primary.main,
                      backgroundImage: item.image,
                      borderRadius: theme.shape.borderRadius,
                      width: "79px",
                      height: "79px",
                      top: "-25px",
                    })}
                  ></Box> */}
                  <Typography
                    variant="subtitle2"
                    component="h2"
                    fontSize={{ xs: "25px", md: "42px" }}
                  >
                    {t(item.title)}
                  </Typography>
                  <Typography
                    variant="body"
                    gutterBottom
                    textAlign="center"
                    sx={() => ({
                      marginTop: "20px",
                      padding: "0 30px 30px",
                      color: "black",
                    })}
                  >
                    {t(item.desc)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export { SecondSection };
