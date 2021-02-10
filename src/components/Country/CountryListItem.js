import React from "react";
import { useHistory } from "react-router-dom";

const CountryListItem = ({ country }) => {
  const history = useHistory();

  const handleCountryNameClick = () => {
    history.push(`/country/${country.name}`);
  };

  return (
    <div className="country-item">
      <div className="flag">
        <img src={country.flag} alt={`Flag of ${country.name}`} />
      </div>
      <div className="country-item-details">
        <h1 className="name" onClick={handleCountryNameClick}>
          {country.name}
        </h1>
        <p className="population">
          <strong>Population: </strong>
          {country.population
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
        </p>
        <p className="Region">
          <strong>Region: </strong>
          {country.region}
        </p>
        <p className="Capital">
          <strong>Capital: </strong>
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryListItem;
