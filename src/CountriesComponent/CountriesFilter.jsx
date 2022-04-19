import React from "react";

const Countriesfilter = ({ filterRegion, handleRegionChange }) => {
  return (
    <>
      <h2 className="filerTitle">&nbsp;FilterByRegion</h2>
      <div className="form-check form-switch f">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onChange={() => handleRegionChange("All")}
          name="name"
          value="All"
          checked={filterRegion === "All"}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          All
        </label>
      </div>{" "}
      <div className="form-check form-switch f">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onChange={() => handleRegionChange("Africa")}
          name="name"
          value="Africa"
          checked={filterRegion === "Africa"}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Africa
        </label>
      </div>
      <div className="form-check form-switch f">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onChange={() => handleRegionChange("Asia")}
          name="name"
          value="Asia"
          checked={filterRegion === "Asia"}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Asia
        </label>
      </div>{" "}
      <div className="form-check form-switch f">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onChange={() => handleRegionChange("Europe")}
          name="name"
          value="Europe"
          checked={filterRegion === "Europe"}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Europe
        </label>
      </div>{" "}
      <div className="form-check form-switch f">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onChange={() => handleRegionChange("Americas")}
          name="name"
          value="Americas"
          checked={filterRegion === "Americas"}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Americas
        </label>
      </div>{" "}
      <div className="form-check form-switch f">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onChange={() => handleRegionChange("Oceania")}
          name="name"
          value="Oceania"
          checked={filterRegion === "Oceania"}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Oceania
        </label>
      </div>
      <div className="form-check form-switch f">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onChange={() => handleRegionChange("Polar")}
          name="name"
          value="Polar"
          checked={filterRegion === "Polar"}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Polar
        </label>
      </div>{" "}
      <br />
    </>
  );
};

export default Countriesfilter;
