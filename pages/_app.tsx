import "../styles/globals.css";
import "../styles/main.css";
import "../styles/locomotive.css";
import "../styles/nprogress.css";

import Router from "next/router";
import nProgress from "nprogress";
import type { AppProps } from "next/app";

//  Router events
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
