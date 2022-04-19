import React from "react";
import { useHistory } from "react-router-dom";

const CountriesDetails = () => {
  const c = useHistory();
  const cc = c.location.state;

  // console.log(country);
  // React.useEffect(() => {
  //   var x = window.location;
  //   setName(x.pathname.split("/")[2]);
  // }, []);
  // React.useEffect(() => {
  //   if (name) {
  //     fetch(`https://restcountries.com/v2/alpha/${name}`)
  //       .then((res) => res.json())
  //       .then((data) => setCountry(data));
  //   }
  // }, [name]);
  return (
    <div className="row">
      {cc && (
        <div className="col-6 top">
          <img
            src={cc.flag}
            className="bigflagimg"
            width="300px"
            height="400"
            alt=""
          />
        </div>
      )}

      {cc && (
        <div className="CountriesFullDetails top col-6">
          <table className="table  tableBorder">
            <tbody>
              <tr>
                <td>
                  {" "}
                  <h4>Name:</h4>
                </td>
                <td>
                  <h4> {cc.name ? cc.name : ""}</h4>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h4>Capital : </h4>
                </td>
                <td>
                  <h4>{cc.capital ? cc.capital : ""}</h4>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h4>NativeName:</h4>
                </td>
                <td>{cc.nativeName ? cc.nativeName : ""}</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h4>regionalBlocs:</h4>
                </td>
                <td>
                  <h4>
                    {" "}
                    {cc.regionalBlocs ? cc.regionalBlocs[0].acronym : ""}(
                    {cc.regionalBlocs ? cc.regionalBlocs[0].name : ""})
                  </h4>
                </td>
              </tr>
              <tr>
                <td>
                  <h4> Borders :</h4>
                </td>
                <td>
                  <h4> {cc.borders ? cc.borders.join() : ""}</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>TimeZones:</h4>
                </td>
                <td>
                  <h4>{cc.timezones ? cc.timezones : ""}</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>CallingCodes:</h4>
                </td>
                <td>
                  <h4>{cc.callingCodes ? cc.callingCodes : ""}</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Area:</h4>
                </td>
                <td>
                  <h4>{cc.area ? cc.area : ""}</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>demonym:</h4>
                </td>
                <td>
                  <h4>{cc.demonym ? cc.demonym : ""}</h4>
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default CountriesDetails;
