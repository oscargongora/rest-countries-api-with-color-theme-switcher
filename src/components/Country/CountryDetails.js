import React, { useEffect, useState, useContext } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../UI/Spinner";
import { AppContext } from "../../context";

const useStyles = makeStyles((theme) => ({
  button: {
    background:
      theme.palette.type === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    color:
      theme.palette.type === "dark" ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)",
    "&:hover": {
      background:
        theme.palette.type === "dark"
          ? "hsl(209, 23%, 22%)"
          : "hsl(0, 0%, 100%)",
    },
  },
}));

const CountryDetails = () => {
  const {
    dispatch,
    state: {
      data: { countriesCodes },
    },
  } = useContext(AppContext);
  const classes = useStyles();
  const [country, setCountry] = useState(null);
  const history = useHistory();
  const { name } = useParams();

  useEffect(() => {
    const fetchCountry = (name) => {
      fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then((response) => {
          if (response.status === 404) {
            alert(`There is no country coded ${name}.`);
            history.push("/");
            return null;
          }
          return response.json();
        })
        .then((data) => data && setCountry(data[0]))
        .catch((error) => alert(error));
    };

    fetchCountry(name);
  }, [name]);

  const handleBackButtonClick = () => {
    history.goBack();
  };

  if (country === null || country === undefined) return <Spinner></Spinner>;

  return (
    <div className="country-details">
      <div className="country-details-header">
        <Button
          className={classes.button}
          variant="contained"
          startIcon={
            <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 16 }} />
          }
          onClick={handleBackButtonClick}
        >
          Back
        </Button>
      </div>
      <div className="country-details-body">
        <div className="flag">
          <img src={country.flag} alt={`Flag of ${country.name}`} />
        </div>
        <div className="details">
          <div className="block-01">
            <h1 className="name">{country.name}</h1>
            <p>
              <strong>Native Name: </strong>
              {country.nativeName}
            </p>
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
            <p className="sub-region">
              <strong>Sub Region: </strong>
              {country.subregion}
            </p>
            <p className="Capital">
              <strong>Capital: </strong>
              {country.capital}
            </p>
          </div>

          <div className="separator"></div>
          <div className="block-02">
            <p>
              <strong>Top Level Domain: </strong>
              {country.topLevelDomain[0]}
            </p>
            <p>
              <strong>Currencies: </strong>
              {country.currencies.map((curr) => curr.name).join(", ")}
            </p>
            <p>
              <strong>Languages: </strong>
              {country.languages.map((lan) => lan.name).join(", ")}
            </p>
          </div>
          <div className="block-03">
            <h2>Border Countries:</h2>
            <div className="borders">
              {country.borders.map((c) => (
                <Link key={c} to={`/country/${countriesCodes[c]}`}>
                  {countriesCodes[c]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
