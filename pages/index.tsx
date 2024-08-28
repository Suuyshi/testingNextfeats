import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "../components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return <h1>{randomNumber}</h1>;
}
