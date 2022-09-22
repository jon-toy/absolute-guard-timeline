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
import PersonIcon from "@mui/icons-material/Person";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#cdd1c4",
  borderTop: "10px solid #30323d",
  borderLeft: "10px solid #30323d",
  borderRight: "10px solid #30323d",
  borderBottom: "10px solid #30323d",
  boxShadow: 24,
  p: 4,
  padding: "none",
};

export default function FGCTimelineItem({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const cardMedia = data.imageUrl ? (
    <CardMedia component="img" height="140" image={data.imageUrl} />
  ) : (
    ""
  );

  // TODO: Figure out how to include the modal without breaking the alternating timeline item thing
  return (
    <div>
      <TimelineItem onClick={handleOpen}>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          {data.year}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={modalStyle}>
          {cardMedia}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.event}
            </Typography>
            <Typography variant="body" color="text.secondary" component="div">
              {data.longDescription}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "left", pl: 1, pb: 1 }}>
              <TimelineDot
                color={timelineDotColor}
                variant={variant}
                component="div"
              >
                {icon}
              </TimelineDot>
              <TimelineContent sx={{ py: "24px", px: 2 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  {data.eventType}
                </Typography>
              </TimelineContent>
            </Box>
            <Typography
              variant="caption"
              color="text.secondary"
              component="div"
            >
              Relevant Guests: {data.relevantGuests}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
}
