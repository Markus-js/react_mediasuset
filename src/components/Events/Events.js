import React, { Fragment, useState } from "react";
import classes from "./Events.module.scss";

const Events = ({ eventData, filterColor, setReturnCardID, setReturnCardCOLOR }) => {
  //   let arrEvents = [];

  //   if (filterColor === "a-å") {
  //     arrEvents.push(1);
  //   }

  //   if (arrEvents.length > 0) {
  //     console.log("!!");
  //     eventData.map((e) => {
  //       let title = e.title;
  //       arrEvents.push(title);
  //     });

  //     arrEvents.sort(function (a, b) {
  //       return a.localeCompare(b); //using String.prototype.localCompare()
  //     });
  //   }

  //   console.log(arrEvents);

  function handleModal(currentId, SCENE_THEME) {
    setReturnCardID(currentId)
    setReturnCardCOLOR(SCENE_THEME)
  }

  return (
    <Fragment>
      {eventData &&
        eventData.map((event) => {
          // Delete first event due to empty image
          if (event.id === "1") {
            return "";
          }
          // Filter
          // Value from EventList/handleColorFilter()
          // If stage_name === stage_name => filter out that scene with corresponding color
          if (event.stage_name.toLowerCase() === filterColor) {
            return "";
          }

          //   switch (event.stage_name.toLowerCase() === killd) {
          //     case "rød scene" :
          //       return;
          //   }

          // Set Time
          const timestamp = event.datetime;
          const time = new Intl.DateTimeFormat("en-DK", {
            hour: "2-digit",
            minute: "2-digit",
          }).format(timestamp);

          // Set Background Color
          // Value to set CSS style in JSX
          let SCENE_THEME; // === to red, blue, green or purple
          const backgroundColor = event.stage_name.toLowerCase(); // = rød scene
          // Declare possiblilities
          const red = "#E9485B";
          const blue = "#4A6FBF";
          const green = "#54A047";
          const purple = "#A12E8F";
          // def = default- white
          const def = "#fff";

          switch (backgroundColor) {
            case "rød scene":
              SCENE_THEME = red;
              break;
            case "blå scene":
              SCENE_THEME = blue;
              break;
            case "grøn scene":
              SCENE_THEME = green;
              break;
            case "lilla scene":
              SCENE_THEME = purple;
              break;
            default:
              SCENE_THEME = def;
              break;
          }
          return (
            <div
              key={event.id}
              className={classes.card}
              onClick={() => handleModal(event.id, SCENE_THEME)}
            >
              <figure>
                <img src={event.image} alt={event.title} />
              </figure>
              {/* Set bg color to switch case */}
              <footer style={{ backgroundColor: `${SCENE_THEME}` }}>
                <h3>{event.title}</h3>
                <p>{time}</p>
              </footer>
            </div>
          );
        })}
    </Fragment>
  );
};

export default Events;
