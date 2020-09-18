import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Box,
} from "@chakra-ui/core";
import { Global } from "@emotion/core";
import { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { StoreContext, useStoreReducer } from "../store";

import theme from "../theme";

const globalStyles = {
  body: { height: "100%" },
  html: { height: "100%" },
  "#__next": { height: "100%" },
};
function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: AppProps["Component"] & { pageTitle?: string } }) {
  const value = useStoreReducer();

  return (
    <ThemeProvider theme={theme}>
      <StoreContext.Provider value={value}>
        <ColorModeProvider>
          <Global styles={globalStyles} />
          <CSSReset />
          <Head>
            <title>{Component.pageTitle}</title>
          </Head>
          <Box d="flex" flexDirection="column" height="100%">
            <Box as="main" flex="1" overflow="auto">
              <Component {...pageProps} />
            </Box>
            <Box
              as="footer"
              p="4"
              color="white"
              borderRadius={["8px 8px 0 0"]}
              backgroundColor="gray.600"
            >
              <Box as="nav">
                <Box
                  as="ul"
                  d="flex"
                  listStyleType="none"
                  justifyContent="space-between"
                >
                  <li>
                    <Link href="/">
                      <a>📔 Log</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/items">
                      <a>🍎 Items</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/settings">
                      <a>⚙️ Settings</a>
                    </Link>
                  </li>
                </Box>
              </Box>
            </Box>
          </Box>
        </ColorModeProvider>
      </StoreContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;