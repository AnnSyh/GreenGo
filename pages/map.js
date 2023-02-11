import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import { TopArrow } from "../components/TopArrow";
import { Footer } from "../footer/Footer";

import { useRouter } from "next/router";

import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Map } from "../components/Map";





// import { TextSection } from "../sections/map/textSection/TextSection";

const siteTitle = "map";

export default function map({ title = siteTitle })
{
  const { t } = useTranslation("common");
  const [ isMenuOpen, setMenuOpen ] = useState(false);
  const [ loader, setLoader ] = useState(true);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);


  useEffect(() =>
  {
    if (typeof window !== "undefined")
    {
      setLoader(false);
    }
  }, []);
  const router = useRouter();
  const { locale } = router;

  const handelLanguageToggle = (newLocale) =>
  {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "ru" ? "en" : "ru";

  const [ header, setHeader ] = useState("headerColor");

  const listenScrollEvent = (event) =>
  {
    const bgColorChanged = 373;

    if (window.scrollY < bgColorChanged)
    {
      return setHeader("headerColor");
    } else if (window.scrollY > bgColorChanged)
    {
      return setHeader("headerColor2");
    }
  };

  const [ open, setOpen ] = useState(false);
  const handleClickOpen = () =>
  {
    console.log("handleClickOpen setOpen = ", open);
    setOpen(true);
  };
  const handleClose = () =>
  {
    setOpen(false);
  };

  const handleOnClick = (e) =>
  {
    e.preventDefault();
    console.log("You have clicked in the specified area");
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
        />
      </Box>

      <Box className="boxHeigh bg-light-gray">
        <Box
          className="bg-light-gray"
          sx={{
            paddingBottom: "60px",
            // height: "100vh",
            // overflowX: "hidden",
          }}
        >
          <div id="top-page" />

          <Box component="section" className="section bg-light-gray">
            <Box
              className="container-box"
              sx={{
                paddingTop: "150px",
              }}
            >
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: "#00b398" }}
              >
                {t("map")}
              </Typography>
            </Box>
          </Box>
          {/* <OrgTimeline /> */}
          {/* <ZigzagTimeline /> */}
          {/* <TextSection /> */}
          <Map />

        </Box>
        <Footer sx={{ backgroundColor: "rgba(0, 179, 152, 1)" }} />
        <TopArrow />
      </Box>
    </Box>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [ "common" ])),
  },
});
