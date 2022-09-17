import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import FGCTimelineItem from "./FGCTimelineItem";
import timelineData from "../timelineData.json";
import FGCTimelineItemYear from "./FGCTimelineItemYear";

export default function FGCTimeline() {
  return (
    <Timeline position="alternate">
      {prepData().map((timelineItem) => {
        if (timelineItem.eventType === "yearNode")
          return (
            <FGCTimelineItemYear
              year={timelineItem.year}
              key={timelineItem.id}
            />
          );
        else
          return <FGCTimelineItem data={timelineItem} key={timelineItem.id} />;
      })}
    </Timeline>
  );
}

function prepData() {
  // Get the years
  const years = [...new Set(timelineData.flatMap((data) => data.year))];
  let ret = timelineData;

  // For each year, insert a new year node into the return array at the chronologically earliest spot
  for (let i = 0; i < years.length; i++) {
    let year = years[i];
    let idx = ret.findIndex((data) => data.year >= year);
    idx = idx < 0 ? 0 : idx;

    // If Year node already exists in the collection, no need to augment again
    if (ret[idx].eventType !== "yearNode") {
      let yearNode = {
        year,
        eventType: "yearNode",
        event: year,
      };
      ret.splice(idx, 0, yearNode);
    }
  }

  // Assign unique identifiers to each node (for convenience)
  ret = ret.map((event) => {
    event.id = Math.floor(Math.random() * 100000000000);
    return event;
  });

  // Sort the collection
  ret.sort((a, b) => {
    return a.year - b.year;
  });

  return ret;
}
