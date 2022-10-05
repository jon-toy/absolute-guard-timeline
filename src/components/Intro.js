import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { TagCloud } from "react-tagcloud";
import "./styles.css";
import epData from "../epData.json";

const data = [
  { value: "Lukesballs", count: 25 },
  { value: "Rickdawg", count: 18 },
  { value: "Shaundude", count: 38 },
  { value: "WillGetPaid", count: 30 },
  { value: "Sabre", count: 28 },
  { value: "DragonNinja", count: 25 },
  { value: "RochKiss", count: 33 },
  { value: "FrankAZHP", count: 20 },
  { value: "Driftwood", count: 22 },
  { value: "KingHippo", count: 7 },
  { value: "NinjaNam", count: 25 },
  { value: "Nefertiti", count: 15 },
];

// custom random color options
// see randomColor package: https://github.com/davidmerfield/randomColor
const options = {
  luminosity: "dark",
  hue: "monochrome",
  format: "rgba",
  alpha: 0.5, // e.g. 'rgba(9, 1, 107, 0.5)',
};

function openTag(tag) {
  const ep = epData.find((ep) => ep.guests.includes(tag.value));
  if (ep && ep.youtube) window.open(ep.youtube);
}

export default function Intro() {
  // TODO Get the hover pointer working
  return (
    <Box
      sx={{
        padding: "1em",
        margin: "auto",
        maxWidth: "800px",
      }}
    >
      <p align="center">
        <TagCloud
          minSize={28}
          maxSize={35}
          colorOptions={options}
          tags={data}
          className="guestTagCloud"
          onClick={(tag) => openTag(tag)}
        />
      </p>
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
