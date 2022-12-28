import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../companents/Navbar";

import FirstSection from "../sections/firstSection/FirstSection";
import { SecondSection } from "../sections/secondSection/SecondSection";
import { ThirdSection } from "../sections/thirdSection/ThirdSection";
import { FormSection } from "../sections/FormSection/FormSection";
import { TopArrow } from "../companents/TopArrow";

import Menu from "../sections/menu/Menu";
import { Box, CircularProgress } from "@mui/material";

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
  return (
    <Box>
      {loader ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <div className="o-scroll" id="js-scroll" data-scroll-container>
            <Head>
              <title>{title} | GreenGo </title>
              <meta name="description" content="Generated by create next app" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu close={closeMenu} isOpen={isMenuOpen} />
            <Navbar onMenuIconClick={openMenu} />

            <FirstSection />

            <SecondSection />

            <ThirdSection />

            <FormSection />

            <TopArrow />
          </div>
        </Box>
      )}
    </Box>
  );
}
