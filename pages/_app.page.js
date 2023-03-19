import "../styles/globals.css";
import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import store from "../store/index.page";
import Script from "next/script";
import { QueryClient, QueryClientProvider } from "react-query";
import Headers from "./Component/header";
import Footers from "./Component/footer";

library.add(fab);

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <Provider store={store}>
        <Head>
          <link href="/plugins/bootstrap/bootstrap.min.css" rel="stylesheet" />
          <link
            href="/plugins/bootstrap/bootstrap-slider.css"
            rel="stylesheet"
          />
          <link
            href="/plugins/font-awesome/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link href="/plugins/slick/slick.css" rel="stylesheet" />
          <link href="/plugins/slick/slick-theme.css" rel="stylesheet" />
          <link
            href="/plugins/jquery-nice-select/css/nice-select.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/primeicons/primeicons.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/primereact/resources/primereact.min.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/primeflex@2.0.0/primeflex.min.css"
          />

          <link href="/css/style.css" rel="stylesheet"></link>
        </Head>

        <Script src="/plugins/jquery/jquery.min.js"></Script>
        <Script src="/plugins/bootstrap/popper.min.js"></Script>
        <Script src="/plugins/bootstrap/bootstrap.min.js"></Script>
        <Script src="/plugins/bootstrap/bootstrap-slider.js"></Script>
        <Script src="/plugins/tether/js/tether.min.js"></Script>
        <Script src="/plugins/raty/jquery.raty-fa.js"></Script>
        <Script src="/plugins/slick/slick.min.js"></Script>
        <Script src="/plugins/jquery-nice-select/js/jquery.nice-select.min.js"></Script>
        <Script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></Script>

        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcABaamniA6OL5YvYSpB3pFMNrXwXnLwU"
          defer
        ></Script>
        <Script src="/plugins/google-map/map.js" defer></Script>

        <Script src="/js/script.js"></Script>
        <Headers />
        <CookiesProvider>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </CookiesProvider>
        <Footers />
      </Provider>
    </>
  );
}

export default MyApp;
