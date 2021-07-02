import React, { useState, useEffect } from "react";
import { fetch2api } from "../../../helpers/helper";
import classes from "./Modal.module.scss";

const Modal = ({ returnCardID, setReturnCardID, returnCardCOLOR }) => {
  const [modalData, setModalData] = useState("");

  const getEventData = async () => {
    const url = `https://api.mediehuset.net/mediesuset/events/${returnCardID}`;
    const result = await fetch2api(url);
    setModalData(result?.item);
  };

  useEffect(() => {
    getEventData();
  }, []);

  console.log(modalData);
  return (
    <div>
      <div className={classes.modal}>
        {/* 
          Set bg color to switch case from /Events
          Value: `${SCENE_THEME}` === returnCardCOLOR
         */}
        <header style={{ backgroundColor: returnCardCOLOR }}>
          <h2>{modalData.stage_name}</h2>
        </header>
        <div className={classes.content}>
          <figure>
            <img src={modalData.image} alt={modalData.title} />
          </figure>
          <div>
            <h3>{modalData.title}</h3>
            <p>{modalData.description}</p>
          </div>
        </div>
        {/* Css overlay is an div that is behind the modal, which closes it when clicked outside the modal for ui experience */}
      </div>
      <div
        onClick={() => setReturnCardID(null)}
        className={classes.overlay}
      ></div>
    </div>
  );
};

export default Modal;
