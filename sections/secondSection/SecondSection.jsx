import { Grid, Typography } from "@mui/material";
import { Box, fontSize, padding } from "@mui/system";
import * as React from "react";
import { useTranslation } from "next-i18next";

import imgUrl from "../../public/images/icons/icon-clock.svg";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material";

const SecondSection = ({}) => {
  const { t } = useTranslation("common");

  const items = [
    {
      title: `web_development`,
      image: `url('../../public/images/icons/icon-clock.svg')`,
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
                  <Typography
                    variant="subtitle2"
                    component="h2"
                    fontSize={{ xs: "25px", md: "42px" }}
                  >
                    {t(item.title)}
                  </Typography>
                  {/* <Typography>
                    <MailIcon color="#fff" sx={{ border: "1px solid red" }} />
                    <Image src={imgUrl}></Image>
                    <Avatar
                      alt="Remy Sharp"
                      src="../../public/images/icons/icon-clock.svg"
                    />
                  </Typography> */}
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
