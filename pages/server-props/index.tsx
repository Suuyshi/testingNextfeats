import React from "react";

type PropsType = {
  value: number;
};

export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch("http://localhost:3000/api/random-number");
  const data = await res.json();
  return { props: { value: data.value } };
};

const ServerProps = ({ value }: PropsType) => {
  return (
    <>
      {" "}
      <h1>Random Number (Server Side Rendering)</h1>
      <p>The random number is: {value}</p>
      <p>This page was generated on request.</p>
    </>
  );
};

export default ServerProps;
