import { createMuiTheme } from "@material-ui/core/styles";

export const getTheme = ({ appMode }) => {
  return createMuiTheme({
    palette: {
      type: appMode,
      background: {
        paper: appMode === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)",
      },
      text: {
        primary: appMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
      },
    },
  });
};
