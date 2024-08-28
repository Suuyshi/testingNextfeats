import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "../components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const x = Math.random();
  return <p>{x}</p>;
}
