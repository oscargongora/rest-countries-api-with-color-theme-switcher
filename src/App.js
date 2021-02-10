import { useContext } from "react";
import { AppContext } from "./context";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import { CountryDetails } from "./components/Country";

import { ThemeProvider } from "@material-ui/styles";
import { getTheme } from "./components/theme";

function App() {
  const { state } = useContext(AppContext);
  const theme = getTheme(state);
  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${state.appMode}`}>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/country/:name">
              <CountryDetails />
            </Route>
            <Route path="/">
              <Landing></Landing>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
