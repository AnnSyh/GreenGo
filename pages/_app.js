import { useRouter } from "next/router";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "locomotive-scroll/dist/locomotive-scroll.css";
import "../styles/locomotive-scroll.css";
import "../public/fonts/fonts.css";
import "../styles/globals.css";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../themes/index";
import createEmotionCache from "../config/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <LocomotiveScrollProvider
          options={{ smooth: true }}
          watch={[]}
          location={asPath}
          onLocationChange={(scroll) =>
            scroll.scrollTo(0, { duration: 0, disableLerp: true })
          }
          containerRef={containerRef}
        >
          <div data-scroll-container ref={containerRef}>
            <CssBaseline />
            <Component {...pageProps} />;
          </div>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
