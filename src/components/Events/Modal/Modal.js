import { Fragment } from "react";
import classes from "./Modal.module.scss";

const Modal = ({ returnCardID, setReturnCardID }) => {
  return (
    <div>
      <div className={classes.modal}>
        <p>TST</p>
        {/* Css overlay is an div that is behind the modal, which closes it when clicked outside the modal for ui experience */}
      </div>
      <div onClick={() => setReturnCardID(null)} className={classes.overlay}></div>
    </div>
  );
};

export default Modal;
