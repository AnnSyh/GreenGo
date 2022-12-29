import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";

import * as React from "react";
import { useTranslation } from "next-i18next";

const ContactsSection = ({}) => {
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

  const contacts = [
    {
      title: `contacts_title`,
      tel: `8 (800) 250 93 36`,
      email: `support.ezs@sitronics.com`,
      telegramm: `contacts_telegramm`,
    },
    {
      title: `contacts_title1`,
      tel: `8 (800) 250 93 36`,
      email: `support.ezs@sitronics.com`,
    },
    {
      title: `contacts_title2`,
      tel: `8 (495) 225-98-29`,
      email: `support.ezs@sitronics.com`,
    },
  ];

  return (
    <Box
      component="section"
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
          justifyContent: "center",
          flexFlow: "row wrap",
          position: "relative",
        })}
      >
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ color: "#00b398" }}
        >
          {t("contacts")}
        </Typography>

        <Grid
          container
          justifyContent="space-between"
          sx={() => ({
            position: "relative",
            top: "30px",
          })}
        >
          {contacts.map((item) => (
            <Grid
              item
              key={item.title}
              sx={(theme) => ({
                flexGrow: 0,
                flexShrink: 0,
                minWidth: "337px",
                flexBasis: "calc(33.3333% - 42px)",
                margin: "0 auto",
                // border: "1px solid #00b398",
                borderRadius: theme.radius.default,
              })}
            >
              <Box
                sx={(theme) => ({
                  minHeight: "345px",
                  display: "flex",
                  flexFlow: "column nowrap",
                  // alignItems: "center",
                  backgroundColor: theme.palette.common.white,
                  borderRadius: theme.radius.default,
                  position: "relative",
                  paddingTop: "20px",
                })}
              >
                <Typography variant="subtitle1" component="div">
                  {t(item.title)}
                </Typography>

                <Typography variant="subtitle1_text">
                  <PhoneIcon sx={{ marginRight: "10px" }} />
                  {t(item.tel)}
                </Typography>
                <Typography variant="subtitle1_text">
                  <MailIcon sx={{ marginRight: "10px" }} />
                  {t(item.email)}
                </Typography>
                {item.telegramm ? (
                  <Typography variant="subtitle1_text">
                    <TelegramIcon sx={{ marginRight: "10px" }} />
                    {t(item.telegramm)}
                  </Typography>
                ) : (
                  " "
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export { ContactsSection };
