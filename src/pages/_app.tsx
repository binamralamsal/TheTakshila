import "@/styles/css-reset.css";
import "@/styles/styles.css";
import type { AppProps } from "next/app";
import { Lexend } from "@next/font/google";
import { Navbar } from "@/components/layout/Navbar";

const lexend = Lexend({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={lexend.className}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
