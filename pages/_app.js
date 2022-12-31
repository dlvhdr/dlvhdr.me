import Head from "next/head";
import { ThemeProvider } from "../context/ThemeContext";
import classNames from "classnames";
import localFont from "@next/font/local";

import "../styles/global.css";

const monaSans = localFont({
  variable: "--mona-sans",
  src: [
    {
      path: "../public/fonts/Mona Sans/Mona-Sans.woff2",
      weight: "200 700",
    },
    {
      path: "../public/fonts/Mona Sans/Mona-Sans-RegularItalic.woff2",
      style: "italic",
    },
    {
      path: "../public/fonts/Mona Sans/Mona-Sans-BoldItalic.woff2",
      style: "italic",
      weight: "bold",
    },
  ],
});
const hubotSans = localFont({
  variable: "--hubot-sans",
  src: [
    {
      path: "../public/fonts/Hubot Sans/Hubot-Sans.woff2",
      weight: "200 900",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={classNames(monaSans.className, hubotSans.className)}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
