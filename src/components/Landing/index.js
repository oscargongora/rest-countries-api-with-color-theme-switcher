import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../context";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import { makeStyles } from "@material-ui/core/styles";
import { CountryList } from "../Country/";

const useStyles = makeStyles((theme) => ({
  input: {
    borderRadius: 4,
    boxShadow: "3px 3px 9px rgba(0,0,0,0.2)",
    background: theme.palette.type === "dark" ? "hsl(209, 23%, 22%)" : "white",
    "& ::placeholder": {
      opacity: 1,
    },
    "& fieldset": {
      border: "none",
    },
  },
}));

const Landing = () => {
  const classes = useStyles();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleCountryChange = (ev) => {
    setCountry(ev.target.value);
  };

  const handleRegionChange = (ev) => {
    setRegion(ev.target.value);
  };
  return (
    <div className="landing">
      <div className="landing-header">
        <TextField
          className={classes.input}
          id="country-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faSearch} />
              </InputAdornment>
            ),
          }}
          fullWidth={true}
          variant="outlined"
          placeholder="Search for a country..."
          value={country}
          type="text"
          style={{ marginBottom: 48 }}
          onChange={handleCountryChange}
        />
        <Select
          className={classes.input}
          id="region-input"
          value={region}
          displayEmpty
          variant="outlined"
          style={{ width: "60%" }}
          placeholder="Search for a country..."
          required
          onChange={handleRegionChange}
        >
          <MenuItem value="">Filter by Region</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="America">America</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </div>
      <CountryList country={country} region={region}></CountryList>
    </div>
  );
};

export default Landing;
