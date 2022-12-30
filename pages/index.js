import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";

import FirstSection from "../sections/firstSection/FirstSection";
import { SecondSection } from "../sections/secondSection/SecondSection";
import { ThirdSection } from "../sections/thirdSection/ThirdSection";
import { FormSection } from "../sections/FormSection/FormSection";
import { CaruselSection } from "../sections/CaruselSection/caruselSection";
import { Footer } from "../footer/Footer";
import { FormControlSelect } from "../sections/FormSection/FormControlSelect";
import { TopArrow } from "../components/TopArrow";

import Menu from "../sections/menu/Menu";
import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";

import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const siteTitle = "GreenGo";

export default function Home({ title = siteTitle }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [loader, setLoader] = useState(true);

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  // const handleScroll = () => {
  //   console.log(2222);
  //   setClientWindowHeight(window.scrollY);
  // };
  // console.log("clientWindowHeight", clientWindowHeight);
  // useEffect(() => {
  //   console.log(1111);
  //   window.addEventListener("scroll", handleScroll());
  //   return () => window.removeEventListener("scroll", handleScroll());
  // });
  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setLoader(false);
  //   }
  // }, []);
  const router = useRouter();
  const { locale } = router;

  const handelLanguageToggle = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const [header, setHeader] = useState("headerColor");

  const listenScrollEvent = (event) => {
    // console.log("listenScrollEvent = ", window.scrollY);

    const bgColorChanged = 373;

    if (window.scrollY < bgColorChanged) {
      return setHeader("headerColor");
    } else if (window.scrollY > bgColorChanged) {
      return setHeader("headerColor2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <Box>
      <Head>
        <title>{title} | GreenGo </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className={header}>
        <Navbar
          className={header}
          onMenuIconClick={openMenu}
          close={closeMenu}
          isOpen={isMenuOpen}
          languageToggle={handelLanguageToggle}
          sx={{
            backdropFilter: "blur(8px)",
            backgroundColor: "transparent",
            color: "#fff",
          }}
        />
      </Box>

      <Box sx={{ height: "calc(100vh - 64px)" }}>
        <FirstSection />

        <SecondSection />

        <ThirdSection />

        <CaruselSection />

        <FormSection />

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
