import React from "react";
import Heading from "../../main components/Heading";
import AllEvents from "./components/AllEvents";

const Events = () => {
  return (
    <div className="events">
      <Heading pageName="events" />
      <AllEvents />
    </div>
  );
};

export default Events;
