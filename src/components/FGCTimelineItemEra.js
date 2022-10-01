import * as React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function FGCTimelineItemEra({ era }) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
      ></TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        <TimelineDot color="primary" variant="filled">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              pl: 0,
              pb: 0,
              padding: "16px 32px",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{
                fontWeight: "bold",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              {era.name}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                fontWeight: "bold",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              {era.startYear} - {era.endYear > 0 ? era.endYear : "?"}
            </Typography>
          </Box>
        </TimelineDot>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "24px", px: 2 }}>
        <Typography variant="h6" component="span"></Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
