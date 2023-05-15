import React, { useEffect, useState } from "react";

const Tempapp = () => {
  const [City, setCity] = useState(null); // Initialize City state with null
  const [inputValue, setInputValue] = useState("Kathmandu");

  useEffect(() => {
    const fetchApi = async () => {
      const apiKey = "d173a01f9d1825e69d87248b2610b77d";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [inputValue]);

  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="text-center p-5 bg-black">
          <input
            type="search"
            className="input"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          {!City ? (
            <p>No data Found</p>
          ) : (
            <div className="information">
              <h2 className="city text-light">
                <i className="fa-solid fa-street-view"></i>
                {inputValue}
              </h2>
              <h2 className="detailtemp text-info">{City.temp}°Celsius</h2>
              <h3>Temp Detail</h3>
              <p>
                Min: {City.temp_min}°Celsius - Max: {City.temp_max}°Celsius
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tempapp;
