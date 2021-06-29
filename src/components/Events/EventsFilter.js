import React, { Fragment } from "react";
import classes from "./Events.module.scss";

const Events = ({ eventData, filterColor }) => {
  let arrEvents = [];

  

   if(eventData) {
    eventData.map((e) => {
      let title = e.title;
      let i = e.id;
      arrEvents.push(title+" "+i);
    });

    arrEvents.sort(function (a, b) {
      return a.localeCompare(b); //using String.prototype.localCompare()
    });

    arrEvents.map((e) => {
      const lastTwo = e.slice(-2);
      arrEvents.push(lastTwo)
    })
    
   }

  

  console.log(arrEvents);

  return (
    <Fragment>
      {eventData &&
        eventData.map((event) => {
          
          
          return (
            <div key={event.id} className={classes.card}>
              <figure>
                <img src={event.image} alt={event.title} />
              </figure>
              {/* Set bg color to switch case */}
              <footer >
                <h3>{event.title}</h3>
              </footer>
            </div>
          );
        })}
    </Fragment>
  );
};

export default Events;
