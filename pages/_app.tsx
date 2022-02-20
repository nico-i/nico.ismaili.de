import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import "../styles/globals.scss";

function Application({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
