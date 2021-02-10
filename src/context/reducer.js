export default (state, action) => {
  switch (action.type) {
    case "TOGGLE_APP_MODE":
      return {
        ...state,
        appMode: state.appMode === "dark" ? "light" : "dark",
      };
    case "SET_APP_MODE":
      return {
        ...state,
        appMode: action.data,
      };
    case "SET_COUNTRIES":
      return {
        ...state,
        data: {
          countries: action.data,
          countriesCodes: action.data.reduce(
            (acc, c) => ({ ...acc, [c.alpha3Code]: c.name }),
            {}
          ),
        },
      };
    default:
      return state;
  }
};
