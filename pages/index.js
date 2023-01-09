import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

import FirstSection from "../sections/firstSection/FirstSection";
import { SecondSection } from "../sections/secondSection/SecondSection";
import { ProvideSection } from "../sections/provideSection/ProvideSection";

import { TextSection } from "../sections/textSection/TextSection";
import { SymmetricalTextSection } from "../sections/symmetricalTextSection/SymmetricalTextSection";

import { FormSection } from "../sections/FormSection/FormSection";
import { CaruselSection } from "../sections/CaruselSection/caruselSection";
import { Footer } from "../footer/Footer";
import { TopArrow } from "../components/TopArrow";

import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";

import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const siteTitle = "GreenGo";

export default function Home({ title = siteTitle }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [loader, setLoader] = useState(true);

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  const router = useRouter();
  const { locale } = router;

  const handelLanguageToggle = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const [header, setHeader] = useState("headerColor");

  const listenScrollEvent = (event) => {
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

      <Box className="index-page" sx={{ height: "calc(100vh - 64px)" }}>
        <div id="top-page" />
        <FirstSection />

        <SecondSection />

        <TextSection />

        <SymmetricalTextSection />

        <CaruselSection />

        <ProvideSection />

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
