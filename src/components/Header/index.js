import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../context";

const Header = () => {
  const { state, toggleAppMode } = useContext(AppContext);
  return (
    <header>
      <div className="logo">Where in the world?</div>
      <div className="app-mode-toggle" onClick={(ev) => toggleAppMode()}>
        {state.appMode === "dark" ? (
          <>
            <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
            <p>Dark Mode</p>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            <p>Light Mode</p>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
