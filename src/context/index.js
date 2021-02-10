import React, { createContext, useReducer, useEffect } from "react";
import appReducer from "./reducer";

export const AppContext = createContext();

const initialState = {
  appMode: "dark",
  data: {
    countries: [],
    countriesCodes: [],
  },
};

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    if (!localStorage.getItem("appMode")) {
      localStorage.setItem("appMode", "dark");
    } else {
      dispatch({
        type: "SET_APP_MODE",
        data: localStorage.getItem("appMode"),
      });
    }

    const fetchCountries = () => {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "SET_COUNTRIES", data });
        })
        .catch((error) => alert(error));
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    localStorage.setItem("appMode", state.appMode);
  }, [state.appMode]);

  const toggleAppMode = () => {
    dispatch({
      type: "TOGGLE_APP_MODE",
    });
  };

  return (
    <AppContext.Provider value={{ state, toggleAppMode, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
