import React, { useState } from "react";
import { newTask } from "../redux/slices/taskSlice";
import { useDispatch, useSelector } from "react-redux";

const PopUpCreate = (props) => {
  const items = useSelector((state) => state.task.items);
  const dispatch = useDispatch();

  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputDate, setInputDate] = useState("");

  const newItem = (e) => {
    e.preventDefault();
    if (!inputTitle || !inputDesc || !inputDate) {
      alert("All fields are required!");
      return;
    }
    const newItems = [
      {
        title: inputTitle,
        details: inputDesc,
        date: inputDate,
      },
    ];
    dispatch(newTask([...items, ...newItems]));
    props.setPopup(false);
  };

  return (
    <div className={props.popUp ? "overflow" : ""}>
      {props.popUp && (
        <div className="popup-window">
          <form className="popup__inputs" onSubmit={newItem}>
            <input
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              type="text"
              placeholder="Write a title"
              required
            />
            <input
              value={inputDesc}
              onChange={(e) => setInputDesc(e.target.value)}
              type="text"
              placeholder="Write a description"
              required
            />
            <input
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
              type="date"
              placeholder="Choose a date"
              required
            />
            <div className="wrapper-button__save">
              <button className="button__save" type="submit">
                Confirm
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PopUpCreate;
