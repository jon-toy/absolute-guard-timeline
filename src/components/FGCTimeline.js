import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import FGCTimelineItem from "./FGCTimelineItem";
import FGCTimelineItemYear from "./FGCTimelineItemYear";
import FGCTimelineItemEra from "./FGCTimelineItemEra";
import EraData from "../eraData.json";

export default function FGCTimeline({ rows, filters, controls }) {
  return (
    <Timeline position="alternate">
      {prepData(controls).map((timelineItem) => {
        if (timelineItem.eventType === "yearNode")
          if (filters.showYearNode === true)
            return (
              <FGCTimelineItemYear
                year={timelineItem.year}
                key={timelineItem.id}
              />
            );
          else return "";
        else if (timelineItem.eventType === "eraNode")
          if (filters.showEraNode === true)
            return (
              <FGCTimelineItemEra
                era={timelineItem.era}
                key={timelineItem.year + "era"}
              />
            );
          else return "";
        else
          return <FGCTimelineItem data={timelineItem} key={timelineItem.id} />;
      })}
    </Timeline>
  );

  function prepData(controls) {
    // Get the years
    const years = [...new Set(rows.flatMap((data) => data.year))];
    let ret = rows.flatMap((row) => row); // Fight the powah

    let eras = EraData.flatMap((era) => era);
    if (controls.sort === "desc") eras.splice(eras.length - 1, 1); // Remove the Future era for descending sort

    // For each year, insert a new year node into the return array at the chronologically earliest spot
    for (let i = 0; i < years.length; i++) {
      let year = years[i];
      let yearIdx = ret.findIndex((data) => data.year >= year);
      yearIdx = yearIdx < 0 ? 0 : yearIdx;

      // If Year node already exists in the collection, no need to augment again
      if (ret[yearIdx].eventType.indexOf("Node") < 0) {
        let yearNode = {
          year,
          eventType: "yearNode",
          event: year,
        };
        ret.splice(yearIdx, 0, yearNode);
      }

      // If the Year matches the start of an era, insert an eraNode too
      let startYear = ret[yearIdx].year;
      let eraIdx = -1;
      if (controls.sort === "asc")
        eraIdx = eras.findIndex((era) => era.startYear === startYear);
      if (controls.sort === "desc")
        eraIdx = eras.findIndex((era) => era.endYear === startYear);
      if (eraIdx !== -1 && ret[yearIdx].eventType.indexOf("yearNode") >= 0) {
        let eraNode = {
          year,
          eventType: "eraNode",
          era: eras[eraIdx],
        };
        ret.splice(yearIdx, 0, eraNode);
        eras.splice(eraIdx, 1);
      }
    }

    // Assign unique identifiers to each node (for convenience)
    // Convert tags to an array
    ret = ret.map((event) => {
      event.id = Math.floor(Math.random() * 100000000000);
      if (event.tags && !Array.isArray(event.tags)) {
        event.tags = event.tags.split(",").map((tag) => tag.trim());
      } else if (!Array.isArray(event.tags)) {
        event.tags = [];
      }
      return event;
    });

    // Sort the collection
    if (controls.sort === "desc") {
      ret.sort((a, b) => {
        return b.year - a.year;
      });
    } else if (controls.sort === "asc") {
      ret.sort((a, b) => {
        return a.year - b.year;
      });
    }

    return ret;
  }
}
