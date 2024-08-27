import React from "react";

type PropsType = {
  value: number;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/random-number");
  const data = await res.json();

  return {
    props: {
      value: data.value,
    },
    // revalidate: 10, // This page will be regenerated every 10 seconds
  };
}

const StaticProps = ({ value }: PropsType) => {
  return (
    <>
      <h1>Random Number (Static Generation)</h1>
      <p>The random number is: {value}</p>
      <p>This page was generated at build time.</p>
    </>
  );
};

export default StaticProps;
