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
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonIcon from "@mui/icons-material/Person";

export default function FGCTimelineItem({ data }) {
  let icon = <AccountCircleRoundedIcon />;
  let variant = "outlined";
  let timelineDotColor = "primary";
  switch (data.eventType) {
    case "Game Release":
      icon = <SportsEsportsRoundedIcon color="secondary" />;
      variant = "filled";
      timelineDotColor = "grey";
      break;
    case "National Event":
      variant = "filled";
      timelineDotColor = "secondary";
      icon = <PublicOutlinedIcon />;
      break;
    case "Local Event":
      icon = <LocationCityOutlinedIcon />;
      break;
    case "Player Event":
      variant = "filled";
      icon = <PersonIcon color="neutral" />;
      break;
    default:
  }

  if (!data.relevantGuests) data.relevantGuests = "";

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
      >
        {data.eventType}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        <TimelineDot color={timelineDotColor} variant={variant}>
          {icon}
        </TimelineDot>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "24px", px: 2 }}>
        <Typography component="span" variant="h6">
          {data.event}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.relevantGuests}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
