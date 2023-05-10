import React, { useState, useEffect } from "react";
import axios from "axios";
const ComA = () => {
  const [num, SetNum] = useState();
  const [name, SetName] = useState();
  const [moves, SetMoves] = useState();

  useEffect(() => {
    //alert("hi");
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      SetName(res.data.name);
      SetMoves(res.data.moves.length);
    }
    getData();
  });
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          {" "}
          <h1>
            You Choosed the option <span style={{ color: "red" }}>{num}</span>
          </h1>
          <p>
            You Choosed{" "}
            <span style={{ color: "red", textTransform: "uppercase" }}>
              {name}{" "}
            </span>
          </p>
          <p>
            <span style={{ color: "red", textTransform: "uppercase" }}>
              {name}
            </span>{" "}
            has <span style={{ color: "red" }}> {moves}</span> Moves.
          </p>
          <select
            value={num}
            onChange={(event) => {
              SetNum(event.target.value);
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ComA;
