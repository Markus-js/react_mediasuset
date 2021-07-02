import classes from "./Events.module.scss";
import React, { useState, useEffect } from "react";
import { fetch2api } from "../../helpers/helper";
import EventsFilter from "./EventsFilter";
import Events from "./Events";
import Modal from "./Modal/Modal";

const EventsList = () => {
  const [eventData, setEventData] = useState();
  const [filterColor, setFilterColor] = useState();
  const [toggle, setToggle] = useState();
  // MODAL
  const [returnCardID, setReturnCardID] = useState();
  const [returnCardCOLOR, setReturnCardCOLOR] = useState();

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
    setFilterColor(filterColorValue);
    setToggle(false);
  }
  function handleToggleSort(boolean) {
    setToggle(boolean);
  }

  return (
    <section>
      <div>
        <button onClick={() => handleToggleSort(true)}>A-Å</button>
        {/* Set scene color to be filtered out */}
        <button onClick={() => handleColorFilter("")}>ALLE</button>
        <button onClick={() => handleColorFilter("rød scene")}>
          RØD SCENE
        </button>
        <button onClick={() => handleColorFilter("blå scene")}>
          BLÅ SCENE
        </button>
        <button onClick={() => handleColorFilter("grøn scene")}>
          GRØN SCENE
        </button>
        <button onClick={() => handleColorFilter("lilla scene")}>
          LILLA SCENE
        </button>
      </div>
      <main className={classes.container}>
        {/* <Events eventData={eventData} filterColor={filterColor} /> */}
        {!toggle && (
          <Events
            eventData={eventData}
            filterColor={filterColor}
            setReturnCardID={setReturnCardID}
            setReturnCardCOLOR={setReturnCardCOLOR}
          />
        )}
        {toggle && <EventsFilter eventData={eventData} />}

        {returnCardID && (
          <Modal
            returnCardID={returnCardID}
            setReturnCardID={setReturnCardID}
            returnCardCOLOR={returnCardCOLOR}
          />
        )}
      </main>
    </section>
  );
};

export default EventsList;
