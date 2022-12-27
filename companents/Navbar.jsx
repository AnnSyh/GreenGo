import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import Search from "./Search";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/nav.module.css";
import { Box } from "@mui/system";
import Switch from "@mui/material/Switch";

const nav = [
  { id: 1, title: "home", path: "/" },
  { id: 2, title: "contacts", path: "/contacts" },
];
const label = { inputProps: { "aria-label": "Switch demo" } };

function Navbar({ onMenuIconClick }) {
  const { pathname } = useRouter(); //подсвечиваем акт ссылку

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: "#fff",
        zIndex: "1",
        position: "absolute",
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {
            onMenuIconClick();
          }}
        >
          <MenuIcon />
        </IconButton>
        {/* <Search color="inherit" /> */}
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          {" "}
        </Typography>

        {/* <Button color="inherit">Login</Button> */}
        <div>
          рус/англ
          <Switch {...label} defaultChecked />
        </div>
        <Box
          className="navbar-ul"
          sx={{
            display: "flex",
            flexFlow: "row nowrap",
          }}
        >
          {nav.map(({ id, title, path }) => (
            <Link
              key={id}
              href={path}
              className={pathname === path ? styles.active : styles.link}
            >
              {title}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
