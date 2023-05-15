import React, { useState } from "react";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [inputValue, setInputValue] = useState("Kathmandu");
  const [submittedCity, setSubmittedCity] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const apiKey = "f8381a854f78b0b30eb99984da2b39c4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const resJson = await response.json();
    setCity(resJson.main);
    setSubmittedCity(inputValue);
    setInputValue("");
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="text-center p-5 bg-black">
          <h3 className="text-bg-warning p-2">Current Tempreture </h3>

          <form onSubmit={handleFormSubmit}>
            <input
              type="search"
              className="p-1"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button type="submit" className="btn btn-success rounded">
              Submit
            </button>
          </form>
          {city && (
            <div className="information">
              <h2 className="city text-light">
                <i className="fa-solid fa-street-view"></i>
                {submittedCity}
              </h2>
              <h2 className="detailtemp text-info">{city.temp}°Celsius</h2>
              <p className="text-success">
                Min: {city.temp_min}°Celsius - Max: {city.temp_max}°Celsius
              </p>
            </div>
          )}
          {!city && (
            <p className="text-danger p-3">
              City Name not Entered or Spelling mistake
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Tempapp;
