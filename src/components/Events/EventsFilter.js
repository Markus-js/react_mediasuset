import React, { Fragment } from "react";

const Events = ({ eventData, filterColor }) => {
  let arrEvents = [];
  let arrIndex = []
  

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
      //arrIndex.push(parseInt(lastTwo))
      arrIndex.push(e)
    })

      console.log(arrIndex)
    }



  

  return (
    <Fragment>
      {arrIndex &&
        arrIndex.map((i) => {
          
          
          return (
            <div key={i}>
              <p>{i}</p>
            </div>
          );
        })}
    </Fragment>
  );
};

export default Events;
