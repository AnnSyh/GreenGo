import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import Search from "./Search";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/nav.module.css";
import { Box } from "@mui/system";
import Menu from "../sections/menu/Menu";
import { FormControlSelect } from "../sections/FormSection/FormControlSelect";
import { useTranslation } from "next-i18next";
import { NoEncryption } from "@mui/icons-material";

const nav = [
  { id: 1, title: `homepage`, path: "/" },
  { id: 2, title: `contacts`, path: "/contacts" },
  { id: 3, title: `questions`, path: "/questions" },
  // { id: 4, title: `map`, path: "/map" },
  { id: 4, title: `organizations`, path: "/organizations" },
];
const label = { inputProps: { "aria-label": "Switch demo" } };

function Navbar({ onMenuIconClick, close, isOpen, languageToggle, sx }) {
  const { t } = useTranslation("common");
  const { pathname } = useRouter(); //подсвечиваем акт ссылку
  // console.log("sx = ", sx);

  return (
    <AppBar position="fixed" sx={sx}>
      <Menu close={close} isOpen={isOpen}></Menu>
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          flexFlow: "row wrap",
          position: "relative",
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: {
              xs: 0,
              md: 2,
            },
            color: "#fff",
          }}
          onClick={onMenuIconClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          {" "}
        </Typography>

        <FormControlSelect
          languageToggle={languageToggle}
          sx={{ margin: "10px" }}
        />

        <Box
          className="navbar-ul"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            justifyContent: "space-between",
            flexFlow: "row nowrap",
            marginLeft: "10px",
            color: "#fff",
            minWidth: "370px",
          }}
        >
          {nav.map(({ id, title, path }) => (
            <Link
              key={id}
              href={path}
              className={pathname === path ? styles.active : styles.link}
              color="inherit"
            >
              {t(title)}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
