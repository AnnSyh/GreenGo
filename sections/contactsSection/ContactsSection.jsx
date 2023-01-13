import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";

import * as React from "react";
import { useTranslation } from "next-i18next";

const ContactsSection = ({}) => {
  const { t } = useTranslation("common");

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
      className="section"
      sx={{
        // backgroundColor: "#E0F0FF",
        width: "100%",
      }}
    >
      <Box
        className="container-box"
        sx={() => ({
          paddingTop: "150px",
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
            minHeight: "calc(100vh - 160px - 150px)",
          })}
        >
          {contacts.map((item) => (
            <Grid
              item
              key={item.title}
              sx={(theme) => ({
                borderRadius: theme.radius.default,
                flexGrow: 0,
                flexShrink: 0,
                minWidth: "337px",
                flexBasis: "calc(33.3333% - 42px)",
                margin: "0 auto",
                marginBottom: "60px",
                marginLeft: "0px",
              })}
            >
              <Box
                sx={(theme) => ({
                  display: "flex",
                  flexFlow: "column nowrap",
                  borderRadius: theme.radius.default,
                })}
              >
                <Typography
                  variant="subtitle1"
                  component="div"
                  fontSize={{ xs: "20px", md: "30px" }}
                  sx={{ color: "#fff" }}
                >
                  {t(item.title)}
                </Typography>

                <Typography variant="subtitle1_text" sx={{ color: "#fff" }}>
                  <PhoneIcon sx={{ marginRight: "10px" }} />
                  {t(item.tel)}
                </Typography>
                <Typography variant="subtitle1_text" sx={{ color: "#fff" }}>
                  <MailIcon sx={{ marginRight: "10px" }} />
                  {t(item.email)}
                </Typography>
                {item.telegramm ? (
                  <Typography variant="subtitle1_text" sx={{ color: "#fff" }}>
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
