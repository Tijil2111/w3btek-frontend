import Header from "../Components/Header";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "../Components/Footer";
import Head from "next/head";
import { useState } from "react";
import NProgress from "nprogress";
import { Router } from "next/router";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
    console.log(`chaning route`);
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
    console.log(`route change done`);
    NProgress.done();
  });
  return (
    <>
      <div>
        {loading}
        <Header />

        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
