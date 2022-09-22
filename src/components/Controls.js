import * as React from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function Controls({ controls, handler }) {
  const [localControls, setControls] = React.useState(controls);
  const handleAsc = () => {
    const newControls = {
      ...localControls,
      sort: "asc",
    };
    setControls(newControls);
    handler(newControls);
  };
  const handleDesc = () => {
    const newControls = {
      ...localControls,
      sort: "desc",
    };
    setControls(newControls);
    handler(newControls);
  };

  const label =
    localControls.sort === "asc" ? "Show Descending" : "Show Ascending";

  return (
    <Box
      sx={{
        padding: "1em",
        margin: "auto",
      }}
    >
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              onClick={localControls.sort === "asc" ? handleDesc : handleAsc}
            />
          }
          label={label}
        />
      </FormGroup>
    </Box>
  );
}
