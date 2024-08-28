import React from "react";

type PropsType = {
  value: number;
};

export async function getStaticProps() {
  // const res = await fetch("http://localhost:3000/api/random-number");
  // const data = await res.json();

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  return {
    props: {
      value: randomNumber,
    },
    revalidate: 1000, // This page will be regenerated every 1000 seconds
  };
}

const StaticProps = ({ value }: PropsType) => {
  return (
    <>
      <h1>Random Number (Static Generation)</h1>
      <h2>This page was generated at build time.</h2>
      <p>The random number is: {value}</p>
    </>
  );
};

export default StaticProps;
