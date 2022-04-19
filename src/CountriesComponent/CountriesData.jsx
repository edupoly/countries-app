import React from "react";
import { Link } from "react-router-dom";
const Countriesdata = ({ currentFilter }) => {
  return (
    <>
      <div className=" col-9">
        {currentFilter &&
          currentFilter.map((con, i) => (
            <Link
              className="con"
              to={{ pathname: `/details/${con.alpha3Code}`, state: con }}
            >
              <div className="side row border ">
                <div className="col-3">
                  <img
                    className="flagimg"
                    src={con.flag}
                    width="200px"
                    height="250px"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <h3>{con.name}</h3>
                  <ul className="ulLists" style={{ color: "black" }}>
                    <li>Capital:{con.capital}</li>
                    <li>Region:{con.region}</li>
                    <li>Sub-Region:{con.subregion}</li>

                    <li>
                      Currencies:
                      {con.currencies ? con.currencies[0].name : ""},
                      {con.currencies ? con.currencies[0].code : ""},(
                      {con.currencies ? con.currencies[0].symbol : ""})
                    </li>
                    <li>
                      Languages:
                      {con.languages ? con.languages[0].name : ""}
                    </li>
                  </ul>
                </div>
                <div className="col-4">
                  <span style={{ color: "black", fontSize: "22px" }}>
                    Population:{con.population}
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Countriesdata;
