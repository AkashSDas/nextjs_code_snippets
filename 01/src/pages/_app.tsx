import { AppProps } from "next/app";
import React from "react";
import NavBar from "../components/nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
