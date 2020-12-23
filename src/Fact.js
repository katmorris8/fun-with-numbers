import React from "react";
import "./Fact.css";

const Fact = ({ fact, number }) => {
  return (
    <>
      <p className="fact avenir">{number}</p>
      <p className="fact avenir">{fact}</p>
    </>
  );
};

export default Fact;
