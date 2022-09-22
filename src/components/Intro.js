import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function Intro() {
  return (
    <Box
      sx={{
        padding: "1em",
        margin: "auto",
      }}
    >
      <Typography component="div">
        In our adventures interviewing guests on the Absolute Guard Podcast, we
        regularly relive or unearth significant events from within the Arizona
        Fighting Game Community. Those events are chronicled in this timeline of
        Arizona's competitive fighting game history. Check back weekly as we
        interview more of Arizona's fighting game community and add more events
        to the timeline!
        <br />
        <br />
        -Jon and Benny
      </Typography>
      <Typography component="div">
        <ul>
          <li>
            <Link href="https://open.spotify.com/show/3pmuG05oezk13kUj6AifnU?si=zLt9kOtTTLGMPmFrkbu8ow">
              Follow Absolute Guard on Spotify
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/absolute_guard">
              Follow Absolute Guard on Twitter
            </Link>
          </li>
          <li>
            <Link href="https://twitch.tv/spiralseries">
              Follow Spiral Series on Twitch
            </Link>
          </li>
          <li>
            <Link href="https://youtube.com/playlist?list=PL6arl_hzkA70yl2XzdczZoG1NbIbLe8fD">
              Subscribe to Spiral Series on YouTube
            </Link>
          </li>
        </ul>
      </Typography>
    </Box>
  );
}
