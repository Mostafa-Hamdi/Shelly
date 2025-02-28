import React from "react";
import Heading from "../../main components/Heading";
import EventContent from "./components/EventContent";

const EventSingle = () => {
  return (
    <div className="event-single">
      <Heading pageName="Events" nestedPage="Event Single" />
      <EventContent />
    </div>
  );
};

export default EventSingle;
