import React from "react";
import Countriesdata from "./CountriesComponent/CountriesData";
import Countriesfilter from "./CountriesComponent/CountriesFilter";
import CountriesSubregionfilter from "./CountriesComponent/CountriesSubRegionFilter";

const Countries = () => {
  const [countrys, setCountrys] = React.useState([]);
  const [sort, setSort] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const [filterRegion, setFilterRegion] = React.useState("");
  const [currentFilter, setCurrentFilter] = React.useState([]);
  const [filterLength, setFilterLength] = React.useState([]);
  React.useEffect(() => {
    console.log(filterLength);
    setLoad(true);
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountrys([...data]);
        setFilterRegion("All");
        setLoad(false);
      });
  }, []);
  React.useEffect(() => {
    filterByRegion();
  }, [filterRegion]);
  // const temp = countrys.filter((c) => console.log(c.subregion));

  const handleRegionChange = (filter) => {
    setFilterRegion(filter);
  };
  const handleSubRegionChange = (e) => {
    console.log(e.target.value);
    setFilterRegion(e.target.value);
  };
  const filterByRegion = () => {
    if (filterRegion === "All") {
      setCurrentFilter([...countrys]);
      setFilterLength([...countrys]);
    }
    if (filterRegion === "Africa") {
      const temp = countrys.filter((c) => c.region === "Africa");
      setCurrentFilter([...temp]);
      setFilterLength([...temp]);
    }
    if (filterRegion === "Asia") {
      const temp = countrys.filter((c) => c.region === "Asia");
      setCurrentFilter([...temp]);
      setFilterLength([...temp]);
    }
    if (filterRegion === "Europe") {
      const temp = countrys.filter((c) => c.region === "Europe");
      setCurrentFilter([...temp]);
      setFilterLength([...temp]);
    }
    if (filterRegion === "Oceania") {
      const temp = countrys.filter((c) => c.region === "Oceania");
      setCurrentFilter([...temp]);
      setFilterLength([...temp]);
    }
    if (filterRegion === "Americas") {
      const temp = countrys.filter((c) => c.region === "Americas");
      setCurrentFilter([...temp]);
      setFilterLength([...temp]);
    }
    if (filterRegion === "Polar") {
      const temp = countrys.filter((c) => c.region === "Polar");
      setCurrentFilter([...temp]);
      setFilterLength([...temp]);
    }
    if (filterRegion === "Northern Africa") {
      const temp = countrys.filter((c) => c.subregion === "Northern Africa");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Middle Africa") {
      const temp = countrys.filter((c) => c.subregion === "Middle Africa");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Southern Africa") {
      const temp = countrys.filter((c) => c.subregion === "Southern Africa");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Eastern Africa") {
      const temp = countrys.filter((c) => c.subregion === "Eastern Africa");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Western Africa") {
      const temp = countrys.filter((c) => c.subregion === "Western Africa");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Western Asia") {
      const temp = countrys.filter((c) => c.subregion === "Western Asia");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Central Asia") {
      const temp = countrys.filter((c) => c.subregion === "Central Asia");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "South-Eastern Asia") {
      const temp = countrys.filter((c) => c.subregion === "South-Eastern Asia");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Eastern Asia") {
      const temp = countrys.filter((c) => c.subregion === "Eastern Asia");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Southern Asia") {
      const temp = countrys.filter((c) => c.subregion === "Southern Asia");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Eastern Europe") {
      const temp = countrys.filter((c) => c.subregion === "Eastern Europe");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Northern Europe") {
      const temp = countrys.filter((c) => c.subregion === "Northern Europe");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Central Europe") {
      const temp = countrys.filter((c) => c.subregion === "Central Europe");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Southern Europe") {
      const temp = countrys.filter((c) => c.subregion === "Southern Europe");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Western Europe") {
      const temp = countrys.filter((c) => c.subregion === "Western Europe");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Caribbean") {
      const temp = countrys.filter((c) => c.subregion === "Caribbean");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Northern America") {
      const temp = countrys.filter((c) => c.subregion === "Northern America");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Central America") {
      const temp = countrys.filter((c) => c.subregion === "Central America");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "South America") {
      const temp = countrys.filter((c) => c.subregion === "South America");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Australia and New Zealand") {
      const temp = countrys.filter(
        (c) => c.subregion === "Australia and New Zealand"
      );
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Polynesia") {
      const temp = countrys.filter((c) => c.subregion === "Polynesia");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Melanesia") {
      const temp = countrys.filter((c) => c.subregion === "Melanesia");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "Micronesia") {
      const temp = countrys.filter((c) => c.subregion === "Micronesia");
      setCurrentFilter([...temp]);
    }
    if (filterRegion === "none") {
      const temp = countrys.filter((c) => c.subregion === "");
      setCurrentFilter([...temp]);
    }
  };

  const handlePopulationSortLH = () => {
    const country = currentFilter.sort((a, b) => a.population - b.population);
    setCurrentFilter([...country]);
  };
  const handlePopulationSortHL = () => {
    const country = currentFilter.sort((a, b) => b.population - a.population);
    setCurrentFilter([...country]);
  };
  const handleSortByName = () => {
    if (!sort) {
      const country = currentFilter.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        } else {
          return 0;
        }
      });
      setSort(true);
      setCurrentFilter([...country]);
    }
    if (sort) {
      const country = currentFilter.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
      setSort(false);
      setCurrentFilter([...country]);
    }
  };

  return (
    <div className="totalData">
      <div>
        {load && (
          <div className="load">
            <div className="loader"></div>
          </div>
        )}

        <div className="right row">
          <div className="row top">
            {/* <div className="col-1 "></div> */}
            <div className="col-3 filter">
              <h3>Filters</h3>
            </div>
            {/* <div className="col-1"></div> */}
            <div className="col-9 headRight">
              <div className="row">
                <div className="col-3">
                  <b className="sortBy">Sort By</b>
                </div>
                <div className="col-3">
                  <p className="sort" onClick={handleSortByName}>
                    CountryName
                  </p>
                </div>
                <div className="col-3">
                  <p className="sort" onClick={handlePopulationSortLH}>
                    Population--Low To High
                  </p>
                </div>
                <div className="col-3">
                  <p className="sort" onClick={handlePopulationSortHL}>
                    {" "}
                    Population--High To Low
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-3  width">
              <div className="">
                <h5 className="filterlength">
                  {/* Total-{filterRegion}-Countries:{filterLength.length} */}
                </h5>
                <Countriesfilter
                  filterRegion={filterRegion}
                  handleRegionChange={handleRegionChange}
                />
              </div>
              <h2 className="filerTitle">&nbsp;FilterBySubRegion</h2>
              <CountriesSubregionfilter
                handleSubRegionChange={handleSubRegionChange}
                titleName="Africa"
                name0="none"
                name1="Northern Africa"
                name2="Middle Africa"
                name3="Southern Africa"
                name4="Eastern Africa"
                name5="Western Africa"
              />
              &nbsp;
              <CountriesSubregionfilter
                handleSubRegionChange={handleSubRegionChange}
                titleName="Asia"
                name0="none"
                name1="Western Asia"
                name2="Central Asia"
                name3="South-Eastern Asia"
                name4="Eastern Asia"
                name5="Southern Asia"
                filterRegion={filterRegion}
                countrys={countrys}
                setCurrentFilter={setCurrentFilter}
              />
              &nbsp;
              <CountriesSubregionfilter
                handleSubRegionChange={handleSubRegionChange}
                titleName="Europe"
                name0="none"
                name1="Eastern Europe"
                name2="Northern Europe"
                name3="Central Europe"
                name4="Southern Europe"
                name5="Western Europe"
                filterRegion={filterRegion}
                countrys={countrys}
                setCurrentFilter={setCurrentFilter}
              />
              &nbsp;
              <CountriesSubregionfilter
                handleSubRegionChange={handleSubRegionChange}
                titleName="Americas"
                name0="none"
                name1="Caribbean"
                name2="Northern America"
                name3="Central America"
                name4="South America"
                filterRegion={filterRegion}
                countrys={countrys}
                setCurrentFilter={setCurrentFilter}
              />
              &nbsp;
              <CountriesSubregionfilter
                handleSubRegionChange={handleSubRegionChange}
                titleName="Oceania"
                name0="none"
                name1="Polynesia"
                name2="Australia and New Zealand"
                name3="Melanesia"
                name4="Micronesia"
                filterRegion={filterRegion}
                countrys={countrys}
                setCurrentFilter={setCurrentFilter}
              />
            </div>

            <Countriesdata currentFilter={currentFilter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
