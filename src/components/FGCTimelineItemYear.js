import * as React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

export default function FGCTimelineItemYear({ year }) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
      ></TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        <TimelineDot
          color="primary"
          variant="filled"
          sx={{ padding: "12px 8px" }}
        >
          <Typography variant="h6" component="span" sx={{ fontWeight: "bold" }}>
            {year}
          </Typography>
        </TimelineDot>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "24px", px: 2 }}>
        <Typography variant="h6" component="span"></Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
