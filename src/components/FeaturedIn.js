import * as React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import Stack from "@mui/material/Stack";
import epData from "../epData.json";

const styles = {
  paperContainer: {
    padding: "1em 0em",
  },
};
export default function FeaturedIn({ data }) {
  let ep = epData.find((ep) => ep.tag === data);
  if (!ep) ep = { id: -1 };
  return (
    <div style={styles.paperContainer}>
      <Typography variant="caption" color="text.secondary" component="span">
        {ep.title}
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          icon={<YouTubeIcon />}
          label="YouTube"
          component="a"
          target="_blank"
          href={ep.youtube}
          clickable
        />
        <Chip
          icon={<HeadsetOutlinedIcon />}
          label="Spotify"
          component="a"
          target="_blank"
          href={ep.spotify}
          clickable
        />
      </Stack>
    </div>
  );
}
