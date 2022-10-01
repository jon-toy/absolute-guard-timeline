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
      maxWidth: "800px",
      margin: "auto",
    },
    title: {
      color: "#e8c547",
      fontSize: "large",
      fontWeight: "bold",
      "&::WebkitTextStrokeWidth": "1px",
      "&::WebkitTextStrokeColor": "black",
    },
    subtitle: {
      color: "#e8c547",
      fontSize: "xxx-large",
      fontWeight: "bold",
      "&::WebkitTextStrokeWidth": "1px",
      "&::WebkitTextStrokeColor": "black",
    },
  };
  return (
    <Paper style={styles.paperContainer}>
      <Typography style={styles.title} component="div">
        Arizona FGC
      </Typography>
      <Typography style={styles.subtitle} component="div">
        Absolute Guard Timeline
      </Typography>
    </Paper>
  );
}
