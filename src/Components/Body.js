import React from "react";
import Box from "./Box";
import "./Body.css";

function Body({
  h1,
  c11,
  c12,
  c13,
  c14,
  h2,
  c21,
  c22,
  c23,
  c24,
  h3,
  c31,
  c32,
  h4,
  c41,
  btn,
  invest,
  gov,
  class1,
  class2,
  class3,
  class4,
  bodyText,
}) {
  return (
    <div className="body">
      <h1>Services For You</h1>
      <div className="cards">
        <div className="col1">
          <Box
            extraClass={class1}
            head={h1}
            c1={c11}
            c2={c12}
            c3={c13}
            c4={c14}
            invest={invest}
            btn={btn}
            gov={gov}
          />
          <Box
            extraClass={class2}
            head={h2}
            c1={c21}
            c2={c22}
            c3={c23}
            c4={c24}
            invest={invest}
            btn={btn}
            gov={gov}
          />
        </div>
        <div className="col2">
          <Box
            extraClass={class3}
            head={h3}
            c1={c31}
            c2={c32}
            invest={invest}
            btn={btn}
            gov={gov}
          />
          <Box
            extraClass={class4}
            head={h4}
            c1={c41}
            invest={invest}
            btn={btn}
            gov={gov}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
