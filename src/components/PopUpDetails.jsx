import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/details.scss";
import xmark from "../assets/xmark.svg";

const PopUpDetails = (props) => {
  const items = useSelector((state) => state.task.items);
  const dispatch = useDispatch();

  return (
    <div className="popup-window">
      <div className="popup-header">
        <h4>{props.task.date} </h4>
        <h1> {props.task.title}</h1>
        <div className="xmark" onClick={() => props.setPopup(false)}>
          <img width={24} height={20} src={xmark} alt="" />
        </div>
      </div>
      <div className="description">{props.task.details}</div>
    </div>
  );
};

export default PopUpDetails;
