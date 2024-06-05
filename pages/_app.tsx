import "../styles/globals.css";
import Router from "next/router";
import nProgress from "nprogress";
import type { AppProps } from "next/app";
import "../styles/nprogress.css";

//Router events
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
