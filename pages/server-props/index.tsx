import React from "react";

type PropsType = {
  value: number;
};

export const getServerSideProps = async () => {
  // // Fetch data from external API
  // const res = await fetch("http://localhost:3000/api/random-number");
  // const data = await res.json();

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  return { props: { value: randomNumber } };
};

const ServerProps = ({ value }: PropsType) => {
  return (
    <>
      <h1>Random Number (Server Side Rendering)</h1>
      <h2>This page was generated on request.</h2>
      <p>The random number is: {value}</p>
    </>
  );
};

export default ServerProps;
