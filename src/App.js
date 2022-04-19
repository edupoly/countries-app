import React from "react";
import "./style.css";
import NavBar from "./NavBar";

import Countries from "./Countries";
import CounriesDetails from "./CountriesDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "@mui/material";
import { Route } from "react-router-dom";
export default function App() {
  return (
    <div className=" app">
      <NavBar />
      <Route path="/Countries">
        <Countries />
      </Route>
      <Route path="/details/:a">
        <CounriesDetails></CounriesDetails>
      </Route>
    </div>
  );
}
