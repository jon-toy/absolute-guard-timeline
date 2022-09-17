import "./App.css";
import "./components/FGCTimeline";
import FGCTimeline from "./components/FGCTimeline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      // blue
      main: "#5c80bc",
      contrastText: "#e8c547",
    },
    secondary: {
      // grey
      dark: "#30323d",
      main: "#4D5061",
    },
    background: {
      // green
      default: "#cdd1c4",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FGCTimeline />
    </ThemeProvider>
  );
}

export default App;
