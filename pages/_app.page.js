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

        <script src="/plugins/jquery/jquery.min.js"></script>
        <script src="/plugins/bootstrap/popper.min.js"></script>
        <script src="/plugins/bootstrap/bootstrap.min.js"></script>
        <script src="/plugins/bootstrap/bootstrap-slider.js"></script>
        <script src="/plugins/tether/js/tether.min.js"></script>
        <script src="/plugins/raty/jquery.raty-fa.js"></script>
        <script src="/plugins/slick/slick.min.js"></script>
        <script src="/plugins/jquery-nice-select/js/jquery.nice-select.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>

        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcABaamniA6OL5YvYSpB3pFMNrXwXnLwU"
          defer
        ></script>
        <script src="/plugins/google-map/map.js" defer></script>

        <script src="/js/script.js"></script>
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
