import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function OutlinedCard() {
  const styles = {
    paperContainer: {
      padding: "1em",
      textAlign: "center",
      backgroundColor: "#5c80bc",
      border: ".5em solid #4d5061",
    },
    title: {
      color: "#e8c547",
      fontSize: "large",
      fontWeight: "bold",
      "&::-webkit-text-stroke-width": "1px",
      "&::-webkit-text-stroke-color": "black",
    },
    subtitle: {
      color: "#e8c547",
      fontSize: "xxx-large",
      fontWeight: "bold",
      "&::-webkit-text-stroke-width": "1px",
      "&::-webkit-text-stroke-color": "black",
    },
  };
  return (
    <Paper style={styles.paperContainer}>
      <Typography style={styles.title} component="div">
        Absolute Guard Timeline
      </Typography>
      <Typography style={styles.subtitle} component="div">
        Arizona FGC
      </Typography>
    </Paper>
  );
}
