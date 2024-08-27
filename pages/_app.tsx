import "@/styles/globals.css";
import "@/styles/Home.module.css";
import type { AppProps } from "next/app";
import Menu from "../components/Menu";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}
