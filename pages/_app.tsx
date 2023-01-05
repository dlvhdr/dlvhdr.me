import Head from "next/head";
import { ThemeProvider } from "../context/ThemeContext";
import classNames from "classnames";
import localFont from "@next/font/local";
import { AppProps } from "next/app";

import "../styles/global.css";

const monaSans = localFont({
  variable: "--mona-sans",
  display: "swap",
  src: [
    {
      path: "../public/fonts/Mona-Sans.woff2",
      weight: "200 700",
    },
  ],
});
const hubotSans = localFont({
  variable: "--hubot-sans",
  display: "swap",
  src: [
    {
      path: "../public/fonts/Hubot-Sans.woff2",
      weight: "200 900",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider>
        <div className={classNames(monaSans.className, hubotSans.className)}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
