import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";

import FirstSection from "../sections/firstSection/FirstSection";
import { SecondSection } from "../sections/secondSection/SecondSection";
import { ThirdSection } from "../sections/thirdSection/ThirdSection";
import { FormSection } from "../sections/FormSection/FormSection";
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

  return (
    <>
      <Head>
        <title>{title} | GreenGo </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        onMenuIconClick={openMenu}
        close={closeMenu}
        isOpen={isMenuOpen}
        languageToggle={handelLanguageToggle}
      />
      <div className="o-scroll" id="js-scroll" data-scroll-container>
        <FirstSection />
        <SecondSection />

        <ThirdSection />
        <FormSection />
        <TopArrow />
      </div>
    </>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
