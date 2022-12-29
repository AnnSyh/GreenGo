import { Grid, Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
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
    <section id="products-section">
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.common.white,
          width: "100%",
          position: "relative",
        })}
      >
        <Box
          sx={() => ({
            width: "100%",
            maxWidth: "1140px",
            margin: "0 auto",
            display: "flex",
            flexFlow: "row wrap",
            position: "relative",
          })}
        >
          <Grid
            container
            justifyContent="space-between"
            sx={() => ({
              position: "relative",
              top: "-30px",
            })}
          >
            {items.map((item) => (
              <Grid
                item
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="1"
                key={item.title}
                sx={(theme) => ({
                  flexGrow: 0,
                  flexShrink: 0,
                  minWidth: "337px",
                  flexBasis: "calc(33.3333% - 42px)",
                  margin: "0 auto",
                  border: "1px solid #00b398",
                  borderRadius: theme.radius.default,
                })}
              >
                <Box
                  sx={(theme) => ({
                    minHeight: "345px",
                    display: "flex",
                    flexFlow: "column nowrap",
                    alignItems: "center",
                    backgroundColor: theme.palette.common.white,
                    borderRadius: theme.radius.default,
                    position: "relative",
                    paddingTop: "20px",
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
                    component="div"
                    sx={(theme) => ({})}
                  >
                    {/* {item.title} */}
                    {/* {t("design")} */}
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
                    {/* {item.desc} */}
                    {t(item.desc)}
                    {/* {t("design_txt")} */}
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
