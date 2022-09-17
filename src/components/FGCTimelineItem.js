import * as React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function FGCTimelineItem({ data }) {
  let icon = <AccountCircleRoundedIcon />;
  switch (data.eventType) {
    case "Game Release":
      icon = <SportsEsportsOutlinedIcon />;
      break;
    case "National Event":
      icon = <PublicOutlinedIcon />;
      break;
    case "Local Event":
      icon = <LocationCityOutlinedIcon />;
      break;
    case "Player Event":
      icon = <AccountCircleOutlinedIcon />;
      break;
    default:
  }

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
      >
        {data.relevantGuests.split(",").map((guest) => {
          if (guest.trim().length > 0)
            return <AccountCircleRoundedIcon key={guest} />;
          else return "";
        })}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        <TimelineDot color="primary" variant="outlined">
          {icon}
        </TimelineDot>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "24px", px: 2 }}>
        <Typography component="span">{data.event}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
