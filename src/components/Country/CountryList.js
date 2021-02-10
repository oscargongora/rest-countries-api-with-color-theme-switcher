import React, { useContext, useEffect } from "react";
import CountryListItem from "./CountryListItem";
import { countries as _countries } from "../../data";
import Spinner from "../UI/Spinner";
import { AppContext } from "../../context";

const CountryList = ({ country, region }) => {
  const {
    dispatch,
    state: {
      data: { countries },
    },
  } = useContext(AppContext);

  useEffect(() => {
    const fetchCountries = () => {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "SET_COUNTRIES", data });
        })
        .catch((error) => alert(error));
    };

    fetchCountries();
    // console.log("eff1");
  }, []);

  if (countries === null || countries === undefined) return <Spinner />;

  return (
    <div className="country-list">
      {countries
        .filter(
          (c) =>
            c.name.toLowerCase().includes(country.toLowerCase()) &&
            c.region.toLowerCase().includes(region.toLowerCase())
        )
        .map((country) => (
          <CountryListItem key={country.name} country={country} />
        ))}
    </div>
  );
};

export default CountryList;
