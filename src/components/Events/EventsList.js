import classes from "./Events.module.scss";
import React, { useState, useEffect } from "react";
import { fetch2api } from "../../helpers/helper";
import EventsFilter from "./EventsFilter";

const EventsList = () => {
  const [eventData, setEventData] = useState();
  const [filterColor, setFilterColor] = useState();

  const getEventData = async () => {
    const url = `https://api.mediehuset.net/mediesuset/events`;
    const result = await fetch2api(url);
    setEventData(result?.items);
  };

  useEffect(() => {
    getEventData();
  }, []);

  // Filter {color} scene, and sends it down as an prop.
  /*
     => /Events.js:
          if (event.stage_name.toLowerCase() === filterColor) {
            return "";
          }
  */
  function handleColorFilter(filterColorValue) {
    setFilterColor(filterColorValue)
  }


  return (
    <section>
      <div>
      <button onClick={() => handleColorFilter("a-å")} >A-Å</button>
         {/* Set scene color to be filtered out */}
         <button onClick={() => handleColorFilter("rød scene")} >RØD SCENE</button>
         <button onClick={() => handleColorFilter("blå scene")} >BLÅ SCENE</button>
         <button onClick={() => handleColorFilter("grøn scene")} >GRØN SCENE</button>
         <button onClick={() => handleColorFilter("lilla scene")} >LILLA SCENE</button>
      </div>
      <main className={classes.container}>
        {/* <Events eventData={eventData} filterColor={filterColor} /> */}
        
        <EventsFilter eventData={eventData} filterColor={filterColor} />
      </main>
    </section>
  );
};

export default EventsList;
