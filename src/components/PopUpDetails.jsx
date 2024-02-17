import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/details.scss";

const PopUpDetails = (props) => {
  const items = useSelector((state) => state.task.items);
  const dispatch = useDispatch();

  return (
    <div className="popup-window">
      {<h1> {props.task.title}</h1>}

      <div className="description">{props.task.details}</div>
    </div>
  );
};

export default PopUpDetails;
