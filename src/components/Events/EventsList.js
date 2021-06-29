import classes from "./Events.module.scss";
import React, { useState, useEffect } from "react";
import { fetch2api } from "../../helpers/helper";
import Events from "./Events";

const EventsList = () => {
  const [eventData, setEventData] = useState();

  const getEventData = async () => {
    const url = `https://api.mediehuset.net/mediesuset/events`;
    const result = await fetch2api(url);
    setEventData(result?.items);
  };

  useEffect(() => {
    getEventData();
  }, []);

  return (
    <section className={classes.container}>
      <Events eventData={eventData} />
    </section>
  );
};

export default EventsList;
