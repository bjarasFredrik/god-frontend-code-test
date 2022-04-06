import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import Head from "next/head";
import CarInfoHandler from "../src/components/CarInfoHandler";

function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <React.StrictMode>
        <StyleProvider>
          <ThemePicker variant="light">
            <CarInfoHandler />
          </ThemePicker>
        </StyleProvider>
      </React.StrictMode>
    </>
  );
}

export default Home;
