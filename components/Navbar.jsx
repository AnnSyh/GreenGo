import MenuIcon from "@mui/icons-material/Menu";
import
{
  AppBar, IconButton, ListItem,
  ListItemButton, Toolbar, Typography
} from "@mui/material";
import React from "react";
// import Search from "./Search";
// import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/menu.module.css";

import { Box } from "@mui/system";
import { useTranslation } from "next-i18next";
import Menu from "../sections/menu/Menu";

const nav = [
  { id: 1, title: `homepage`, path: "/" },
  { id: 2, title: `organizations`, path: "/organizations" },
  { id: 3, title: `questions`, path: "/questions" },
  { id: 4, title: `contacts`, path: "/contacts" },
  { id: 5, title: `map`, path: "/map" },
];
const label = { inputProps: { "aria-label": "Switch demo" } };

function Navbar({ onMenuIconClick, close, isOpen, languageToggle, sx })
{
  const { t } = useTranslation("common");
  const { pathname } = useRouter(); //подсвечиваем акт ссылку
  // console.log("pathname = ", pathname);

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

        {/* select для выбора языка */}
        {/* <FormControlSelect
          languageToggle={languageToggle}
          sx={{ margin: "10px" }}
        /> */}

        <Box
          className="navbar-ul"
          component="ul"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            justifyContent: "space-between",
            flexFlow: "row nowrap",
            marginLeft: "10px",
            color: "#fff",
            minWidth: "455px",
          }}
        >
          {nav.map((item, index, path) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component="a"
                href={item.path}
                // className="test-test-test"
                className={pathname === item.path ? styles.active : styles.link}
              // color="inherit"
              >
                {t(item.title)}
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
