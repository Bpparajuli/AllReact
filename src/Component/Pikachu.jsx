import React, { useState, useEffect } from "react";
import axios from "axios";
import "./pikachu.css";
const Pikachu = () => {
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
          <h1>Lets Play the Game 👍</h1>
          <h2>Choose any number to know the moves of pikachu</h2>
          <h4 className="head-select">
            Select any number:
            <select
              value={num}
              onChange={(event) => {
                SetNum(event.target.value);
              }}
            >
              {" "}
              <option value="1">1 </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </h4>
          <h3>
            You Choosed the option <span style={{ color: "red" }}>{num}</span>
          </h3>
          <h3>
            Which is <span className="focus">{name} </span>
          </h3>
          <p className="focus-box">
            {name} has <span style={{ color: "red" }}> {moves}</span> Moves.
          </p>
        </div>
      </div>
    </>
  );
};

export default Pikachu;
