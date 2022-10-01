import "./App.css";
import FGCTimeline from "./components/FGCTimeline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import axios from "axios";
import bg from "./podcastlayout.png";
import Paper from "@mui/material/Paper";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import Divider from "@mui/material/Divider";
import Controls from "./components/Controls";

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

const defaultControls = {
  sort: "asc",
};

const defaultFilters = { showYearNode: false, showEraNode: true };

function App() {
  const [post, setPost] = React.useState(null);
  //const handlePost = (post) => setPost(post);

  const [controls, setControls] = React.useState(defaultControls);
  const handleControls = (controls) => {
    setControls(controls);
  };

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
        <Intro />
        <Divider variant="middle" sx={{ maxWidth: "800px", margin: "auto" }} />
        <Controls controls={controls} handler={handleControls} />
        <Divider variant="middle" sx={{ maxWidth: "800px", margin: "auto" }} />
        <FGCTimeline
          rows={post.rows}
          filters={defaultFilters}
          controls={controls}
        />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
