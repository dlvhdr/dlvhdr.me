import { ThemeProvider } from "../context/ThemeContext";
import "../styles/global.css";
import localFont from "@next/font/local";
const monaSans = localFont({
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

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main className={monaSans.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
