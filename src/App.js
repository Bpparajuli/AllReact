import React from "react";
import ComA from "./Component/ComA";
import { Route, Routes } from "react-router-dom";
import CovidTable from "./Component/CovidTable";
import Header from "./Header";
import Error from "./Component/Error";
import Menu from "./Component/Navbar";
import Calculator from "./Component/Calculator";
import City from "./Component/City";
import Regform from "./Component/Regform";
import HeadComp from "./Component/HeadComp";
import Tempapp from "./Component/Tempapp";
import Todo from "./Component/Todo";
import Quote from "./Component/Quote";
const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<CovidTable />} />
        <Route path="/comA" element={<ComA />} />
        <Route path="/header" element={<Header />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/city" element={<City />} />
        <Route path="/contact" element={<Regform />} />
        <Route path="/Headcomp" element={<HeadComp />} />
        <Route path="/tempapp" element={<Tempapp />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<Error />} />
        <Route path="AllReact" element={<CovidTable />} />
      </Routes>
    </>
  );
};
export default App;
