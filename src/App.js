import "./App.css";
import "./components/FGCTimeline";
import FGCTimeline from "./components/FGCTimeline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import axios from "axios";
import bg from "./podcastlayout.png";
import Paper from "@mui/material/Paper";
import Banner from "./components/Banner";

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

  const styles = {
    paperContainer: {
      backgroundImage: `url(${bg})`,
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#cdd1c4",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={styles.paperContainer}>
        <Banner />
        <FGCTimeline rows={post.rows} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
