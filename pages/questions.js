import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { Box, Button, Grid, Typography } from "@mui/material";

import ModalWindow from "../components/modalWindow/form";

import { TopArrow } from "../components/TopArrow";
import { Footer } from "../footer/Footer";

import { useRouter } from "next/router";

import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AccordionSection } from "../sections/accordionSection/AccordionSection";

const siteTitle = "questions";

export default function Questions({ title = siteTitle }) {
  const { t } = useTranslation("common");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [loader, setLoader] = useState(true);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    // console.log("handleClickOpen setOpen = ", open);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoader(false);
    }
  }, []);
  const router = useRouter();
  const { locale } = router;

  const handelLanguageToggle = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "ru" ? "en" : "ru";

  const [header, setHeader] = useState("headerColor");

  const listenScrollEvent = (event) => {
    const bgColorChanged = 373;

    if (window.scrollY < bgColorChanged) {
      return setHeader("headerColor");
    } else if (window.scrollY > bgColorChanged) {
      return setHeader("headerColor2");
    }
  };

  return (
    <Box>
      <Head>
        <title>{title} | GreenGo </title>
      </Head>

      <Box className={header}>
        <Navbar
          onMenuIconClick={openMenu}
          close={closeMenu}
          isOpen={isMenuOpen}
          languageToggle={handelLanguageToggle}
          // sx={{ border: "1px solid red" }}
        />
      </Box>

      <Box
        sx={{
          height: "calc(100vh - 99px)",
          // backgroundColor: "#f5f5f5",
          // backgroundColor: "#E0F0FF",
          // backgroundImage: "url('/images/bg.jpg')",
        }}
      >
        <div id="top-page" />

        <Box
          className="container-box"
          sx={() => ({
            paddingTop: "150px",
            paddingLeft: "30px",
            paddingRight: "30px",
          })}
        >
          <AccordionSection />

          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              flexDirection: "column",
              // border: "1px solid red",
            }}
          >
            <Typography
              variant="body"
              gutterBottom
              sx={{
                color: "black",
                maxWidth: "390px",
                textAlign: "center",
                marginTop: "30px",
                color: "#fff",
              }}
            >
              {t("not_find_answer")}
            </Typography>

            <Button
              variant="contained"
              onClick={handleClickOpen}
              sx={{
                margin: "30px auto 60px auto",
              }}
            >
              {t("contact_us")}
            </Button>
          </Box>
        </Box>

        <ModalWindow open={open} handleClose={handleClose} />

        <Footer />
        <TopArrow />
      </Box>
    </Box>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
