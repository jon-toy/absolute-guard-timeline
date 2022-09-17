import "./App.css";
import "./components/FGCTimeline";
import FGCTimeline from "./components/FGCTimeline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import axios from "axios";

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
      contrastText: "#bdbdbd",
    },
    neutral: {
      main: "#000",
      contrastText: "#fff",
    },
    background: {
      // green
      default: "#cdd1c4",
    },
  },
});

function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(
        `https://mxdory1h3f.execute-api.us-west-1.amazonaws.com/absolute-guard-timeline`
      )
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  if (!post) return null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FGCTimeline rows={post.rows} />
    </ThemeProvider>
  );
}

export default App;
