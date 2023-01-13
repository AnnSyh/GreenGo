import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "../styles/nav.module.css";
import { Box } from "@mui/system";
import { useTranslation } from "next-i18next";

import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const label = { inputProps: { "aria-label": "Switch demo" } };

function SotialLinks() {
  const { t } = useTranslation("common");

  return (
    <Box
      className="SotialLinks-ul"
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
        justifyContent: "space-between",
        flexFlow: "row nowrap",
        marginLeft: "10px",
        color: "#fff",
        minWidth: "220px",
      }}
    >
      <a href="https://twitter.com/" target="_blank" color="inherit">
        <TwitterIcon />
        {/* twitter */}
      </a>
      <a href="https://telegram.me/" target="_blank" color="inherit">
        <TelegramIcon />
        {/* telegram */}
      </a>
      <a href="https://www.facebook.com/" target="_blank" color="inherit">
        <FacebookIcon />
        {/* facebook */}
      </a>
    </Box>
  );
}
export default SotialLinks;
