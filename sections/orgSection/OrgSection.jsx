import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";

import * as React from "react";
import { useTranslation } from "next-i18next";

const OrgSection = ({}) => {
  const { t } = useTranslation("common");

  const contacts = [
    {
      title: `contacts_title`,
      tel: `8 (800) 250 93 36`,
      telhref: `tel:88002509336`,
      email: `support.ezs@sitronics.com`,
      emailto: `mailto:support.ezs@sitronics.com`,
      telegramm: `contacts_telegramm`,
      tme: `https://t.me/`,
    },
    {
      title: `contacts_title1`,
      tel: `8 (800) 250 93 36`,
      telhref: `tel:88002509336`,
      email: `support.ezs@sitronics.com`,
      emailto: `mailto:support.ezs@sitronics.com`,
    },
    {
      title: `contacts_title2`,
      tel: `8 (495) 225-98-29`,
      telhref: `tel:88002509336`,
      email: `support.ezs@sitronics.com`,
      emailto: `mailto:support.ezs@sitronics.com`,
    },
  ];

  return (
    <Box component="section" className="section">
      <Box className="container-box" sx={{ paddingTop: "150px" }}>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ color: "#00b398" }}
        >
          {t("organizations")}
        </Typography>
      </Box>
    </Box>
  );
};

export { OrgSection };
