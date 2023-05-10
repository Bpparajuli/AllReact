import React, { useEffect, useState } from "react";
import "./covidtable.css";

const CovidTable = (props) => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    setData(actualData.statewise);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div className="statewise">
      <div className="Container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-blod"> India</span> Covid 19 Data
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>S.N.</th>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((curElem, ind) => {
                return (
                  <tr className="border-dark" key={ind}>
                    <th>{ind}</th>
                    <td>{curElem.state}</td>
                    <td>{curElem.confirmed}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CovidTable;
